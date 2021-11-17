# Move with Me

## How to run

### Setup dependencies
This web application will run Python Flask for its backends and MVC structure. MongoDB will be interfaced by Flask application for database purposes. React is used to handle frontend for user interactions with the application.

### Overview of Application
|Service|IPv4|Port|Proxy|
|--|--|--|--|
|React|IPv4 of WSL (Win), localhost (Mac)|3000|5000|
|Flask|localhost|5000|\-|
|MongoDB|localhost|27017|\-|

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
cd ict2101_project/move_with_me
npx create-react-app client # Creates react app into client folder
cd client
npm start
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
# React application
## WSL Users
ip a # Take the IP address of your WSL system eg. 172.31.103.150
http://<IP address of WSL>:3000

## MAC Users
http://localhost:3000

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

1. Create branch for feature/class, refer to Github branch management guide below
2. After a function of a feature is complete and **accepted**, push it to the parent branch (feature)
3. After a feature is completed and **accepted**, push it to the parent branch (component)
4. Proceed to UAT for respective functions.
5. If a component/feature/function fails the UAT, create an issue and rectify in respective dev branch.

### Github branch management guide
Phases includes : dev, UAT
Component includes : name of component (ref to component diagram)
Feature includes : name of classes (Entity, Control, Boundary, Interface)
Function includes : respsective functions of each feature/class 

```
<phase>-<component>-<feature>
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
- [React Setting up](https://www.youtube.com/watch?v=7LNl2JlZKHA)
- [React VSCode plugin](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
- [Gitignore templates](https://github.com/github/gitignore)