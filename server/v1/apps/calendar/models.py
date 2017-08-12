from datetime import datetime

from v1.apps.models import *

class Calendar(Base, TimestampMixin):
    author_id = db.Column(db.ForeignKey('user.id'), index=True)
    author = db.relationship('User', backref='author_calendar')
    campaign = db.relationship('Campaign', backref='campaign_calendar')
    campaign_id = db.Column(db.ForeignKey('campaign.id'), index=True)
    start_time = db.Column(db.DateTime, default=datetime.utcnow)
    end_time = db.Column(db.DateTime, default=datetime.utcnow)
