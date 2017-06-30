from datetime import datetime

from sqlalchemy import event
from sqlalchemy.ext.orderinglist import ordering_list

from v1.apps.models import *

class Board(Base):
    name = db.Column(db.String(80))
    slug = db.Column(db.String(80), unique=True)
    description = db.Column(db.Text)
    threads = db.relationship('Thread', cascade='all,delete', backref='board')

    def __unicode__(self):
        return self.name


class Thread(Base, TimestampMixin):
    name = db.Column(db.String(80))
    author_id = db.Column(db.ForeignKey('user.id'), index=True)
    author = db.relationship('User', backref='threads')
    board_id = db.Column(db.ForeignKey('board.id'), index=True)
    posts = db.relationship('Post', backref='thread',
                            cascade='all,delete',
                            order_by='Post.index',
                            collection_class=ordering_list('index'))
    length = db.Column(db.Integer, default=0)

    def __unicode__(self):
        return self.name


class Post(Base, TimestampMixin):
    index = db.Column(db.Integer, default=0, index=True)
    content = db.Column(db.Text)
    author_id = db.Column(db.ForeignKey('user.id'), index=True)
    author = db.relationship('User', backref='posts')
    thread_id = db.Column(db.ForeignKey('thread.id'), index=True)

    def __repr__(self):
        return '<Post(%s)>' % self.id

def thread_posts_append(thread, post, initiator):
    """Update some thread values when `Thread.posts.append` is called."""
    thread.length += 1
    thread.updated = datetime.utcnow()

event.listen(Thread.posts, 'append', thread_posts_append)
