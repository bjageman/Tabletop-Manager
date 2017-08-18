This is a tabletop role-playing game manager. It's designed to keep track of your
team's progress and share new info and lore about your campaign and the player's
characters.

## Table of Contents

- [Installation](#installation)
   - [Pre-requisites](#pre-requisites)
   - [React Client](#react-client)
   - [Flask Server](#flask-server)

### Installation

This application runs a React front-end with a Python Flask REST API backend.

#### Pre-requisites

- [npm](https://www.npmjs.com/get-npm)
- [yarn](https://yarnpkg.com/lang/en/docs/install/)
- [python3](https://www.python.org/downloads/)
- [mysql](https://dev.mysql.com/downloads/installer/) / [postgresql](http://postgresguide.com/setup/install.html)

#### React Client

In the root folder, run `yarn install`. <br>
After it completes, run `yarn start`.

Note: Don't use `npm`, it will not install properly.

#### Flask Server

You'll need to create and run a virtual environment in python3 before continuing.

```
cd server
pip install -r requirements.txt
```

After that,

```
cp v1/apps/config.template.py v1/apps/config.py
```

You'll need to edit the new `config.py` file to match your mysql/postgresql parameters. Once that is setup, run:

```
python client.py --setup
python run.py
```

After that, the server should be running!
