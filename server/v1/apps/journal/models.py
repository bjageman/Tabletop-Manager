from v1.apps.models import *

class Entry(Base, TimestampMixin):
    content = db.Column(db.Text)
    author_id = db.Column(db.ForeignKey('user.id'), index=True)
    author = db.relationship('User', backref='entries')
    campaign = db.relationship('Campaign', backref='entries')
    campaign_id = db.Column(db.ForeignKey('campaign.id'), index=True)
