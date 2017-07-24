from datetime import datetime
from slugify import slugify

from v1.apps.models import *

class Campaign(Base):
    owner_id = db.Column(db.ForeignKey('user.id'), index=True)
    owner = db.relationship('User', backref='campaigns')
    header_image = db.Column(db.String(256))
    journal_entries = db.relationship('Entry', cascade='all,delete', backref='journal_entries')
    characters = db.relationship('Character', cascade='all,delete', backref='characters')
    calendar = db.relationship('Calendar', cascade='all,delete', backref='calendar')
    wiki = db.relationship('Wiki', cascade='all,delete', backref='wiki')
    maps = db.relationship('CampaignMap', cascade='all,delete', backref='maps')
