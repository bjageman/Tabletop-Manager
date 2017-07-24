from v1.apps.users.parsers import *

def parse_maps(maps):
    map_set = []
    for map in maps:
        map_set.append(parse_map(map))
    return(map_set)

def parse_map(map):
    try:
        return ({
            "id": map.id,
            "name": map.name,
            "slug": map.slug,
            "author": parse_user(map.author),
            "campaign_id": map.campaign.id
        })
    except AttributeError:
        return None
