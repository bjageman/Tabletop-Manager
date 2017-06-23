from v1.apps import app, db

class_skill_table = db.Table('class_skill', db.Model.metadata,
    db.Column('class_info_id', db.Integer, db.ForeignKey('class_info.id')),
    db.Column('skill_id', db.Integer, db.ForeignKey('skill.id'))
)

class_weapon_proficiency_table = db.Table('class_weapon_proficiency', db.Model.metadata,
    db.Column('class_info_id', db.Integer, db.ForeignKey('class_info.id')),
    db.Column('weapon_id', db.Integer, db.ForeignKey('weapon.id'))
)

class Character(db.Model):
    __tablename__ = 'character'
    id = db.Column(db.Integer, primary_key= True)
    name = db.Column(db.String(32))
    player_character = db.Column(db.Boolean, default=False)
    race = db.relationship("Race", backref="characters")
    race_id = db.Column(db.Integer, db.ForeignKey('race.id'))
    class_info = db.relationship("ClassInfo", backref="characters")
    class_info_id = db.Column(db.Integer, db.ForeignKey('class_info.id'))
    abilities = db.relationship("CharacterAbility")
    def add_race_modifiers(self):
        for ability_mod in self.race.ability_mods:
            iteration = (ability for ability in self.abilities if ability_mod.ability.name in ability.ability.name)
            for ability in iteration:
                ability.score = ability.score + ability_mod.modifier
    def get_race_ability_modifier(self, ability):
        iteration = ( modifier for modifier in self.race.ability_mods if ability in modifier.ability.name )
        for modifier in iteration:
            return {"name": modifier.ability.name, "modifier": modifier.modifier}
        return {"name": ability, "modifier": 0}


class CharacterAbility(db.Model):
    __tablename__ = 'character_ability'
    character_id = db.Column(db.Integer, db.ForeignKey('character.id'), primary_key=True)
    ability_id = db.Column(db.Integer, db.ForeignKey('ability.id'), primary_key=True)
    score = db.Column(db.Integer)
    modifier = db.Column(db.Integer)
    ability = db.relationship("Ability")
    def __init__(self, ability, score):
        self.ability = ability
        self.score = score
        self.modifier = int(score - 10 / 2)

class RaceAbility(db.Model):
    __tablename__ = 'race_ability'
    race_id = db.Column(db.Integer, db.ForeignKey('race.id'), primary_key=True)
    ability_id = db.Column(db.Integer, db.ForeignKey('ability.id'), primary_key=True)
    modifier = db.Column(db.Integer)
    ability = db.relationship("Ability")
    def __init__(self, ability, modifier):
        self.ability = ability
        self.modifier = modifier

class Ability(db.Model):
    __tablename__ = 'ability'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(32))
    saving_throw_id = db.Column(db.Integer, db.ForeignKey('saving_throw.id'))

class Skill(db.Model):
    __tablename__ = 'skill'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(32), unique=True)
    ability = db.relationship("Ability", backref="skills")
    ability_id = db.Column(db.Integer, db.ForeignKey('ability.id'))

class SavingThrow(db.Model):
    __tablename__ = 'saving_throw'
    id = db.Column(db.Integer, primary_key=True)
    ability = db.relationship("Ability", uselist=False, backref="ability_saving_throw")

class ClassInfo(db.Model):
    __tablename__ = 'class_info'
    id = db.Column(db.Integer, primary_key= True)
    name = db.Column(db.String(32))
    spell_ability = db.relationship("Ability")
    spell_ability_id = db.Column(db.Integer, db.ForeignKey('ability.id'))
    skill_proficiencies = db.relationship("Skill",
                    secondary=class_skill_table,
                    backref="class_skills")

class Race(db.Model):
    __tablename__ = 'race'
    id = db.Column(db.Integer, primary_key= True)
    name = db.Column(db.String(32))
    size = db.Column(db.String(32))
    speed = db.Column(db.Integer, default=30)
    ability_mods = db.relationship("RaceAbility")

class Weapon(db.Model):
    __tablename__ = 'weapon'
    id = db.Column(db.Integer, primary_key= True)
    name = db.Column(db.String(32))
