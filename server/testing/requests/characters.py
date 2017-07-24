from . import CampaignTests
import json
from testing.utils import bytes_to_json

class CharacterTests(CampaignTests):
    character_name = "Test Broski"
    author_id = 1
    size = 5

    def setUp(self):
        super().setUp()
        self.url = self.url + "/"+ str(self.campaign_id) + "/characters"
        for i in range(self.size):
            rv = self.createCharacter(self.url, self.character_name, self.author_id)
        result = bytes_to_json(rv.data)
        self.character_id = result['id']

    def createCharacter(self, url, name, author_id):
        return self.app.post(url,
            data=json.dumps({
                "name": name,
                "author_id": author_id,
                }),
            content_type='application/json'
        )

    def test_get_characters(self):
        rv = self.app.get(self.url)
        result = bytes_to_json(rv.data)
        assert len(result) == self.size
        rv = self.app.get(self.url + "/" + str(self.character_id))
        result = bytes_to_json(rv.data)
        assert result['id'] == self.character_id
        assert result['campaign_id'] == self.campaign_id
