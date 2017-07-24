from flask import Blueprint

campaign = Blueprint('campaign', __name__)

from . import views
from v1.apps.journal import views
from v1.apps.characters import views
from v1.apps.calendar import views
from v1.apps.maps import views
from v1.apps.wiki import views
