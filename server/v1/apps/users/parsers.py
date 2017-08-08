
def parse_user(user):
    try:
        return ({
            "id": user.id,
            "username": user.username,
            "first_name": user.first_name,
            "last_name": user.last_name,
            "email": user.email,
            "admin": user.admin,
            "campaigns": parse_user_campaigns(user.campaigns)
        })
    except AttributeError:
        return None

def parse_user_campaign(campaign):
    try:
        return ({
            "id": campaign.id,
            "name": campaign.name,
            "slug": campaign.slug,
        })
    except AttributeError:
        return None

def parse_user_campaigns(campaigns):
    campaign_set = []
    for campaign in campaigns:
        campaign_set.append(parse_user_campaign(campaign))
    return(campaign_set)
