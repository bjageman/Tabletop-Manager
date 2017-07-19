from datetime import datetime

from sqlalchemy.ext.declarative import declared_attr

from v1.apps import db

class TimestampMixin(object):
    created = db.Column(db.DateTime, default=datetime.utcnow)
    updated = db.Column(db.DateTime, default=datetime.utcnow)

    def readable_date(self, date, format='%H:%M on %-d %B'):
        """Format the given date using the given format."""
        return date.strftime(format)

class Base(db.Model):
    __abstract__ = True
    id = db.Column(db.Integer, primary_key=True)

    @declared_attr
    def __tablename__(cls):
        return cls.__name__.lower()
