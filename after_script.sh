#! /bin/bash
sudo su
sudo rm -r /var/www/html/* 
sudo cp -r /home/ubuntu/frontend/* /var/www/html/
sudo chown www-data:www-data /var/www/html/
sudo chown www-data:www-data /var/www/html/index.html
touch FERTIG
