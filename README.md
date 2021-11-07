# Move with Me

## Project Setup

### Start docker
```bash
# HTTPS
git clone https://github.com/nicchongwb/ict2101_project.git

# SSH
git clone git@github.com:nicchongwb/ict2101_project.git

cd ict2101_project/move_with_me

# Install docker on WSL / MAC Terminal
Insert relevant commands here

# Compose the docker image from docker-compose.yml file
docker-compose up # Ensure that you are in ict2101_project/move_with_me directory
```

### Basic Commands
```bash
netstat -tulnp
docker images # See what images is installed in Host OS
docker ps # See what containers are running
docker ps -a # See all containers (including not running)
```

#### WSL Users
\<IP address of WSL2\>:5000

### Things to test
- React integration [See link](https://dev.to/dev_elie/connecting-a-react-frontend-to-a-flask-backend-h1o)
- Github integration with docker (see got what benefits)

Links:  
- [Jira Project Board](https://bellesim.atlassian.net/jira/software/projects/ICT/boards/1)  
- [Draw.io](https://drive.google.com/file/d/1drLCtK4bo_EIfNhGjwgATMPUvP54XOKO/view?usp=sharing)
- [Flask + MongoDB setup](https://medium.com/@ashutoshhathidara98/creating-dockerized-flask-mongodb-application-20ccde391a)