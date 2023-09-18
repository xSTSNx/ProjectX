#! /bin/bash

sudo su
sudo mv /home/ubuntu/ProjectX/ProtectX/frontend /var/www/html/frontend
sudo chown www-data:www-data /var/www/html/frontend
sudo chown www-data:www-data /var/www/html/frontend/index.html
sudo rm -r /home/ubuntu/index.html
touch FERTIG
