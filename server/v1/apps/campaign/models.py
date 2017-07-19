from datetime import datetime
from slugify import slugify

from v1.apps.models import *

class Campaign(Base):
    title = db.Column(db.String(80))
    slug = db.Column(db.String(80))
    owner_id = db.Column(db.ForeignKey('user.id'), index=True)
    owner = db.relationship('User', backref='campaigns')
    description = db.Column(db.Text)
    journal_entries = db.relationship('Entry', cascade='all,delete', backref='journal_entries')

    def __unicode__(self):
        return self.title

    def __init__(self, *args, **kwargs):
        if not 'slug' in kwargs:
            kwargs['slug'] = slugify(kwargs.get('title', ''))
        super().__init__(*args, **kwargs)
