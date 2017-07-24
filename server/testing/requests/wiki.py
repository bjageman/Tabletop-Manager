from . import CampaignTests
import json
from testing.utils import bytes_to_json

class WikiTests(CampaignTests):
    event_name = "Test Wiki"
    author_id = 1
    size = 5

    def setUp(self):
        super().setUp()
        self.url = self.url + "/"+ str(self.campaign_id) + "/wiki"
        for i in range(self.size):
            rv = self.createWiki(self.url, self.event_name, self.author_id)
        result = bytes_to_json(rv.data)
        print(result)
        self.wiki_id = result['id']

    def createWiki(self, url, name, author_id):
        return self.app.post(url,
            data=json.dumps({
                "name": name,
                "author_id": author_id,
                }),
            content_type='application/json'
        )

    def test_get_wiki(self):
        rv = self.app.get(self.url)
        result = bytes_to_json(rv.data)
        print(rv, result)
        assert len(result) == self.size
        rv = self.app.get(self.url + "/" + str(self.wiki_id))
        result = bytes_to_json(rv.data)
        assert result['id'] == self.wiki_id
        assert result['campaign_id'] == self.campaign_id
