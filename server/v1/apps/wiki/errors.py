from . import wiki
from flask import make_response, jsonify, abort

@wiki.errorhandler(404)
def not_found(error):
    message = 'Not found'
    code = 404
    return make_response(jsonify({'error': message}), code)

@wiki.errorhandler(401)
def unauthorized(error):
    message = 'Unauthorized access'
    code = 401
    return make_response(jsonify({'error': message}), code)

@wiki.errorhandler(400)
def bad_request(error):
    return make_response(jsonify({'error': 'Bad Request'}), 400)
