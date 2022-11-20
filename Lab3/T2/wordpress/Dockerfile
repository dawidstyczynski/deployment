FROM debian:jessie
RUN apt update
RUN apt upgrade
RUN apt install apache2 -y
RUN apt install -y php5 php-pear php5-mysql
RUN apt install -y wget tar

RUN wget http://wordpress.org/latest.tar.gz  && tar -xzvf latest.tar.gz && rm -rf latest.tar.gz

RUN rm -f /var/www/html/index.html
RUN cp -a /wordpress/* /var/www/html
RUN chown -R www-data:www-data /var/www/html
RUN chmod -R 755 /var/www/html

RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf
RUN service apache2 restart

ENV WORDPRESS_DB_NAME 'wordpress'
ENV WORDPRESS_DB_USER 'test'
ENV WORDPRESS_DB_PASSWORD 'test'
ENV WORDPRESS_DB_HOST 'localhost'

EXPOSE 80

VOLUME [ "/var/www/html" ]
CMD cp /var/www/html/wp-config-sample.php /var/www/html/wp-config.php \
    && sed -i "s/^.*DB_NAME.*$/define('DB_NAME', '${WORDPRESS_DB_NAME}');/" /var/www/html/wp-config.php \
    && sed -i "s/^.*DB_USER.*$/define('DB_USER', '${WORDPRESS_DB_USER}');/" /var/www/html/wp-config.php \
    && sed -i "s/^.*DB_PASSWORD.*$/define('DB_PASSWORD', '${WORDPRESS_DB_PASSWORD}');/" /var/www/html/wp-config.php \
    && sed -i "s/^.*DB_HOST.*$/define('DB_HOST', '${WORDPRESS_DB_HOST}');/" /var/www/html/wp-config.php \
    && apachectl -D FOREGROUND