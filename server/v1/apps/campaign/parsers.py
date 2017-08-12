from v1.apps.users.parsers import *
from v1.apps.journal.parsers import *
from v1.apps.characters.parsers import *
from v1.apps.maps.parsers import *
from v1.apps.wiki.parsers import *
from v1.apps.calendar.parsers import *
from v1.apps.parsers import parse_base

def parse_campaign(campaign):
    try:
        result = parse_base(campaign)
        result.update({
            "owner": parse_user(campaign.owner),
            "journal": parse_entries(campaign.entries)
        })
        return result
    except AttributeError:
        return None

def parse_campaign_detailed(campaign):
    try:
        result = parse_base(campaign)
        result.update({
            "owner": parse_user(campaign.owner),
            "journal": parse_entries(campaign.entries),
            "characters": parse_characters(campaign.characters),
            "calendar": parse_calendar(campaign.calendar),
            "maps": parse_maps(campaign.maps),
            "wiki": parse_wiki(campaign.wiki),

        })
        return result
    except AttributeError:
        return None
