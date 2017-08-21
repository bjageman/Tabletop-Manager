from flask_socketio import SocketIO, emit, disconnect
from flask import Flask, request, jsonify, abort

import string

from . import users

from .models import User
from .utils import  authenticate

from v1.apps import socketio, db
from .parsers import *

#Error handling
from v1.apps.errors import *
from .errors import *

def get_users_player(user, game):
    for player in game.players:
        if player.user.id == user.id:
            return player

@socketio.on('login')
def login_websockets(data):
    try:
        username = data['username']
        password = data['password']
    except (AttributeError, KeyError):
        emit_error("Bad Request")
    user = authenticate(username, password)
    if user is not None:
        emit('user_login_success',{
            "user": parse_user(user),
        })
    else:
        emit_error("Incorrect Username/Password")

@users.route('/login', methods=['POST'])
def login_user():
    try:
        data = request.get_json()
        username = data['username']
        password = data['password']
    except (AttributeError, KeyError):
        abort(400)
    user = authenticate(username, password)
    if user is None:
        abort(404)
    return jsonify(parse_user_detailed(user))


@users.route('', methods=['POST'])
def register_user():
    try:
        data = request.get_json()
        username = data['username']
        password = data['password']
    except (AttributeError, KeyError):
        abort(400)
    if User.query.filter_by(username = username).first() is not None:
        abort(400)
    user = User(username = username)
    user.hash_password(password)
    db.session.add(user)
    db.session.commit()
    return jsonify(parse_user(user))
