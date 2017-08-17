import os
from flask_socketio import SocketIO, emit, disconnect
from flask import Flask, request, jsonify, abort
from slugify import slugify

import string

from v1.apps.campaign import campaign

#Models
from .models import CampaignMap
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

map_base_url = '/<int:campaign_id>/maps'
#Create

def file_upload(file):
    try:
        extension = os.path.splitext(file.filename)[1]
        f_name = str(uuid.uuid4()) + extension
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], f_name))
        return True
    except:
        return False

@campaign.route(map_base_url, methods=['POST'])
def create_map(campaign_id):
    data        = request.get_json()
    name       = get_required_data(data, "name")
    author_id   = get_required_data(data, "author_id")
    campaign    = Campaign.query.get(campaign_id)
    author      = User.query.get(author_id)
    if campaign is not None and author is not None:
        map = CampaignMap(name=name, author=author, campaign=campaign)
        db.session.add(map)
        db.session.commit()
        return jsonify(parse_map(map))
    else:
        abort(400)

#Read

@campaign.route(map_base_url, methods=['GET'])
def get_maps(campaign_id):
    campaign = Campaign.query.get(campaign_id)
    if campaign is not None:
        return jsonify(parse_maps(campaign.maps))
    else:
        abort(404)

@campaign.route(map_base_url + '/<int:map_id>', methods=['GET'])
def get_map_by_id(campaign_id, map_id):
    map = CampaignMap.query.get(map_id)
    if map is not None:
        return jsonify(parse_map(map))
    else:
        abort(404)

@campaign.route(map_base_url + '/<string:map_slug>', methods=['GET'])
def get_map_by_slug(campaign_id, map_slug):
    map = CampaignMap.query.filter(CampaignMap.slug == map_slug).first()
    if map is not None:
        return jsonify(parse_map(map))
    else:
        abort(404)

#
# #Update
#
@campaign.route(map_base_url + '/<int:map_id>', methods=['POST', 'PUT'])
def update_map_by_id(campaign_id, map_id):
    map = CampaignMap.query.get(map_id)
    if map is not None and map.campaign.id == campaign_id:
        data        = request.get_json()
        name        = get_optional_data(data, "name")
        print(name)
        if name is not None:
            map.set_name(name)
        db.session.commit()
        return jsonify(parse_map(map))
    else:
        abort(404)

#
#  Delete
#

@campaign.route(map_base_url + '/<int:map_id>', methods=['DELETE'])
def delete_map_by_id(campaign_id, map_id):
    map = CampaignMap.query.get(map_id)
    name = map.name
    if map is not None and map.campaign.id == campaign_id:
        db.session.delete(map)
        db.session.commit()
    map = CampaignMap.query.get(map_id)
    if map is None:
        return jsonify({"deleted": map_id})
    else:
        message = "CampaignMap" + name + " was not deleted"
        code = 400
        return make_response(jsonify({'error': message}), code)
