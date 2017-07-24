from . import RequestTests
import json
from testing.utils import bytes_to_json

class UserTests(RequestTests):
    username = "NewTestUser"
    password = "S3cur3P4ssw0rd"
    wrong_password = "NotThePassword"
    bad_password = "1"

    def setUp(self):
        super().setUp()
        self.url = self.base_url + "users"
        rv = self.app.post(self.url,
            data=json.dumps({
                "username": self.username,
                "password": self.password,
                }),
            content_type='application/json'
        )
        result = bytes_to_json(rv.data)
        assert result['id'] is not None
        self.user_id = result['id']
        assert self.username in result['username']

class LoginTests(UserTests):

    def test_login_user(self):
        rv = self.app.post(self.url + "/login",
            data=json.dumps({
                "username": self.username,
                "password": self.password,
                }),
            content_type='application/json'
        )
        result = bytes_to_json(rv.data)
        assert result['id'] is not None
        assert result['id'] == self.user_id
        assert self.username in result['username']
