from v1.apps.parsers import parse_base, parse_image
from v1.apps.users.parsers import *

def parse_maps(maps):
    map_set = []
    for map in maps:
        map_set.append(parse_map(map))
    return(map_set)

def parse_map(map):
    try:
        result = parse_base(map)
        result.update({
            "author": parse_user(map.author),
            "image": parse_image(map.image),
            "markers": parse_markers(map.markers),
        })
        return result
    except AttributeError:
        return None

def parse_markers(markers):
    marker_set = []
    for marker in markers:
        marker_set.append(parse_marker(marker))
    return(marker_set)

def parse_marker(marker):
    try:
        result = parse_base(marker)
        result.update({
            "x": marker.x_coord,
            "y": marker.y_coord,
        })
        return result
    except AttributeError:
        return None
