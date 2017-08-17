import sys, json
from datetime import datetime
from v1.apps.constants import DATETIMEFORMAT
from v1.apps import app, db, socketio
from v1.apps.users.models import User
from v1.apps.campaign.models import Campaign
from v1.apps.journal.models import Entry
from v1.apps.wiki.models import Wiki
from v1.apps.characters.models import Character
from v1.apps.calendar.models import Calendar
from v1.apps.maps.models import CampaignMap, MapMarker

def get_or_create_user(username, email, password="pass"):
    user = User.query.filter_by(username=username).first()
    if user is None:
        user = User(username=username, email=email)
        user.hash_password(password)
        db.session.add(user)
        db.session.commit()
    return user

def create_campaign(name, image=None, owner=None):
    campaign = Campaign(name=name,
                        owner=owner,
                        header_image=image)
    db.session.add(campaign)
    db.session.commit()
    return campaign

def create_map(name, image, campaign, markers=[]):
    map_object = CampaignMap(name=name, image=image, campaign=campaign)
    for marker in markers:
        marker = MapMarker(name=marker['name'], x_coord=marker['x'], y_coord=marker['y'])
        map_object.markers.append(marker)
    db.session.add(map_object)
    db.session.commit()
    return map_object

def create_journal_entry(name, content, author, campaign):
    entry = Entry(name=name, content=content, author=author, campaign=campaign)
    db.session.add(entry)
    db.session.commit()
    return entry

def create_character(name, image, author, campaign):
    character = Character(name=name, image=image, author=author, campaign=campaign)
    db.session.add(character)
    db.session.commit()
    return character

def create_calendar_event(name, start_time, end_time, author, campaign):
    start_time_object = datetime.strptime(start_time, DATETIMEFORMAT)
    end_time_object = datetime.strptime(end_time, DATETIMEFORMAT)
    event = Calendar(name=name, end_time=end_time_object, start_time=start_time_object, author=author, campaign=campaign)
    db.session.add(event)
    db.session.commit()
    return event

def create_wiki_entry(name, content, author, campaign):
    wiki_entry = Wiki(name=name, content=content, author=author, campaign=campaign)
    db.session.add(wiki_entry)
    db.session.commit()
    return wiki_entry

if __name__ == '__main__':
    if len(sys.argv) < 2:
        print("Input file required")
        exit(1)
    input_file = sys.argv[1]
    data = json.load(open(input_file, 'r'))
    for campaign in data:
        #User
        owner = get_or_create_user(username=campaign['owner']['username'], email=campaign['owner']['email'])
        #Campaign
        campaign_object = create_campaign(campaign['name'], campaign['header_image'], owner)
        #Maps
        for campaignMap in campaign['maps']:
            create_map(campaignMap['name'], campaignMap['image'], campaign_object, campaignMap['markers'])
        #Journal entries
        for entry in campaign['journal']['entries']:
            author = User.query.get(entry['author']['id'])
            create_journal_entry(entry['name'], entry['content'], author, campaign_object)
        #Characters
        for character in campaign['characters']:
            author = User.query.get(character['author']['id'])
            create_character(character['name'], character['image'], author, campaign_object)
        #Wiki Entries
        for entry in campaign['wiki']['entries']:
            author = User.query.get(entry['author']['id'])
            create_wiki_entry(entry['name'], entry['content'], author, campaign_object)
        #Calendar
        for event in campaign['calendar']:
            author = User.query.get(event['author']['id'])
            create_calendar_event(event['name'], event['start_time'], event['end_time'], author, campaign_object)
        print("Imported", campaign_object.slug, campaign_object.id)
    print("Successfully imported", input_file )
