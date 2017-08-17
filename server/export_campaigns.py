import sys, json
from datetime import datetime

from v1.apps import app, db, socketio
from v1.apps.campaign.parsers import parse_campaign_detailed
from v1.apps.campaign.models import Campaign

if __name__ == '__main__':
    campaigns = Campaign.query.all()
    for campaign in campaigns:
        print(json.dumps(parse_campaign_detailed(campaign), indent=4))
