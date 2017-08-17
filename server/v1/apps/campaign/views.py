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

#Create
@campaign.route('', methods=['POST'])
def create_campaign():
    data = request.get_json()
    name       =   get_required_data(data, "name")
    owner_id    =   get_required_data(data, "owner_id")
    owner = User.query.get(owner_id)
    if owner is not None:
        campaign = Campaign(name=name, owner=owner)
        db.session.add(campaign)
        db.session.commit()
        return jsonify(parse_campaign(campaign))
    else:
        abort(400)

#Read

@campaign.route('/<int:campaign_id>', methods=['GET'])
def get_campaign_by_id(campaign_id):
    campaign = Campaign.query.get(campaign_id)
    if campaign is not None:
        return jsonify(parse_campaign_detailed(campaign))
    else:
        abort(404)

@campaign.route('/<string:campaign_slug>', methods=['GET'])
def get_campaign_by_slug(campaign_slug):
    campaign = Campaign.query.filter_by(slug=campaign_slug).first()
    if campaign is not None:
        return jsonify(parse_campaign_detailed(campaign))
    else:
        abort(404)

#Update

@campaign.route('/<int:campaign_id>', methods=['POST'])
def update_campaign_by_id(campaign_id):
    data = request.get_json()
    name       =   get_required_data(data, "name")
    campaign = Campaign.query.filter_by(id=campaign_id)
    campaign.update({"name":name})
    campaign = campaign.first()
    campaign.slug = slugify(campaign.name, '')
    db.session.commit()
    return jsonify(parse_campaign(campaign))

#Delete
@campaign.route('/<int:campaign_id>', methods=['DELETE'])
def delete_campaign_by_id(campaign_id):
    campaign = Campaign.query.get(campaign_id)
    db.session.delete(campaign)
    db.session.commit()
    campaign = Campaign.query.get(campaign_id)
    if campaign is None:
        return jsonify({"deleted": campaign_id})
    else:
        message = "Campaign was not deleted"
        code = 400
        return make_response(jsonify({'error': message}), code)
