from flask_socketio import SocketIO, emit, disconnect
from flask import Flask, request, jsonify, abort
from slugify import slugify

import string

from v1.apps.campaign import campaign

#Models
from v1.apps.models import Image
from .models import Character, CharacterSheet
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
        return Character.query.filter(Character.id == character_id).first()
    except ValueError:
        return Character.query.filter(Character.slug == character_id).first()

#Create
@campaign.route(character_base_url, methods=['POST'])
def create_character(campaign_id):
    user, campaign = request_campaign_auth(request, campaign_id)
    image = None
    sheet = None
    data     = request.form.to_dict()
    name       = get_required_data(data, "name", min_length=4)
    if 'image' in request.files:
        file     = request.files['image']
        file_upload_location = "campaigns/" + campaign.slug + "/characters/portraits/"
        file_results = upload_google_cloud_storage(file, file_upload_location)
        image = Image(url=file_results['url'], blob=file_results['blob_name'])
    if 'sheet' in request.files:
        file     = request.files['sheet']
        file_upload_location = "campaigns/" + campaign.slug + "/characters/sheets/"
        file_results = upload_google_cloud_storage(file, file_upload_location)
        sheet = CharacterSheet(url=file_results['url'], blob=file_results['blob_name'])
    character = Character(name=name, author=user, campaign=campaign, image=image, sheet=sheet)
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
    user, campaign = request_campaign_auth(request, campaign_id)
    character = get_character(character_id)
    if character is not None:
        data        = request.get_json()
        name        = get_optional_data(data, "name")
        if name is not None:
            character.set_name(name)
        db.session.commit()
        return jsonify(parse_character(character))
    else:
        abort(404)

#  Delete

@campaign.route(character_base_url + '/<character_id>', methods=['DELETE'])
def delete_character(campaign_id, character_id):
    user, campaign = request_campaign_auth(request, campaign_id)
    character = get_character(character_id)
    name = character.name
    if character is not None:
        if character.image is not None and character.image.blob is not None:
            delete_google_cloud_storage(character.image.blob)
        if character.sheet is not None and character.sheet.blob is not None:
            delete_google_cloud_storage(character.sheet.blob)
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
