def parse_base(model):
    try:
        return ({
            "id": model.id,
            "name": model.name,
            "slug": model.slug,
            "created": model.created.strftime("%b %d %Y %I:%M%p"),
            "updated": model.updated.strftime("%b %d %Y %I:%M%p")
        })
    except AttributeError:
        return None
