# Server

## Prerequisites

- Download and install IntelliJ IDEA from here: <https://www.jetbrains.com/idea/download/#section=windows>.
- Download and install PostgreSql Database from here: <https://www.postgresql.org/download/>.
    - Create a new postgresql database called **student**.
    - Create a new postgresql user named **user** and set password to **password**. Make sure to grant this new user all privileges.

## Run Server

### Run From Command Line

1. Open a command prompt and navigate to `server`.
2. Run `mvn clean install` to build the project.
3. Run `java -jar target\demo-1.0-${version_number}.jar`. Replace `${version_number}` with the current version number.

### Run From IntelliJ

1. Import server folder in IntelliJ.
2. Specify your JDK directory from the project settings.
3. Click on the play button on the top right corner, which should build and run your server.
4. **For Community Edition, you'll need to install Spring Boot Helper plugin since it doesn't work with Spring Boot out of the box. Note that this is now a paid plugin. Or if you get the Ultimate Edition, Spring Boot is supported out of the box.**

# Client

## Prerequisites

- Download and install Node.js from here: <https://nodejs.org/en/download>.
- Run `npm install -g @angular/cli` to install the latest version of angular cli. To update local angular cli, cd into client folder and run `ng update @angular/cli @angular/core`.

## Run Client

Run `ng serve --open` to run the application. Your browser should open and navigate to `http://localhost:4200`.

## Test Client

Run `ng test` to test the application.