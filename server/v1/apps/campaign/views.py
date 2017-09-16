from flask_socketio import SocketIO, emit, disconnect
from flask import Flask, request, jsonify, abort
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
from v1.apps.auth import verify_auth

def get_campaign(campaign_id):
    try:
        campaign_id = int(campaign_id)
        return Campaign.query.filter(Campaign.id == campaign_id).first()
    except ValueError:
        return Campaign.query.filter(Campaign.slug == campaign_id).first()

#Create
@campaign.route('', methods=['POST'])
def create_campaign():
    user = verify_auth(request)
    data = request.form.to_dict()
    name = get_required_data(data, "name", min_length=4)
    campaign = Campaign(name=name, owner=user)
    image = None
    if 'image' in request.files:
        file     = request.files['image']
        file_upload_location = "campaigns/" + campaign.slug + "/banner/"
        file_results = upload_google_cloud_storage(file, file_upload_location)
        image = Image(url=file_results['url'], blob=file_results['blob_name'])
        campaign.image = image
    campaign.players.append(user)
    db.session.add(campaign)
    db.session.commit()
    return jsonify(parse_campaign(campaign))

#Read
@campaign.route('', methods=['GET'])
def get_campaigns():
    user = verify_auth(request)
    campaigns = Campaign.query.filter_by(owner=user)
    data = request.args
    name = get_optional_data(data, "name")
    campaigns = search_by_name(campaigns, Campaign, name)
    return jsonify(parse_campaigns(campaigns))



@campaign.route('/<campaign_id>', methods=['GET'])
def get_campaign_request(campaign_id):
    campaign = get_campaign(campaign_id)
    data = request.args
    name = get_optional_data(data, "name")
    characters = search_by_name(campaign, Campaign, name)
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
    campaign.name = name
    campaign.slug = slugify(campaign.name, '')
    db.session.commit()
    return jsonify(parse_campaign(campaign))

#Delete
@campaign.route('/<campaign_id>', methods=['DELETE'])
def delete_campaign_by_id(campaign_id):
    campaign = get_campaign(campaign_id)
    if campaign is not None:
        if campaign.image.blob is not None:
            delete_google_cloud_storage(campaign.image.blob)
        db.session.delete(campaign)
        db.session.commit()
    campaign = Campaign.query.get(campaign_id)
    if campaign is None:
        return jsonify({"deleted": campaign_id})
    else:
        message = "Campaign was not deleted"
        code = 400
        return make_response(jsonify({'error': message}), code)
