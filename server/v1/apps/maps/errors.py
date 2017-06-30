from . import maps
from flask import make_response, jsonify, abort

@maps.errorhandler(404)
def not_found(error):
    message = 'Not found'
    code = 404
    return make_response(jsonify({'error': message}), code)

@maps.errorhandler(401)
def unauthorized(error):
    message = 'Unauthorized access'
    code = 401
    return make_response(jsonify({'error': message}), code)

@maps.errorhandler(400)
def bad_request(error):
    return make_response(jsonify({'error': 'Bad Request'}), 400)
