from v1.apps.parsers import *
from v1.apps.journal.parsers import *


def parse_campaign(campaign):
    try:
        return ({
            "id": campaign.id,
            "title": campaign.title,
            "slug": campaign.slug,
            "description": campaign.description,
            "owner": parse_user(campaign.owner),
            "entries": parse_entries(campaign.entries)
        })
    except AttributeError:
        return None
