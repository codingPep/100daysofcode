1. Sequelize is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server. 

//commands
2. $ npm install --save sequelize

3. $ npm install --save pg pg-hstore # Postgres




// Include these in the nodejs file
//connection to database

 const { Sequelize } = require('sequelize');
//one way
 const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres
//another way
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 
  });





//Sequelize Migration concepts
refer:
https://medium.com/@MomchilKolev/sequelize-migrations-with-relations-a8fd40a0912b