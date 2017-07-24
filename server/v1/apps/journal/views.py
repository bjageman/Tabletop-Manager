***REMOVED***, emit, disconnect
***REMOVED***, request, jsonify, abort
from slugify import slugify

import string

from v1.apps.campaign import campaign

#Models
from .models import Entry
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

entry_base_url = '/<int:campaign_id>/entry'
#Create
@campaign.route(entry_base_url, methods=['POST'])
def create_entry(campaign_id):
    data        = request.get_json()
    name       = get_required_data(data, "name")
    author_id   = get_required_data(data, "author_id")
    content     = get_required_data(data, "content")
    campaign    = Campaign.query.get(campaign_id)
    author      = User.query.get(author_id)
    if campaign is not None and author is not None:
        entry = Entry(name=name, author=author, content=content, campaign=campaign)
        db.session.add(entry)
        db.session.commit()
        return jsonify(parse_entry(entry))
    else:
        abort(400)

#Read

@campaign.route(entry_base_url, methods=['GET'])
def get_entries(campaign_id):
    campaign = Campaign.query.get(campaign_id)
    if campaign is not None:
        return jsonify(parse_entries(campaign.entries))
    else:
        abort(404)

@campaign.route(entry_base_url + '/<int:entry_id>', methods=['GET'])
def get_entry_by_id(campaign_id, entry_id):
    entry = Entry.query.join(Campaign).filter(Campaign.id == campaign_id).filter(Entry.id == entry_id).first()
    if entry is not None:
        return jsonify(parse_entry(entry))
    else:
        abort(404)

@campaign.route(entry_base_url + '/<string:entry_slug>', methods=['GET'])
def get_entry_by_slug(campaign_id, entry_slug):
    entry = Entry.query.join(Campaign).filter(Campaign.id == campaign_id).filter(Entry.slug == entry_slug).first()
    if entry is not None:
        return jsonify(parse_entry(entry))
    else:
        abort(404)

#
# #Update
#
# @campaign.route('/<int:campaign_id>', methods=['POST'])
# def update_journal_by_id(campaign_id):
#     data = request.get_json()
#     name       =   get_required_data(data, "name")
#     description =   get_optional_data(data, "description")
#     journal = Journal.query.filter_by(id=campaign_id)
#     journal.update({"name":name, "description":description})
#     journal = journal.first()
#     journal.slug = slugify(journal.name, '')
#     db.session.commit()
#     return jsonify(parse_journal(journal))
#
# #Delete
# @campaign.route('/<int:campaign_id>', methods=['DELETE'])
# def delete_journal_by_id(campaign_id):
#     journal = Journal.query.get(campaign_id)
#     db.session.delete(journal)
#     db.session.commit()
#     journal = Journal.query.get(campaign_id)
#     if journal is None:
#         return jsonify({"deleted": campaign_id})
#     else:
#         message = "Journal was not deleted"
#         code = 400
#         return make_response(jsonify({'error': message}), code)
