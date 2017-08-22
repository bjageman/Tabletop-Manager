from flask import make_response, jsonify, abort
from flask_jwt import jwt
from v1.apps import app
from v1.apps.users.models import User

def decode_auth_token(auth_token):
    try:
        payload = jwt.decode(auth_token, app.config.get('SECRET_KEY'))
        return payload['identity']
    except jwt.ExpiredSignatureError:
        return make_response(jsonify({'error': 'Signature expired. Please log in again.'}), 401)
    except jwt.InvalidTokenError:
        return make_response(jsonify({'error': 'Invalid token. Please log in again.'}), 401)
    except KeyError:
        return make_response(jsonify({'error': 'Unknown JWT Authorization Error'}), 401)

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

#Will be fleshed out more to include non-owner users
def verify_campaign_access(user, campaign):
    return user == campaign.owner
