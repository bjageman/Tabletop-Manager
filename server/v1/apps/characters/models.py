from datetime import datetime
from slugify import slugify

from v1.apps.models import *

class Character(Base, TimestampMixin):
    name = db.Column(db.String(80))
    slug = db.Column(db.String(80), unique=True)
    author_id = db.Column(db.ForeignKey('user.id'), index=True)
    author = db.relationship('User', backref='user_characters')
    campaign = db.relationship('Campaign', backref='campaign_characters')
    campaign_id = db.Column(db.ForeignKey('campaign.id'), index=True)

    def __unicode__(self):
        return self.name

    def __init__(self, *args, **kwargs):
        if not 'slug' in kwargs:
            slug = slugify(kwargs.get('name', ''))
            counter = 2
            while Character.query.filter_by(slug=slug).first() is not None:
                slug = slugify(kwargs.get('name', '') + "-" + str(counter))
                counter = counter + 1
            kwargs['slug'] = slug
        super().__init__(*args, **kwargs)
