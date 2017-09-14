from flask import Flask
from flask_mail import Mail
from flask_jwt import JWT
from flask_sqlalchemy import SQLAlchemy
from flask_socketio import SocketIO
from datetime import timedelta
from flask import Blueprint

from . import config

app = Flask(__name__)
app.debug = True
app.config['SECRET_KEY'] = 'AO0bqSHRFMyMUgzaw0Vx2FkLkkAr3Gpe'
app.config['SQLALCHEMY_COMMIT_ON_TEARDOWN'] = True
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['UPLOAD_FOLDER'] = config.UPLOAD_FOLDER
app.config['SQLALCHEMY_DATABASE_URI'] = config.DATABASE
app.config['JWT_EXPIRATION_DELTA'] = timedelta(hours=24)

#Mail Setup
app.config['MAIL_SERVER'] = MAIL_SERVER #config.MAIL_SERVER
app.config['MAIL_PORT'] = MAIL_PORT
app.config['MAIL_USE_TLS'] = MAIL_USE_TLS
app.config['MAIL_USE_SSL'] = MAIL_USE_SSL
app.config['MAIL_USERNAME'] = MAIL_USERNAME #config.MAIL_USERNAME
app.config['MAIL_PASSWORD'] = MAIL_PASSWORD #config.MAIL_PASSWORD

mail = Mail(app)
db = SQLAlchemy(app)
db.init_app(app)
#Web Socket
async_mode = None
socketio = SocketIO(app, async_mode=async_mode)

from .users import users
from .campaign import campaign

from v1.apps.users.utils import authenticate, identity

jwt = JWT(app, authenticate, identity)

app.register_blueprint(users, url_prefix='/api/v1/users')
app.register_blueprint(campaign, url_prefix='/api/v1/campaign')

@app.after_request
def add_headers(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    return response
