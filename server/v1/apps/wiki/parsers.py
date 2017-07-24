from v1.apps.users.parsers import *

def parse_wiki(wikis):
    wiki_set = []
    for wiki in wikis:
        wiki_set.append(parse_wiki_post(wiki))
    return(wiki_set)

def parse_wiki_post(wiki):
    try:
        return ({
            "id": wiki.id,
            "name": wiki.name,
            "slug": wiki.slug,
            "author": parse_user(wiki.author),
            "campaign_id": wiki.campaign.id
        })
    except AttributeError:
        return None
