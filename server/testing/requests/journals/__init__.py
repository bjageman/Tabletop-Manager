from .. import RequestTests

from collections import Counter
import json

from testing.utils import bytes_to_json

from v1.apps.users.models import User
from v1.apps.campaign.models import *

from v1.apps import app, db
import random

class JournalTests(RequestTests):
    campaign_id = 1
    campaign_title = "Test Campaign"
    campaign_slug = "test-campaign" #Must match above
    entry_title = "Test Entry"
    entry_slug = "test-entry"
    entry_content = "This is the beginning of a campaign entry. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    owner_id = 1
    author_id = 2
    commenter_id = 3

    def setUp(self):
        super().setUp()
        self.url = self.base_url + "campaign"
        rv = self.app.post(self.url,
            data=json.dumps({
                "title": self.campaign_title,
                "owner_id": self.owner_id,
                }),
            content_type='application/json'
        )
        result = bytes_to_json(rv.data)
