***REMOVED***, emit, disconnect
***REMOVED***, request, jsonify, abort
from slugify import slugify

import string

from v1.apps.campaign import campaign

#Models
from .models import Calendar
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

calendar_base_url = '/<int:campaign_id>/calendar'
#Create
@campaign.route(calendar_base_url, methods=['POST'])
def create_calendar(campaign_id):
    data        = request.get_json()
    name       = get_required_data(data, "name")
    author_id   = get_required_data(data, "author_id")
    campaign    = Campaign.query.get(campaign_id)
    author      = User.query.get(author_id)
    if campaign is not None and author is not None:
        calendar = Calendar(name=name, author=author, campaign=campaign)
        db.session.add(calendar)
        db.session.commit()
        return jsonify(parse_calendar(calendar))
    else:
        abort(400)

#Read

@campaign.route(calendar_base_url, methods=['GET'])
def get_calendar(campaign_id):
    campaign = Campaign.query.get(campaign_id)
    if campaign is not None:
        return jsonify(parse_calendars(campaign.calendar))
    else:
        abort(404)

@campaign.route(calendar_base_url + '/<int:calendar_id>', methods=['GET'])
def get_calendar_by_id(campaign_id, calendar_id):
    calendar = Calendar.query.join(Campaign).filter(Campaign.id == campaign_id).filter(Calendar.id == calendar_id).first()
    if calendar is not None:
        return jsonify(parse_calendar(calendar))
    else:
        abort(404)

@campaign.route(calendar_base_url + '/<string:calendar_slug>', methods=['GET'])
def get_calendar_by_slug(campaign_id, calendar_slug):
    calendar = Calendar.query.join(Campaign).filter(Campaign.id == campaign_id).filter(Calendar.slug == calendar_slug).first()
    if calendar is not None:
        return jsonify(parse_calendar(calendar))
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
