# Code Movement Pakistan - Ansible DevOps Bootcamp

[![Gitter](https://badges.gitter.im/forstbyte-io/ansible-devops-bootcamp.svg)](https://gitter.im/forstbyte-io/ansible-devops-bootcamp?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge) 

## Prerequisites

* docker-compose
* ansible
* nodejs
* npm

## Project Setup

Following are the steps to setup the both Demo projects:

* Run docker command `docker-compose up --build`.
* Create an inventory file `hosts` or modify in `/etc/ansible/hosts`.
* Collect the `docker0` ip from `ifconfig`.
* Add the following configuration in `/etc/ansible/hosts`.

```
[servers]
server1 ansible_user=root ansible_host=172.17.0.1 ansible_port=32781 ansible_ssh_pass=frostbyte
server2 ansible_user=root ansible_host=172.17.0.1 ansible_port=32782 ansible_ssh_pass=frostbyte

[servers:vars]
ansible_python_interpreter=/usr/bin/python3

[dev_servers]
devServer-1 ansible_user=root ansible_host=172.17.0.1 ansible_port=32783 ansible_ssh_pass=frostbyte
devServer-2 ansible_user=root ansible_host=172.17.0.1 ansible_port=32784 ansible_ssh_pass=frostbyte

[dev_servers:vars]
ansible_python_interpreter=/usr/bin/python3

[stage_servers]
stageServer-1 ansible_user=root ansible_host=172.17.0.1 ansible_port=32785 ansible_ssh_pass=frostbyte
stageServer-2 ansible_user=root ansible_host=172.17.0.1 ansible_port=32786 ansible_ssh_pass=frostbyte

[stage_servers:vars]
ansible_python_interpreter=/usr/bin/python3

```

* Ansible uses python2 as default interpreter. In case you are running `python3` include the `ansible_python_interpreter`

* Try to ssh in each server using ssh command `ssh root@<ansible-host> -p <ansible-port>` to save the keys into your known_hosts. This step can also be automated.

* Ping the containers using `ansible all -m ping -u root`

```
devServer-1 | SUCCESS => {
    "changed": false,
    "ping": "pong"
}
devServer-2 | SUCCESS => {
    "changed": false,
    "ping": "pong"
}
stageServer-1 | SUCCESS => {
    "changed": false,
    "ping": "pong"
}
server2 | SUCCESS => {
    "changed": false,
    "ping": "pong"
}
server1 | SUCCESS => {
    "changed": false,
    "ping": "pong"
}
stageServer-2 | SUCCESS => {
    "changed": false,
    "ping": "pong"
}
```
If you get the above response means you have your instances are accessable and you are good to proceed.