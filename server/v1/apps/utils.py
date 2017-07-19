from flask import make_response, jsonify, abort

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
