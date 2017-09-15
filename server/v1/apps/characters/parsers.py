from v1.apps.parsers import parse_base, parse_image
from v1.apps.users.parsers import *

def parse_character_sheet(sheet):
    try:
        result = parse_base(sheet)
        result.update({
            "url": sheet.url,
            "blob": sheet.blob,
        })
        return result
    except AttributeError:
        return None


def parse_characters(characters):
    character_set = []
    for character in characters:
        character_set.append(parse_character(character))
    return(character_set)

def parse_character(character):
    try:
        result = parse_base(character)
        result.update({
            "image": parse_image(character.image),
            "author": parse_user(character.author),
            "campaign_id": character.campaign.id,
            "sheet": parse_character_sheet(character.sheet),
        })
        return result
    except AttributeError:
        return None
