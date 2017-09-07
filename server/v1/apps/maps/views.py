import os, sys
from flask import request, jsonify, abort

from v1.apps import db
from v1.apps.campaign import campaign
#Models
from v1.apps.models import Image
from .models import CampaignMap
from v1.apps.campaign.models import Campaign, request_campaign_auth
from v1.apps.users.models import User
#Parsers
from v1.apps.users.parsers import *
from .parsers import *
#Error handling
from v1.apps.errors import *
from v1.apps.campaign.errors import *
#Utils
from v1.apps.utils import *

map_base_url = '/<campaign_id>/maps'

def get_map(map_id):
    try:
        map_id = int(map_id)
        return CampaignMap.query.filter(CampaignMap.id == map_id).first()
    except ValueError:
        return CampaignMap.query.filter(CampaignMap.slug == map_id).first()


#Create
@campaign.route(map_base_url, methods=['POST'])
def create_map(campaign_id):
    user, campaign = request_campaign_auth(request, campaign_id)
    if 'file' not in request.files:
        print("NO FILE")
        return jsonify({'error': "No File Given"})
    data     = request.form.to_dict()
    name       = get_required_data(data, "name")
    author_id   = get_required_data(data, "author_id")
    author      = User.query.get(author_id)
    file     = request.files['file']
    file_upload_location = "campaigns/" + campaign.slug + "/maps/"
    file_results = upload_google_cloud_storage(file, file_upload_location)
    if campaign is not None and author is not None:
        image = Image(url=file_results['url'], blob=file_results['blob_name'])
        map = CampaignMap(name=name, author=author, campaign=campaign, image=image)
        db.session.add(map)
        db.session.commit()
        print(map.name, "uploaded!")
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

@campaign.route(map_base_url + '/<map_id>', methods=['GET'])
def get_map_request(campaign_id, map_id):
    map = get_map(map_id)
    if map is not None:
        return jsonify(parse_map(map))
    else:
        abort(404)

#
# #Update
#
@campaign.route(map_base_url + '/<map_id>', methods=['POST', 'PUT'])
def update_map(campaign_id, map_id):
    map = get_map(map_id)
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

@campaign.route(map_base_url + '/<map_id>', methods=['DELETE'])
def delete_map(campaign_id, map_id):
    user, campaign = request_campaign_auth(request, campaign_id)
    map = get_map(map_id)
    name = map.name
    if map is not None:
        print("DELETE")
        if map.image.blob is not None:
            delete_google_cloud_storage(map.image.blob)
        db.session.delete(map)
        db.session.commit()
    map = CampaignMap.query.get(map_id)
    if map is None:
        return jsonify({"deleted": map_id})
    else:
        message = "CampaignMap" + name + " was not deleted"
        code = 400
        return make_response(jsonify({'error': message}), code)
