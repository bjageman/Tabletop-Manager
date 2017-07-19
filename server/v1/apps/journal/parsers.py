from v1.apps.parsers import *

def parse_entries(entries):
    entry_set = []
    for entry in entries:
        entry_set.append(parse_entry(entry))
    return(entry_set)

def parse_entry(entry):
    try:
        return ({
            "id": entry.id,
            "title": entry.title,
            "slug": entry.slug,
            "content": entry.content,
            "author": parse_user(entry.author),
            "campaign_id": entry.campaign.id
        })
    except AttributeError:
        return None
