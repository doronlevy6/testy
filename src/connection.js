const { Client } = require("pg");
const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "testing",
  password: "0000",
  port: 5432,
});

// client.query(
//   "INSERT INTO employyyy (Name, Salary) VALUES ('Jerry', 40), ('George', 50)",
//   (err, res) => {
//     console.log(err, res);
//     client.end();
//   }
// );
module.exports = client;
