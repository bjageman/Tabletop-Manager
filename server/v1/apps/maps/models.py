from v1.apps.models import *

class CampaignMap(Base, TimestampMixin):
    author_id = db.Column(db.ForeignKey('user.id'), index=True)
    author = db.relationship('User', backref='created_maps')
    campaign = db.relationship('Campaign', backref='campaign_maps')
    campaign_id = db.Column(db.ForeignKey('campaign.id'), index=True)
    markers = db.relationship('MapMarker', cascade='all,delete', backref='markers')
    image = db.Column(db.String(256))

class MapMarker(Base, TimestampMixin):
    campaign_map = db.relationship('CampaignMap', backref='map')
    campaign_map_id = db.Column(db.ForeignKey('campaign_map.id'), index=True)
    x_coord = db.Column(db.Integer())
    y_coord = db.Column(db.Integer())
