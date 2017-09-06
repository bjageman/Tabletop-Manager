from flask_socketio import SocketIO, emit, disconnect
from flask import Flask, request, jsonify, abort

import string

from . import users

from .models import User
from .utils import  authenticate

from v1.apps import socketio, db, mail
from .parsers import *
from v1.apps.campaign.parsers import parse_campaigns

#Error handling
from v1.apps.errors import *
from .errors import *
#Auth
from v1.apps.auth import verify_auth
from v1.apps.utils import get_required_data, get_optional_data

#Mail
from flask_mail import Message
from v1.apps import app, mail

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


@users.route('', methods=['GET'])
def get_user():
    user = verify_auth(request)
    return jsonify(parse_user_detailed(user))

def register_user(data):
    username = get_required_data(data, "username")
    password = get_required_data(data, "password")
    if User.query.filter_by(username = username).first() is not None:
        abort(400)
    user = User(username = username)
    user.hash_password(password)
    db.session.add(user)
    db.session.commit()
    return jsonify(parse_user(user))

def update_user(user, data):
    # username = get_optional_data(data, "username")
    password = get_optional_data(data, "password")
    email = get_optional_data(data, "email")
    first_name = get_optional_data(data, "first_name")
    last_name = get_optional_data(data, "last_name")
    image = get_optional_data(data, "image")
    if password is not None:
        user.hash_password(password)
    if email is not None:
        user.email = email
    if first_name is not None:
        user.first_name = first_name
    if last_name is not None:
        user.last_name = last_name
    if image is not None:
        user.image = image
    db.session.add(user)
    db.session.commit()
    return jsonify(parse_user(user))

@users.route('', methods=['POST'])
def register_or_update_user():
    user = verify_auth(request)
    data = request.get_json()
    if user is not None:
        return update_user(user, data)
    else:
        return register_user(data)

def send_mail(sender, recipients, subject, body, html):
    msg = Message(subject, sender=sender, recipients=recipients)
    msg.body = 'text body'
    # msg.html = '<b>HTML</b> body'
    print("sending mail")
    mail.send(msg)
    return True

@users.route('/forgot', methods=['POST'])
def forgot_password():
    data = request.get_json()
    username = get_required_data(data, "username")
    user = User.query.filter_by(username=username).first()
    email = user.email
    if user is not None and email is not None:
        send_mail("neurobomber@gmail.com", ["kuluyiwici@ethereum1.top"], "Test Subject", "Test Body", "<b>Test</b> Body")
        message = "Password reset link sent to " + email
        return jsonify({"message": message })
    else:
        return jsonify({"message": "User Not Found"})
