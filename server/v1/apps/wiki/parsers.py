from v1.apps.users.parsers import *

def parse_wiki(wikis):
    wiki_set = []
    for wiki in wikis:
        wiki_set.append(parse_wiki_post(wiki))
    return(wiki_set)

def parse_wiki_post(wiki):
    try:
        result = parse_base(wiki)
        result.update({
            "content": wiki.content,
            "author": parse_user(wiki.author),
        })
        return result
    except AttributeError:
        return None
