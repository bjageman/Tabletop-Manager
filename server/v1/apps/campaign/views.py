***REMOVED***, emit, disconnect
***REMOVED***, request, jsonify, abort
from slugify import slugify

import string

from . import campaign

#Models
from .models import *
from v1.apps.users.models import User

#DB/Sockets
from v1.apps import socketio, db
#Parsers
from v1.apps.users.parsers import *
from .parsers import *

#Error handling
from v1.apps.errors import *
from .errors import *

#Utils
from v1.apps.utils import *

def get_campaign(campaign_id):
    try:
        campaign_id = int(campaign_id)
        return Campaign.query.filter(Campaign.id == campaign_id).first()
    except ValueError:
        return Campaign.query.filter(Campaign.slug == campaign_id).first()

#Create
@campaign.route('', methods=['POST'])
def create_campaign():
    data = request.get_json()
    name       =   get_required_data(data, "name")
    author_id    =   get_required_data(data, "author_id")
    author = User.query.get(author_id)
    if author is not None:
        campaign = Campaign(name=name, owner=author)
        campaign.players.append(author)
        db.session.add(campaign)
        db.session.commit()
        return jsonify(parse_campaign(campaign))
    else:
        abort(400)

#Read

@campaign.route('/<campaign_id>', methods=['GET'])
def get_campaign_request(campaign_id):
    campaign = get_campaign(campaign_id)
    if campaign is not None:
        return jsonify(parse_campaign_detailed(campaign))
    else:
        abort(404)

#Update

@campaign.route('/<campaign_id>', methods=['POST'])
def update_campaign_by_id(campaign_id):
    data = request.get_json()
    name       =   get_required_data(data, "name")
    campaign = get_campaign(campaign_id)
    campaign.update({"name":name})
    campaign = campaign.first()
    campaign.slug = slugify(campaign.name, '')
    db.session.commit()
    return jsonify(parse_campaign(campaign))

#Delete
@campaign.route('/<campaign_id>', methods=['DELETE'])
def delete_campaign_by_id(campaign_id):
    campaign = get_campaign(campaign_id)
    db.session.delete(campaign)
    db.session.commit()
    campaign = Campaign.query.get(campaign_id)
    if campaign is None:
        return jsonify({"deleted": campaign_id})
    else:
        message = "Campaign was not deleted"
        code = 400
        return make_response(jsonify({'error': message}), code)
