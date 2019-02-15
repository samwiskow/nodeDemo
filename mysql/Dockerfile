FROM mysql:latest
# Uncomment this for Cars DB
COPY _carsDb.sql userSetup.sql /docker-entrypoint-initdb.d/

# Uncomment this for Wine DB
#COPY _wineDB.sql userSetup.sql /docker-entrypoint-initdb.d/

EXPOSE 4000