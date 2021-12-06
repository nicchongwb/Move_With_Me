# Troubleshooting Application
## Installation issues
### WSL - React troubleshoot
For npx create-react-app client, if faced with a bash\r: no such file or directory 
```bash
sudo apt install nodejs npm
sudo nano /etc/wsl.conf

#While in the wsl.conf file
[interop]
appendWindowsPath = false
```

```cmd
# Command Prompt
wsl --shutdown
Restart-Service LxssManager
```
