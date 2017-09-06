from v1.apps.users.parsers import *

def parse_entries(entries):
    entry_set = []
    for entry in entries:
        entry_set.append(parse_entry(entry))
    return(entry_set)

def parse_entry(entry):
    try:
        result = parse_base(entry)
        result.update({
            "content": entry.content,
            "author": parse_user(entry.author),
        })
        return result
    except AttributeError:
        return None
