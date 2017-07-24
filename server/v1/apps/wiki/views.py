***REMOVED***, emit, disconnect
***REMOVED***, request, jsonify, abort
from slugify import slugify

import string

from v1.apps.campaign import campaign

#Models
from .models import Wiki
from v1.apps.campaign.models import Campaign
from v1.apps.users.models import User

#DB/Sockets
from v1.apps import socketio, db
#Parsers
from v1.apps.users.parsers import *
from .parsers import *

#Error handling
from v1.apps.errors import *
from v1.apps.campaign.errors import *

#Utils
from v1.apps.utils import *

wiki_base_url = '/<int:campaign_id>/wiki'
#Create
@campaign.route(wiki_base_url, methods=['POST'])
def create_wiki(campaign_id):
    data        = request.get_json()
    name       = get_required_data(data, "name")
    author_id   = get_required_data(data, "author_id")
    campaign    = Campaign.query.get(campaign_id)
    author      = User.query.get(author_id)
    if campaign is not None and author is not None:
        wiki = Wiki(name=name, author=author, campaign=campaign)
        db.session.add(wiki)
        db.session.commit()
        return jsonify(parse_wiki_post(wiki))
    else:
        abort(400)

#Read

@campaign.route(wiki_base_url, methods=['GET'])
def get_wikis(campaign_id):
    campaign = Campaign.query.get(campaign_id)
    if campaign is not None:
        return jsonify(parse_wiki(campaign.wiki))
    else:
        abort(404)

@campaign.route(wiki_base_url + '/<int:wiki_id>', methods=['GET'])
def get_wiki_by_id(campaign_id, wiki_id):
    wiki = Wiki.query.join(Campaign).filter(Campaign.id == campaign_id).filter(Wiki.id == wiki_id).first()
    if wiki is not None:
        return jsonify(parse_wiki_post(wiki))
    else:
        abort(404)

@campaign.route(wiki_base_url + '/<string:wiki_slug>', methods=['GET'])
def get_wiki_by_slug(campaign_id, wiki_slug):
    wiki = Wiki.query.join(Campaign).filter(Campaign.id == campaign_id).filter(Wiki.slug == wiki_slug).first()
    if wiki is not None:
        return jsonify(parse_wiki_post(wiki))
    else:
        abort(404)

#
# #Update
#
# @campaign.route('/<int:campaign_id>', methods=['POST'])
# def update_journal_by_id(campaign_id):
#     data = request.get_json()
#     name       =   get_required_data(data, "name")
#     description =   get_optional_data(data, "description")
#     journal = Journal.query.filter_by(id=campaign_id)
#     journal.update({"name":name, "description":description})
#     journal = journal.first()
#     journal.slug = slugify(journal.name, '')
#     db.session.commit()
#     return jsonify(parse_journal(journal))
#
# #Delete
# @campaign.route('/<int:campaign_id>', methods=['DELETE'])
# def delete_journal_by_id(campaign_id):
#     journal = Journal.query.get(campaign_id)
#     db.session.delete(journal)
#     db.session.commit()
#     journal = Journal.query.get(campaign_id)
#     if journal is None:
#         return jsonify({"deleted": campaign_id})
#     else:
#         message = "Journal was not deleted"
#         code = 400
#         return make_response(jsonify({'error': message}), code)
