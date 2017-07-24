from testing.requests import CampaignTests

import json

from testing.utils import bytes_to_json

import random

class BasicCampaignTests(CampaignTests):

    def test_get_campaign(self):
        rv = self.app.get(self.url + "/" + str(self.campaign_id) )
        result = bytes_to_json(rv.data)
        assert result['id'] == 1
        assert self.campaign_name in result['name']
        assert self.campaign_slug in result['slug']
        assert result['owner']['id'] == self.owner_id
        rv = self.app.get(self.url + "/" + self.campaign_slug )
        result = bytes_to_json(rv.data)
        assert result['id'] == 1
        assert self.campaign_name in result['name']
        assert self.campaign_slug in result['slug']
        assert result['owner']['id'] == self.owner_id

    def test_update_campaign(self):
        new_name = "NEW CAMPAIGN"
        new_slug = "new-campaign"
        rv = self.app.post(self.url + "/" + str(self.campaign_id),
            data=json.dumps({
                "name": new_name,
                }),
            content_type='application/json'
        )
        result = bytes_to_json(rv.data)
        assert result['id'] == 1
        assert new_name in result['name']
        assert new_slug in result['slug']

    ## Update once auth is added
    def test_invalid_data(self):
        rv = self.app.post(self.url + "/" + str(self.campaign_id),
            data=json.dumps({
                "id": 2,
                "name": "I IS HAXORZ",
                "owner_id": 2,
                }),
            content_type='application/json'
        )
        result = bytes_to_json(rv.data)
        assert result['id'] == 1
        assert result['owner']['id'] == 1

    def test_create_delete_campaign(self):
        campaign_temp = "Temporary Campaign"
        campaign_temp_id = 2
        rv = self.app.post(self.url,
            data=json.dumps({
                "name": campaign_temp,
                "owner_id": self.owner_id,
                }),
            content_type='application/json'
        )
        result = bytes_to_json(rv.data)
        assert result['id'] == campaign_temp_id
        rv = self.app.delete(self.url + "/" + str(campaign_temp_id))
        result = bytes_to_json(rv.data)
        assert result['deleted'] == campaign_temp_id
        rv = self.app.get(self.url + "/" + str(campaign_temp_id) )
        assert rv.status_code == 404
        result = bytes_to_json(rv.data)
        assert 'Not found' in result['error']
