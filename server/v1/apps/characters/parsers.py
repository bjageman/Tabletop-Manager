from v1.apps.users.parsers import *

def parse_characters(characters):
    character_set = []
    for character in characters:
        character_set.append(parse_character(character))
    return(character_set)

def parse_character(character):
    try:
        result = parse_base(character)
        result.update({
            "image": character.image,
            "author": parse_user(character.author),
            "campaign_id": character.campaign.id
        })
        return result
    except AttributeError:
        return None
