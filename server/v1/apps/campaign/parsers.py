from v1.apps.users.parsers import *
from v1.apps.journal.parsers import *


def parse_campaign(campaign):
    try:
        return ({
            "id": campaign.id,
            "name": campaign.name,
            "slug": campaign.slug,
            "owner": parse_user(campaign.owner),
            "entries": parse_entries(campaign.entries)
        })
    except AttributeError:
        return None
