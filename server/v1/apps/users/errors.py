from . import users
from flask import make_response, jsonify, abort

@users.errorhandler(404)
def not_found(error):
    message = 'User Not Found'
    code = 404
    return make_response(jsonify({'error': message}), code)

@users.errorhandler(401)
def unauthorized(error):
    message = 'Unauthorized Access'
    code = 401
    return make_response(jsonify({'error': message}), code)

@users.errorhandler(400)
def bad_request(error):
    return make_response(jsonify({'error': 'Unknown Error'}), 400)
