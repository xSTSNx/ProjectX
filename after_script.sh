#! /bin/bash
sudo su
sudo mv /home/ubuntu/ProjectX/ProtectX/frontend/ /var/www/html/
sudo chown www-data:www-data /var/www/html/
sudo chown www-data:www-data /var/www/html/frontend/index.html
touch FERTIG
