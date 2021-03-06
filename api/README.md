# BCVM Back End API

![Version](https://img.shields.io/badge/version-1.0.0-red?style=for-the-badge)
![Spring Boot Version](https://img.shields.io/badge/spring%20boot-2.6.4-green?style=for-the-badge)
![Java Version](https://img.shields.io/badge/java-8-orange?style=for-the-badge)
![GitHub last commit](https://img.shields.io/github/last-commit/zachneill/bc-vending-machines?color=purple&style=for-the-badge) 

The back end REST API for the BC Vending Machines app. This uses Spring Boot 2.6.4 alongside Java 8. The production build is on Heroku at [bcvm.herokuapp.com](https://bcvm.herokuapp.com/test). The Angular front end is available in the initial directory of the [BCVM](https://github.com/zachneill/bcvm) repo.

## Running the Application

### PostgreSQL on port 5432

Locally, the repo intends to connect to a Postgres database called "bcvmdb" that runs on the default port 5432. [Install PostgreSQL here](https://www.postgresql.org/download/). You may need to populate the database with the `schema.sql` and then the `data.sql` SQL file in `api/src/main/resources`.

### Spring Boot on port 8080

For development, use the provided "Local configuration" in `api/src/main/resources/application.properties`. For production, comment it out.

IntelliJ IDEA was used to create and maintain this API. To run the server, open the api folder as a project in a Java IDE and run it that way. Or, run `mvn spring-boot:run`. This requires some setup via [installing Maven](https://mkyong.com/maven/how-to-install-maven-in-windows/), cd'ing into the directory where pom.xml is located in, and running `mvn spring-boot:run`. [This may help](https://stackoverflow.com/a/56616547).

### Full development stack (ports 5432, 8080, 4200)

In addition to the above setup, you will need to set up the front end, so check out the [README in the initial directory](https://github.com/zachneill/bcvm#bc-vending-machines).
