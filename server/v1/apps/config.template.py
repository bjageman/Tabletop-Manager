import os

DB_USER = "username"
DB_PASS = "password"
DB_HOST = "localhost"
DB_DATABASE = "example_database"
DB_TEST = "example_database_test"
DB_TYPE = "mysql"

DATETIMEFORMAT = "%m/%d/%Y %I:%M %p" #08/21/2017 12:00 AM

#File Uploads
UPLOAD_FOLDER = '/path/to/the/uploads'
ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])
#Google Cloud storage
GCS_BUCKET = ''

# email server
MAIL_SERVER = 'smtp.googlemail.com'
MAIL_PORT = 465
MAIL_USE_TLS = False
MAIL_USE_SSL = True
MAIL_USERNAME = os.environ.get('MAIL_USERNAME')
MAIL_PASSWORD = os.environ.get('MAIL_PASSWORD')

# administrator list
ADMINS = ['your-gmail-username@gmail.com']

### DO NOT EDIT
DATABASE = DB_TYPE + '://' + DB_USER + ':' + DB_PASS + '@' + DB_HOST + '/' + DB_DATABASE
DATABASE_TEST = DB_TYPE + '://' + DB_USER + ':' + DB_PASS + '@' + DB_HOST + '/' + DB_TEST
