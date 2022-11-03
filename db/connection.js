const mysql = require("mysql2");
require("dotenv").config();

const connection = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "admin",
    database: "employee_db",
  },
  console.log("Connected to DB")
);

module.exports = connection;
