const { Sequelize } = require('sequelize');
require('dotenv').config();

const database_name  = process.env.DATABASE_NAME;
const username  = process.env.USER_NAME;
const password  = process.env.DATABASE_PASSWORD
const databaseHost  = process.env.DATABASE_HOST


// Create a new Sequelize instance
const sequelize = new Sequelize(database_name, username, password, {
  host:databaseHost,
  dialect: 'mysql',  // 'mysql' | 'mariadb' | 'postgres' | 'mssql',
  port: process.env.DATABASE_PORT
});

// Test the database connection
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully .');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}



testConnection();

module.exports = sequelize;