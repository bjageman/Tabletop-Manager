from v1.apps.users.parsers import *

def parse_calendars(calendars):
    calendar_set = []
    for calendar in calendars:
        calendar_set.append(parse_calendar(calendar))
    return(calendar_set)

def parse_calendar(calendar):
    try:
        return ({
            "id": calendar.id,
            "name": calendar.name,
            "slug": calendar.slug,
            "author": parse_user(calendar.author),
            "campaign_id": calendar.campaign.id
        })
    except AttributeError:
        return None
