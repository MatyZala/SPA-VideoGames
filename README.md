Individual Project - VideoGames App

Project Objectives

- Build an App using React, Redux, Node and Sequelize.
- Affirm and connect the concepts learned in the race.
- Learn best practices.
- Learn and practice the GIT workflow.
- Use and practice testing.

Landing:

As a first impression we can see a home page that has a title and a button that will redirect us to the main page.

![image](https://user-images.githubusercontent.com/67989505/179651625-4ad1a654-e016-4154-9f93-fbcae14347cf.png)

Home:

This is the main page where we can see many cards preloaded with videogames. We also have options to filter by genres and the option to filter by videogames created or already existing. A search bar and options to sort by rating and alphabetically. We also have a button that redirects us to the creation form of a new videogame. If you click on a card's name or image, you will be redirected to the videogame detail page.

![image](https://user-images.githubusercontent.com/67989505/179651747-89e89de6-dbaf-402c-897f-1dbd711203a5.png)

Form:

The form page has several fields to fill in, each one validated so that a new videogame cannot be created without completing all the fields.

![image](https://user-images.githubusercontent.com/67989505/179652370-a19da5f1-2b89-402b-893e-ff203604362a.png)

Detail:

On this page we can see the detailed information about the video game that we select.

![image](https://user-images.githubusercontent.com/67989505/179652449-8b1a2774-27bf-4322-bffe-8ede546c818c.png)

Quick Start
Fork the repository to have a copy of it in your accounts
Clone the repository on your computers to start working
Currently the required versions are:

Node: 12.18.3 or older
NPM: 6.14.16 or older
In api create a file called: .env that has the following form:

DB_USER=usuariodepostgres
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost
Replace postgresuser and postgrespassword with your own credentials to connect to postgres

Run the next commands in file root:

npm install

npm start

Open http://localhost:3000 in your browser

The client content was created using: Create React App.

Credits:
React
Redux
Express
Sequelize - Postgres




