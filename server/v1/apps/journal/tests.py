from collections import Counter
import json

from testing.requests import CampaignTests
from testing.utils import bytes_to_json

import random

class JournalTests(CampaignTests):
    start_entries = 5
    entry_name = "Test Entry"
    entry_slug = "test-entry"
    entry_content = "This is the beginning of a campaign entry. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    owner_id = 1
    author_id = 2
    commenter_id = 3

    def setUp(self):
        super().setUp()
        self.url = self.url + "/"+ str(self.campaign_id) + "/entry"
        for i in range(self.start_entries):
            self.createEntry(self.url, self.entry_name, self.entry_content, self.author_id)


    def createEntry(self, url, name, content, author_id):
        return self.app.post(url,
            data=json.dumps({
                "name": name,
                "content": content,
                "author_id": author_id,
                }),
            content_type='application/json'
        )

    def test_create_multiple_entry(self):
        size = 10
        for i in range(size):
            rv = self.createEntry(self.url, self.entry_name, self.entry_content, self.author_id)
        result = bytes_to_json(rv.data)
        assert self.entry_content in result['content']
        rv = self.app.get("/api/v1/campaign/1")
        result = bytes_to_json(rv.data)
        assert len(result['entries']) == size + self.start_entries

    def test_get_entries(self):
        entry_id = 1
        entry_slug = self.entry_slug
        rv = self.app.get(self.url)
        result = bytes_to_json(rv.data)
        assert len(result) == self.start_entries
        rv = self.app.get(self.url + "/" + str(entry_id))
        result = bytes_to_json(rv.data)
        assert result['id'] == entry_id
        rv = self.app.get(self.url + "/" + entry_slug)
        result = bytes_to_json(rv.data)
        assert result['slug'] == entry_slug
