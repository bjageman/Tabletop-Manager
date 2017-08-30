import os
from flask_script import Manager, Server

from v1.apps import app, socketio, db

if __name__ == '__main__':
    db.create_all()
    port = int(os.environ.get('PORT', 5000))
    socketio.run(app, debug=True, port=port, host='0.0.0.0')
