import os, sys
from flask_socketio import SocketIO, emit, disconnect
from flask import Flask, request, jsonify, abort
from werkzeug.utils import secure_filename

from v1.apps.campaign import campaign
#Models
from .models import CampaignMap
from v1.apps.campaign.models import Campaign
from v1.apps.users.models import User
#DB/Sockets
from v1.apps import socketio, db, app
#Parsers
from v1.apps.users.parsers import *
from .parsers import *
#Error handling
from v1.apps.errors import *
from v1.apps.campaign.errors import *
#Utils
from v1.apps.utils import *
from v1.apps.config import ALLOWED_EXTENSIONS


map_base_url = '/<int:campaign_id>/maps'
#Create

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

def file_upload(file, folder=""):
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        filepath = os.path.join(app.config['UPLOAD_FOLDER'] + folder, filename)
        file.save(filepath)
        return filepath
    return None

@campaign.route(map_base_url, methods=['POST'])
def create_map(campaign_id):
    if 'file' not in request.files:
        print("NO FILE")
        return jsonify({'error': "No File Given"})
    file     = request.files['file']
    filepath = file_upload(file, "/maps")
    data     = request.form.to_dict()
    name       = get_required_data(data, "name")
    author_id   = get_required_data(data, "author_id")
    campaign    = Campaign.query.get(campaign_id)
    author      = User.query.get(author_id)
    if campaign is not None and author is not None:
        map = CampaignMap(name=name, author=author, campaign=campaign, image=filepath)
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
