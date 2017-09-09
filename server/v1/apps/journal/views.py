from flask import request, jsonify, abort
from slugify import slugify

from v1.apps.campaign import campaign
#DB
from v1.apps import db
#Models
from .models import Entry
from v1.apps.campaign.models import Campaign
from v1.apps.campaign.auth import request_campaign_auth
from v1.apps.users.models import User
#Parsers
from v1.apps.users.parsers import *
from .parsers import *

#Error handling
from v1.apps.errors import *
from v1.apps.campaign.errors import *

#Utils
from v1.apps.utils import check_for_invalid_data, get_optional_data, get_required_data, search_by_name

entry_base_url = '/<campaign_id>/journal'
#Create
@campaign.route(entry_base_url, methods=['POST'])
def create_entry(campaign_id):
    user, campaign = request_campaign_auth(request, campaign_id)
    data        = request.get_json()
    name        = get_required_data(data, "name")
    content     = get_required_data(data, "content")
    entry = Entry(name=name, author=user, content=content, campaign=campaign)
    db.session.add(entry)
    db.session.commit()
    return jsonify(parse_entries(campaign.entries))

#Read

@campaign.route(entry_base_url, methods=['GET'])
def get_entries(campaign_id):
    campaign = Campaign.query.get(campaign_id)
    if campaign is not None:
        entries = Entry.query.filter_by(campaign=campaign)
        data = request.args
        name = get_optional_data(data, "name")
        entries = search_by_name(entries, Entry, name)
        return jsonify(parse_entries(entries))
    else:
        abort(404)

@campaign.route(entry_base_url + '/<entry_id>', methods=['GET'])
def get_entry(campaign_id, entry_id):
    try:
        entry_id = int(entry_id)
        entry = Entry.query.filter(Entry.id == entry_id).first()
    except ValueError:
        entry = Entry.query.filter(Entry.slug == entry_id).first()
    if entry is not None:
        return jsonify(parse_entry(entry))
    else:
        abort(404)

#
# #Update
#
@campaign.route(entry_base_url + '/<entry_id>', methods=['POST', 'PUT'])
def update_journal(campaign_id, entry_id):
    user, campaign = request_campaign_auth(request, campaign_id)
    entry = Entry.query.get(entry_id)
    if entry is not None:
        data        = request.get_json()
        name        = get_optional_data(data, "name")
        content     = get_optional_data(data, "content")
        if name is not None:
            entry.name = name
        if content is not None:
            entry.content = content
        db.session.commit()
        return jsonify(parse_entries(campaign.entries))
    else:
        abort(404)


#
#  Delete
#

@campaign.route(entry_base_url + '/<entry_id>', methods=['DELETE'])
def delete_journal(campaign_id, entry_id):
    user, campaign = request_campaign_auth(request, campaign_id)
    entry = Entry.query.get(entry_id)
    name = entry.name
    if entry is not None:
        db.session.delete(entry)
        db.session.commit()
    entry = Entry.query.get(entry_id)
    if entry is None:
        return jsonify(parse_entries(campaign.entries))
    else:
        message = "Entry" + name + " was not deleted"
        code = 400
        return make_response(jsonify({'error': message}), code)
