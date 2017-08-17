from flask_socketio import SocketIO, emit, disconnect
from flask import Flask, request, jsonify, abort
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
def create_calendar_event(campaign_id):
    data        = request.get_json()
    name        = get_required_data(data, "name")
    author_id   = get_required_data(data, "author_id")
    start_time  = convert_string_to_datetime(get_optional_data(data, "start_time"))
    end_time    = convert_string_to_datetime(get_optional_data(data, "end_time"))
    campaign    = Campaign.query.get(campaign_id)
    author      = User.query.get(author_id)
    if campaign is not None and author is not None:
        event = Calendar(name=name, author=author, campaign=campaign, start_time=start_time, end_time=end_time)
        db.session.add(event)
        db.session.commit()
        return jsonify(parse_event(event))
    else:
        abort(400)

#Read

@campaign.route(calendar_base_url, methods=['GET'])
def get_calendar(campaign_id):
    campaign = Campaign.query.get(campaign_id)
    if campaign is not None:
        return jsonify(parse_calendar(campaign.calendar))
    else:
        abort(404)

@campaign.route(calendar_base_url + '/<int:calendar_id>', methods=['GET'])
def get_calendar_by_id(campaign_id, calendar_id):
    event = Calendar.query.join(Campaign).filter(Campaign.id == campaign_id).filter(Calendar.id == calendar_id).first()
    if event is not None:
        return jsonify(parse_event(event))
    else:
        abort(404)

@campaign.route(calendar_base_url + '/<string:calendar_slug>', methods=['GET'])
def get_calendar_by_slug(campaign_id, calendar_slug):
    event = Calendar.query.join(Campaign).filter(Campaign.id == campaign_id).filter(Calendar.slug == calendar_slug).first()
    if event is not None:
        return jsonify(parse_event(event))
    else:
        abort(404)

#
# #Update
#
@campaign.route(calendar_base_url + '/<int:event_id>', methods=['POST', 'PUT'])
def update_event_by_id(campaign_id, event_id):
    event = Calendar.query.get(event_id)
    if event is not None and event.campaign.id == campaign_id:
        data        = request.get_json()
        name        = get_optional_data(data, "name")
        start_time  = convert_string_to_datetime(get_optional_data(data, "start_time"))
        end_time    = convert_string_to_datetime(get_optional_data(data, "end_time"))
        if name is not None:
            event.set_name(name)
        if start_time is not None:
            event.start_time = start_time
        if end_time is not None:
            event.end_time = end_time
        db.session.commit()
        return jsonify(parse_event(event))
    else:
        abort(404)


#
#  Delete
#

@campaign.route(calendar_base_url + '/<int:calendar_id>', methods=['DELETE'])
def delete_calendar_by_id(campaign_id, calendar_id):
    print("Deleting", calendar_id)
    calendar = Calendar.query.get(calendar_id)
    name = calendar.name
    if calendar is not None and calendar.campaign.id == campaign_id:
        db.session.delete(calendar)
        db.session.commit()
    calendar = Calendar.query.get(calendar_id)
    if calendar is None:
        return jsonify({"deleted": calendar_id})
    else:
        message = "Calendar" + name + " was not deleted"
        code = 400
        return make_response(jsonify({'error': message}), code)
