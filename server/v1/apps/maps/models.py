from datetime import datetime
from slugify import slugify

from v1.apps.models import *

class CampaignMap(Base, TimestampMixin):
    author_id = db.Column(db.ForeignKey('user.id'), index=True)
    author = db.relationship('User', backref='created_maps')
    campaign = db.relationship('Campaign', backref='campaign_maps')
    campaign_id = db.Column(db.ForeignKey('campaign.id'), index=True)
