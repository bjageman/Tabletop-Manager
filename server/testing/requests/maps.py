from . import CampaignTests
import json
from testing.utils import bytes_to_json

class MapTests(CampaignTests):
    event_name = "Test Map"
    author_id = 1
    size = 5

    def setUp(self):
        super().setUp()
        self.url = self.url + "/"+ str(self.campaign_id) + "/maps"
        for i in range(self.size):
            rv = self.createMap(self.url, self.event_name, self.author_id)
        result = bytes_to_json(rv.data)
        print(result)
        self.maps_id = result['id']

    def createMap(self, url, name, author_id):
        return self.app.post(url,
            data=json.dumps({
                "name": name,
                "author_id": author_id,
                }),
            content_type='application/json'
        )

    def test_get_maps(self):
        rv = self.app.get(self.url)
        result = bytes_to_json(rv.data)
        print(rv, result)
        assert len(result) == self.size
        rv = self.app.get(self.url + "/" + str(self.maps_id))
        result = bytes_to_json(rv.data)
        assert result['id'] == self.maps_id
        assert result['campaign_id'] == self.campaign_id
