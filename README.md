# Move with Me

## How to run

### Setup dependencies
This web application will run Python Flask for its backends and MVC structure. MongoDB will be interfaced by Flask application for database purposes. React will be explored if time permits for the frontend of the application.

#### Cloning reposiotry
```bash
# via HTTPS
git clone https://github.com/nicchongwb/ict2101_project.git
# via SSH
eval $(ssh-agent -s)
ssh-add <ssh private-key>
git clone git@github.com:nicchongwb/ict2101_project.git

cd ict2101_project/move_with_me
```

#### Start frontend : React
```bash
```

#### Start backend : Flask
```bash
#Windows Setup
cd ict2101_project/move_with_me/server
python3 -m venv venv # Create a python environmment
. venv/bin/activate # Start python environment
pip install -r requirements.txt
FLASK_APP=app.py FLASK_ENV=development flask run # Run Flask in debug mode

#Mac Setup
cd ict2101_project/move_with_me/server
python3 -m venv venv # Create a python environmment
source venv/bin/activate # Start python environment
pip install -r requirements.txt
FLASK_APP=run.py FLASK_ENV=development flask run # Run Flask in debug mode


```

#### Starting backend : MongoDB
```bash
cd ict2101_project/move_with_me/server
sudo apt-get install mongodb # Install mongodb into system
mkdir -p /data/db # For linux system
sudo mongod # Start mongodb

# Loading json collections (will autocreate if not exist)
mongoimport --db mvm_db --collection <collection> --file mongodb/scripts/<collection>.json
```

#### MVC in Flask Structure

|Type|Folders|File Name Convention|
|--|--|--|
|Model|models|\<classname\>_m.py|
|Views|views|\<classname\>_v.py|
|Controllers|routes|\<classname\>_c.py|

#### MongoDB structure

|Structure|Name|
|--|--|
|Database|mvm_db|
|Collection|users, challenges, rankings|


### Accessing application/services
```bash
# Flask application
http://localhost:5000

# Accessing mongodb via terminal
mongo # mongoshell
show dbs
use mvm_db
show collections
```
---

## Development Workflow
Always branch for each feature. A feature typically comprise of a class, eg. Entity, Control, Boundary

```
dev-<component>-<feature>
dev-<component>-<feature>-<function>
dev-AccountManagement-UserEntity
dev-AccountManagement-UserController
dev-AccountManagement-UserBoundary
```
If a feature is too complex, eg. GameBoundary then we can split further with following
```
dev-AccountManagement-GameBoundary
dev-AccountManagement-GameBoundary-<function>
```
Commands to use
```bash
git branch # see which branch
git checkout -b <branch name> # Create a new branch and switch to it

Example to create a feature branch:
git switch dev
git checkout -b dev/<component> # Create the compononet branch if not exist
git checkout -b dev/<component>/<feature>

# Staging and commit
git add . # this will add all changes, if you don't wish to do that, then don't use .
git commit -m "Enter message here"
git pull
git push
```
Messages should be clear, eg. Update ... or Implemented ... or Integrated A with B

## Things to test
- React integration [See link](https://dev.to/dev_elie/connecting-a-react-frontend-to-a-flask-backend-h1o)
- Github integration with docker (see got what benefits)

Links - to be added to Wiki:  
- [Jira Project Board](https://bellesim.atlassian.net/jira/software/projects/ICT/boards/1)  
- [Draw.io](https://drive.google.com/file/d/1drLCtK4bo_EIfNhGjwgATMPUvP54XOKO/view?usp=sharing)
- [Flask - MVC](https://python.plainenglish.io/flask-crud-application-using-mvc-architecture-3b073271274f)
- [MongoDB - Cheatsheet](https://www.mongodb.com/developer/quickstart/cheat-sheet/)
