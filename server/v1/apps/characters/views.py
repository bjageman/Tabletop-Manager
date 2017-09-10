***REMOVED***, emit, disconnect
***REMOVED***, request, jsonify, abort
from slugify import slugify

import string

from v1.apps.campaign import campaign

#Models
from .models import Character
from v1.apps.campaign.models import Campaign
from v1.apps.campaign.auth import request_campaign_auth
from v1.apps.users.models import User

#DB/Sockets
from v1.apps import socketio, db
#Parsers
from v1.apps.users.parsers import *
from .parsers import *

#Error handling
from v1.apps.errors import *
from v1.apps.campaign.errors import *

#Utils
from v1.apps.utils import *

from v1.apps.campaign.views import get_campaign

character_base_url = '/<campaign_id>/characters'

def get_character(character_id):
    try:
        character_id = int(character_id)
        print(character_id)
        return Character.query.filter(Character.id == character_id).first()
    except ValueError:
        print("error val")
        return Character.query.filter(Character.slug == character_id).first()

#Create
@campaign.route(character_base_url, methods=['POST'])
def create_character(campaign_id):
    user, campaign = request_campaign_auth(request, campaign_id)
    data        = request.get_json()
    name       = get_required_data(data, "name")
    character = Character(name=name, author=user, campaign=campaign)
    db.session.add(character)
    db.session.commit()
    return jsonify(parse_character(character))

#Read
@campaign.route(character_base_url, methods=['GET'])
def get_campaign_characters(campaign_id):
    campaign    = get_campaign(campaign_id)
    characters = Character.query.filter_by(campaign=campaign)
    data = request.args
    name = get_optional_data(data, "name")
    characters = search_by_name(characters, Character, name)
    if campaign is not None:
        return jsonify(parse_characters(characters))
    else:
        abort(404)

@campaign.route(character_base_url + '/<character_id>', methods=['GET'])
def get_character_request(campaign_id, character_id):
    character = get_character(character_id)
    if character is not None:
        return jsonify(parse_character(character))
    else:
        abort(404)

#Update
@campaign.route(character_base_url + '/<character_id>', methods=['POST', 'PUT'])
def update_character(campaign_id, character_id):
    print("UPDATE", character_id)
    user, campaign = request_campaign_auth(request, campaign_id)
    print(user, campaign)
    character = get_character(character_id)
    print("CHARACTER", character)
    if character is not None:
        data        = request.get_json()
        name        = get_optional_data(data, "name")
        if name is not None:
            character.set_name(name)
        db.session.commit()
        return jsonify(parse_character(character))
    else:
        abort(404)


#
#  Delete
#

@campaign.route(character_base_url + '/<character_id>', methods=['DELETE'])
def delete_character(campaign_id, character_id):
    user, campaign = request_campaign_auth(request, campaign_id)
    character = get_character(character_id)
    name = character.name
    if character is not None:
        db.session.delete(character)
        db.session.commit()
    character = get_character(character_id)
    if character is None:
        message = name + " was deleted"
        return jsonify({"message": message})
    else:
        message = "Character" + name + " was not deleted"
        code = 400
        return make_response(jsonify({'error': message}), code)
