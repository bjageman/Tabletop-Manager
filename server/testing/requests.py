from testing import TestingBase
import json
from testing.utils import bytes_to_json

class RequestTests(TestingBase):

    def setUp(self):
        super().setUp()
        self.base_url = "/api/v1/"

class CampaignTests(RequestTests):
    campaign_id = 1
    campaign_name = "Test Campaign"
    campaign_slug = "test-campaign" #Must match above
    owner_id = 1

    def setUp(self):
        super().setUp()
        self.url = self.base_url + "campaign"
        rv = self.app.post(self.url,
            data=json.dumps({
                "name": self.campaign_name,
                "owner_id": self.owner_id,
                }),
            content_type='application/json'
        )
        result = bytes_to_json(rv.data)
