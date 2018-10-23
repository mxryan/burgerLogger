const mysql = require("mysql");
const db = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "burgerlogger_db"
});

db.connect((err)=>{
  if (err) {
    console.error("error connecting: ", err.stack);
    return;
  }
  console.log("Connected. Thread ID: ", db.threadId);
});

module.exports = db;

