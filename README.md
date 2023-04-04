# Server

## Prerequisites

- Download and install IntelliJ IDEA from here: <https://www.jetbrains.com/idea/download/#section=windows>.

## Run Server

1. Import server folder in IntelliJ.
2. Click on the play button on the top right corner, which should build and run your server.
3. **You may need to specify your JDK directory from the project settings.**
4. **Additional steps may be needed for Community Edition, since it doesn't work with Spring Boot out of the box.**

# Client

## Prerequisites

- Download and install Node.js from here: <https://nodejs.org/en/download>.
- Run `npm install -g @angular/cli` to install the latest version of angular cli. To update local angular cli, cd into client folder and run `ng update @angular/cli @angular/core`.

## Run Client

Run `ng serve --open` to run the application. Your browser should open and navigate to `http://localhost:4200`.

## Test Client

Run `ng test` to test the application.