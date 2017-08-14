***REMOVED***, emit, disconnect
***REMOVED***, request, jsonify, abort
from slugify import slugify

import string

from v1.apps.campaign import campaign

#Models
from .models import Character
from v1.apps.campaign.models import Campaign
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

character_base_url = '/<int:campaign_id>/characters'
#Create
@campaign.route(character_base_url, methods=['POST'])
def create_character(campaign_id):
    data        = request.get_json()
    name       = get_required_data(data, "name")
    author_id   = get_required_data(data, "author_id")
    campaign    = Campaign.query.get(campaign_id)
    author      = User.query.get(author_id)
    if campaign is not None and author is not None:
        character = Character(name=name, author=author, campaign=campaign)
        db.session.add(character)
        db.session.commit()
        return jsonify(parse_character(character))
    else:
        abort(400)

#Read

@campaign.route(character_base_url, methods=['GET'])
def get_characters(campaign_id):
    campaign = Campaign.query.get(campaign_id)
    if campaign is not None:
        return jsonify(parse_characters(campaign.characters))
    else:
        abort(404)

@campaign.route(character_base_url + '/<int:character_id>', methods=['GET'])
def get_character_by_id(campaign_id, character_id):
    character = Character.query.get(character_id)
    if character is not None:
        return jsonify(parse_character(character))
    else:
        abort(404)

@campaign.route(character_base_url + '/<string:character_slug>', methods=['GET'])
def get_character_by_slug(campaign_id, character_slug):
    character = Character.query.filter_by(slug = character_slug).first()
    if character is not None:
        return jsonify(parse_character(character))
    else:
        abort(404)

#
# #Update
#
@campaign.route(character_base_url + '/<int:character_id>', methods=['POST', 'PUT'])
def update_character_by_id(campaign_id, character_id):
    character = Character.query.get(character_id)
    if character is not None and character.campaign.id == campaign_id:
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

@campaign.route(character_base_url + '/<int:character_id>', methods=['DELETE'])
def delete_character_by_id(campaign_id, character_id):
    print("Deleting", character_id)
    character = Character.query.get(character_id)
    name = character.name
    if character is not None and character.campaign.id == campaign_id:
        db.session.delete(character)
        db.session.commit()
    character = Character.query.get(character_id)
    if character is None:
        return jsonify({"deleted": character_id})
    else:
        message = "Character" + name + " was not deleted"
        code = 400
        return make_response(jsonify({'error': message}), code)
