from v1.apps.users.parsers import *
from v1.apps.constants import DATETIMEFORMAT
def parse_calendar(calendar):
    calendar_set = []
    for event in calendar:
        calendar_set.append(parse_event(event))
    return(calendar_set)

def parse_event(calendar):
    try:
        result = parse_base(calendar)
        result.update({
            "start_time": calendar.start_time.strftime(DATETIMEFORMAT),
            "end_time": calendar.end_time.strftime(DATETIMEFORMAT),
            "author": parse_user(calendar.author),
            "campaign_id": calendar.campaign.id
        })
        return result
    except AttributeError:
        return None
