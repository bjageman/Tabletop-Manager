from datetime import datetime
from slugify import slugify

from v1.apps.models import *

campaign_players_table = db.Table('association', Base.metadata,
    db.Column('campaign', db.Integer, db.ForeignKey('campaign.id')),
    db.Column('user', db.Integer, db.ForeignKey('user.id'))
)

class Campaign(Base, TimestampMixin):
    owner_id = db.Column(db.ForeignKey('user.id'), index=True)
    owner = db.relationship('User', backref='campaigns')
    image_id = db.Column(db.Integer, db.ForeignKey('image.id'))
    image = db.relationship("Image")
    journal_entries = db.relationship('Entry', cascade='all,delete', backref='journal_entries')
    characters = db.relationship('Character', cascade='all,delete', backref='characters')
    calendar = db.relationship('Calendar', cascade='all,delete', backref='calendar')
    wiki = db.relationship('Wiki', cascade='all,delete', backref='wiki')
    maps = db.relationship('CampaignMap', cascade='all,delete', backref='maps')
    players = db.relationship('User', secondary=campaign_players_table)
