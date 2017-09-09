from flask import make_response, jsonify, abort
from flask_jwt import jwt
from v1.apps import app
from v1.apps.users.models import User

def decode_auth_token(auth_token):
    try:
        payload = jwt.decode(auth_token, app.config.get('SECRET_KEY'))
        return payload['identity']
    except jwt.ExpiredSignatureError:
        error_message = 'Signature expired. Please log in again.'
    except jwt.InvalidTokenError:
        error_message = 'Invalid token. Please log in again.'
    except:
        error_message = 'Unknown JWT Authorization Error'
    make_response(jsonify({'error': error_message}), 401)
    return error_message

def verify_auth(request):
    auth_header = request.headers.get('Authorization')
    if auth_header:
        auth_token = auth_header.split(" ")[1]
    else:
        auth_token = ''
    if auth_token:
        user_id = decode_auth_token(auth_token)
        user = User.query.get(user_id)
        if user is None:
            abort(404)
        return user
    return None
