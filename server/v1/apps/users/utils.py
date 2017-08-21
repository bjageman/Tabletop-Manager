from .models import User

def authenticate(username, password):
    user = User.query.filter_by(username = username).first()
    if user and user.verify_password(password):
        return user

def identity(payload):
    return User.query.get(payload['identity'])
