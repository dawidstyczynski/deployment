FROM debian:jessie

ENV DEBIAN_FRONTEND noninteractive
ENV container docker

RUN apt update
RUN apt upgrade
RUN apt install -y wget --force-yes
RUN wget http://repo.mysql.com/mysql-apt-config_0.8.9-1_all.deb
RUN apt install -y lsb-release --force-yes
RUN dpkg -i mysql-apt-config_0.8.9-1_all.deb
RUN apt update
RUN apt install -y --force-yes mysql-server

RUN sed -i "s/.*bind-address.*/bind-address = 0.0.0.0/" /etc/mysql/mysql.conf.d/mysqld.cnf

ENV MYSQL_DATABASE 'db'
ENV MYSQL_USER 'user'
ENV MYSQL_PASSWORD 'pass'
ENV MYSQL_ROOT_PASSWORD = 'test123'

RUN echo "mysql-server mysql-server/root_password password $MYSQL_ROOT_PASSWORD" | debconf-set-selections
RUN echo "mysql-server mysql-server/root_password_again password $MYSQL_ROOT_PASSWORD" | debconf-set-selections

RUN service mysql restart && mysql -e "CREATE DATABASE IF NOT EXISTS $MYSQL_DATABASE"
RUN service mysql restart && mysql $MYSQL_DATABASE -e "CREATE USER IF NOT EXISTS '$MYSQL_USER'@'%' IDENTIFIED BY '$MYSQL_PASSWORD'"
RUN service mysql restart && mysql  $MYSQL_DATABASE -e "GRANT ALL PRIVILEGES ON $MYSQL_DATABASE.* TO '$MYSQL_USER'@'%'"
VOLUME ["/var/lib/mysql/", "/etc/mysql"]

EXPOSE 3306




CMD mysqld --user=mysql
