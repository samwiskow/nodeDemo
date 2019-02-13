CREATE USER 'blockuser'@'%' IDENTIFIED WITH mysql_native_password BY 'bl0cks99';
GRANT SELECT ON * . * TO 'blockuser'@'%';
FLUSH PRIVILEGES;