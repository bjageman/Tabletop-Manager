from flask_socketio import SocketIO, emit, disconnect
from flask import Flask, request, jsonify, abort
from slugify import slugify

import string, datetime

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

calendar_base_url = '/<campaign_id>/calendar'
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

@campaign.route(calendar_base_url + '/<string:filter_type>', methods=['GET'])
def get_calendar(campaign_id, filter_type):
    calendar = Calendar.query.join(Campaign).filter(Campaign.id == campaign_id)
    if filter_type == "upcoming":
        calendar = calendar.filter(Calendar.start_time > datetime.utcnow())
    if filter_type == "previous":
        calendar = calendar.filter(Calendar.start_time < datetime.utcnow())
    if campaign is not None:
        return jsonify(parse_calendar(calendar))
    else:
        abort(404)

def get_event(event_id):
    try:
        event_id = int(event_id)
        return Calendar.query.filter(Calendar.id == event_id).first()
    except ValueError:
        return Calendar.query.filter(Calendar.slug == event_id).first()

@campaign.route(calendar_base_url + '/event/<event_id>', methods=['GET'])
def get_calendar_event(campaign_id, event_id):
    event = get_event(event_id)
    if event is not None:
        return jsonify(parse_event(event))
    else:
        abort(404)
#
# #Update
#
@campaign.route(calendar_base_url + '/<int:event_id>', methods=['POST', 'PUT'])
def update_event_by_id(campaign_id, event_id):
    event = get_event(event_id)
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

@campaign.route(calendar_base_url + '/<event_id>', methods=['DELETE'])
def delete_event(campaign_id, event_id):
    event = get_event(event_id)
    name = event.name
    if event is not None and event.campaign.id == campaign_id:
        db.session.delete(event)
        db.session.commit()
    event = get_event(event_id)
    if event is None:
        return jsonify({"deleted": event_id})
    else:
        message = "Event " + name + " was not deleted"
        code = 400
        return make_response(jsonify({'error': message}), code)
