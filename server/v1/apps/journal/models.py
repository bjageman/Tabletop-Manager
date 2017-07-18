from datetime import datetime

from sqlalchemy import event
from sqlalchemy.ext.orderinglist import ordering_list

from v1.apps.models import *

class Journal(Base):
    title = db.Column(db.String(80))
    slug = db.Column(db.String(80), unique=True)
    description = db.Column(db.Text)
    entries = db.relationship('Entry', cascade='all,delete', backref='journal')

    def __unicode__(self):
        return self.name


class Entry(Base, TimestampMixin):
    title = db.Column(db.String(80))
    content = db.Column(db.String(2048))
    author_id = db.Column(db.ForeignKey('user.id'), index=True)
    author = db.relationship('User', backref='entrys')
    journal_id = db.Column(db.ForeignKey('journal.id'), index=True)
    comments = db.relationship('Comment', backref='entry',
                            cascade='all,delete',
                            order_by='Comment.index',
                            collection_class=ordering_list('index'))
    length = db.Column(db.Integer, default=0)

    def __unicode__(self):
        return self.name


class Comment(Base, TimestampMixin):
    index = db.Column(db.Integer, default=0, index=True)
    content = db.Column(db.Text)
    author_id = db.Column(db.ForeignKey('user.id'), index=True)
    author = db.relationship('User', backref='comments')
    entry_id = db.Column(db.ForeignKey('entry.id'), index=True)

    def __repr__(self):
        return '<Comment(%s)>' % self.id

def entry_comments_append(entry, comment, initiator):
    """Update some entry values when `Entry.comments.append` is called."""
    entry.length += 1
    entry.updated = datetime.utcnow()

event.listen(Entry.comments, 'append', entry_comments_append)
