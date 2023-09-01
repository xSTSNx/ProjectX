#! /bin/bash

sudo su
sudo apt update -y
sudo apt upgrade -y 
sudo apt install nginx -y
sudo systemctl start nginx
sudo systemctl enable nginx
sudo mv /home/ubuntu/index.html /var/www/html
sudo chown www-data:www-data /var/www/html
sudo chown www-data:www-data /var/www/html/index.html
sudo rm -r /home/ubuntu/index.html
touch FERTIG