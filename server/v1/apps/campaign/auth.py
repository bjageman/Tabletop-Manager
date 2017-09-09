from .models import Campaign
from v1.apps.auth import verify_auth
from .errors import *
from flask import abort

#Will be fleshed out more to include non-owner users
def verify_campaign_access(user, campaign):
    return user == campaign.owner

def request_campaign_auth(request, campaign_id):
    user = verify_auth(request)
    campaign = Campaign.query.get(campaign_id)
    print(verify_campaign_access(user, campaign))
    if user is None or not verify_campaign_access(user, campaign):
        abort(401)
    return user, campaign
