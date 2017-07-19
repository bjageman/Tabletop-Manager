from . import JournalTests

from collections import Counter
import json

from testing.utils import bytes_to_json

import random

class JournalEntryTests(JournalTests):
    campaign_id = 1
    start_entries = 5

    def createEntry(self, url, title, content, author_id):
        return self.app.post(url,
            data=json.dumps({
                "title": title,
                "content": content,
                "author_id": author_id,
                }),
            content_type='application/json'
        )

    def setUp(self):
        super().setUp()
        self.url = self.url + "/"+ str(self.campaign_id) + "/entry"
        for i in range(self.start_entries):
            self.createEntry(self.url, self.entry_title, self.entry_content, self.author_id)

    def test_create_multiple_entry(self):
        size = 10
        for i in range(size):
            rv = self.createEntry(self.url, self.entry_title, self.entry_content, self.author_id)
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
