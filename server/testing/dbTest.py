from . import TestingBase
from collections import Counter

from v1.apps.users.models import User
from v1.apps.characters.models.characters import *
from v1.apps.characters.models.tools import *

from v1.apps import app, db
import random

abilities = ["str", "dex", "con", "int", "wis", "cha"]
skills = [
    {"name": "Arcana",      "ability": "int"},
    {"name": "Athletics",   "ability": "str"},
    {"name": "Acrobatics",  "ability": "dex"},
    {"name": "Stealth",     "ability": "dex"},
    {"name": "Medicine",    "ability": "wis"},
    ]

player_classes = [{
    "name": "Wizard",
    "spell_ability": "int",
    "saving_throws": ["int", "wis"],
    "skill_proficiencies": ["Arcana", "History", "Insight", "Investigation", "Medicine", "Religion" ],
    "weapon_proficiencies": ["dagger", "dart", "sling", "quarterstaff", "light crossbow"],
    "armor_proficiencies": [],
    }]

races = [{
    "name": "Elf",
    "ability_mods": [
    {
        "name":"dex",
        "mod":"2"
    },
    {
        "name":"int",
        "mod":"1"
    },
    ]
}]

characters =[{
    "name":"Tester1",
    "class": "Wizard",
    "race": "Elf",
    "abilities":{
        "str": 8,
        "dex": 12,
        "con": 14,
        "int": 18,
        "wis": 12,
        "cha": 6,
    },
    "skill_proficiencies":[
        "Arcana", "Medicine", "Stealth"
    ],


}]

class DBTests(TestingBase):
    def setUp(self):
        super().setUp()
        for ability in abilities:
            ability = Ability(name=ability)
            db.session.add(ability)
        for skill in skills:
            skill = Skill(name=skill['name'], ability=self.get_ability(skill['ability']))
            db.session.add(skill)
        for player_race in races:
            race = Race(name=player_race['name'])
            for ability_mod in player_race['ability_mods']:
                race.ability_mods.append(RaceAbility(self.get_ability(ability_mod['name']), ability_mod['mod']))
            db.session.add(race)
        for player_class in player_classes:
            class_info = ClassInfo(name=player_class['name'], spell_ability=self.get_ability(player_class['spell_ability']))
            for skill in player_class['skill_proficiencies']:
                skill = self.get_skill(skill)
                if skill is not None:
                    class_info.skill_proficiencies.append(skill)
            db.session.add(class_info)
        db.session.commit()

    def user_login(self):
        username = "TestUser1"
        correct_password = "password"
        incorrect_password = "Password"
        user = User.query.filter_by(username=username).first()
        assert username in user.username
        assert user.verify_password(correct_password)
        assert not user.verify_password(incorrect_password)

    def get_ability(self, name):
        return Ability.query.filter_by(name=name).first()

    def get_skill(self, name):
        return Skill.query.filter_by(name=name).first()

    def get_class(self, name):
        return ClassInfo.query.filter_by(name=name).first()

    def get_race(self, name):
        return Race.query.filter_by(name=name).first()

    def test_create_elf_wizard(self):
        data = characters[0]
        char = Character(name=data["name"], player_character=True, race=self.get_race(data["race"]), class_info=self.get_class(data["class"]))
        for ability, value in data['abilities'].items():
            char.abilities.append(CharacterAbility(self.get_ability(ability), value))
        db.session.add(char)
        db.session.commit()
        print(char.name, char.class_info.name)
        char.add_race_modifiers()
        for ability in char.abilities:
            mod = char.get_race_ability_modifier(ability.ability.name)
            print(ability.ability.name, ability.score, "mod:", mod['modifier'])
