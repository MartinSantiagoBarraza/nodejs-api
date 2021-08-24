const mysql = require("mysql");

const DB = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "neobank",
  // Idealmente colocar toda esta info en el archivo .env
});

module.exports = DB;
