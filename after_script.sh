#! /bin/bash
sudo su
sudo mv /home/ubuntu/ProjectX/ProjectX/frontend/ /var/www/html/
sudo chown www-data:www-data /var/www/html/
sudo chown www-data:www-data /var/www/html/index.html
touch FERTIG
