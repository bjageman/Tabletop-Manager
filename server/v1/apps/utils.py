from flask import make_response, jsonify, abort
from datetime import datetime

from v1.apps.config import DATETIMEFORMAT

def check_for_invalid_data(data, value):
    try:
        result = data[value]
        abort(400)
    except (AttributeError, KeyError, TypeError):
        return True

def get_optional_data(data, value):
    try:
        return data[value]
    except (AttributeError, KeyError, TypeError):
        return None

def get_required_data(data, value):
    try:
        return data[value]
    except (AttributeError, KeyError, TypeError):
        print("failed to get", value)
        abort(400)

def convert_string_to_datetime(date_string):
    if date_string is not None:
        return datetime.strptime(date_string, DATETIMEFORMAT)
    else:
        return None
