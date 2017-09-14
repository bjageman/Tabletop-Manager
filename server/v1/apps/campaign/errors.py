from . import campaign
from flask import make_response, jsonify, abort

@campaign.errorhandler(405)
def not_found(error):
    message = 'Not Allowed'
    code = 405
    return make_response(jsonify({'error': message}), code)

@campaign.errorhandler(404)
def not_found(error):
    message = 'Not found'
    code = 404
    return make_response(jsonify({'error': message}), code)

@campaign.errorhandler(401)
def unauthorized(error):
    message = 'Unauthorized access'
    code = 401
    return make_response(jsonify({'error': message}), code)

@campaign.errorhandler(400)
def bad_request(error):
    return make_response(jsonify({'error': 'Unknown Error'}), 400)
