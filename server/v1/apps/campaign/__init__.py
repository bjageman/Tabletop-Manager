from flask import Blueprint

campaign = Blueprint('campaign', __name__)

from . import views
from v1.apps.journal import views
