from . import forum
from flask import make_response, jsonify, abort

@forum.errorhandler(404)
def not_found(error):
    message = 'Not found'
    code = 404
    return make_response(jsonify({'error': message}), code)

@forum.errorhandler(401)
def unauthorized(error):
    message = 'Unauthorized access'
    code = 401
    return make_response(jsonify({'error': message}), code)

@forum.errorhandler(400)
def bad_request(error):
    return make_response(jsonify({'error': 'Bad Request'}), 400)
