const client = require("./connection.js");
const express = require("express");
const app = express();

// const bodyParser = require("body-parser");
// app.use(bodyParser.json());

// client.connect();

client.connect(function (err) {
  if (err) throw err;
  console.log("Connected1!");
});

//where mispar=${x}
app.get("/users/:table", (req, res) => {
  const x = 3;
  client.query(`select * from ${req.params.table}  `, (err, result) => {
    if (!err) {
      res.send(result.rows);
    }
  });
  client.end;
});

//where salary=${req.params.id}

app.get("/test/:id", (req, res) => {
  const x = req.params.id;
  client.query(`SELECT * FROM employ1 WHERE salary=${x}`, (err, result) => {
    if (!err) {
      res.send(result.rows);
    }
  });
});
// app.post("/users", (req, res) => {
//   const user = req.body;
//   let insertQuery = `insert into users(id, firstname, lastname, location)
//                      values(${user.id}, '${user.firstname}', '${user.lastname}', '${user.location}')`;

//   client.query(insertQuery, (err, result) => {
//     if (!err) {
//       res.send("Insertion was successful");
//     } else {
//       console.log(err.message);
//     }
//   });
//   client.end();
// });

app.listen(3300, () => {
  console.log("Sever is now listening at port 3300");
});
