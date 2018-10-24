const mysql = require("mysql");
var db;
if (process.env.JAWSDB_URL) {
  db = mysql.createConnection(process.env.JAWSDB_URL);
  console.log("env url found");
} else {
  console.log("env url not found");
  db = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "burgerlogger_db"
  });
}
db.connect((err) => {
  if (err) {
    console.error("error connecting: ", err.stack);
    return;
  }
  console.log("Connected. Thread ID: ", db.threadId);
});

module.exports = db;