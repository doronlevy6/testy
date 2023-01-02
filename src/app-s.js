const express = require("express");
const path = require("path");
const client = require("./connection.js");
const hbs = require("hbs"); //את זה צריך רק בשביל הפעולה
//hbs.registerPartials
// עד עכשיו הספיק לנו שייבאנו את החבילה לנוד מודלBUG??

const app = express();

// Define paths for Express config

const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    name: "Levy",
    function: "Famaly",
  });
});

app.get("/doron", (req, res) => {
  res.send({
    name: "doron",
    function: "aba",
  });
});
app.get("/meir", (req, res) => {
  client.query(`SELECT pictureurl FROM employ1 WHERE idd=4`, (err, result) => {
    if (!err) {
      res.send({
        name: "meir",
        function: "a" + result.fields,
      });
    }
  });
});

app.get("/avinoam", (req, res) => {
  res.send({
    name: "avinoam",
    function: "yeled3",
  });
});
app.get("/yehuda", (req, res) => {
  console.log("aaaa");
  res.send({
    name: "yehuda",
    function: "yeled1",
  });
});

//
app.get("/products", (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: "You must provide a search term",
    });
  }

  console.log(req.query.search);
  console.log(req.query);
  res.send({
    products: [req.query.rate],
  });
});
///////////////
//new endpoints

const bodyParser = require("body-parser");
app.use(bodyParser.json());

client.connect(function (err) {
  if (err) throw err;
  console.log("Connected to postgresss!");
});

app.get("/employ1", (req, res) => {
  client.query(`select * from employ1  `, (err, result) => {
    if (!err) {
      res.send(result.rows);
    }
  });
  client.end;
});

app.post("/employ1", (req, res) => {
  const user = req.body;
  console.log(req.body);
  let insertQuery = `insert into employ1(idd, name, salary) values(${user.idd}, '${user.name}', '${user.salary}')`;

  client.query(insertQuery, (err, result) => {
    if (!err) {
      res.send("Insertion was successful");
    } else {
      console.log(err.message);
    }
  });
  client.end;
});
//where mispar=${x}
app.get("/users/:table", (req, res) => {
  client.query(`select * from ${req.params.table}  `, (err, result) => {
    if (!err) {
      res.send(result.rows);
    }
  });
  client.end;
});

//where salary=${req.params.id}

app.get("/test/:id", (req, res) => {
  const x = 2;
  client.query(`SELECT * FROM employ1 WHERE idd=${x}`, (err, result) => {
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
console.log("2222");
app.listen(80, () => {
  console.log("Server is up on port 80.");
});
