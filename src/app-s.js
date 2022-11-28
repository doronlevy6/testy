const express = require("express");
const path = require("path");
const app = express();

const publicDirectoryPath = path.join(__dirname, "../public");
app.set("view engine", "hbs");

app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.send({
    forecast: "It is snowing",
    location: "Philadelphia",
  });
});
app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "Andrew Mead",
  });
});

app.get("/doron", (req, res) => {
  res.send("<h1>doron</h1>");
});

app.listen(3001, () => {
  console.log("Server is up on port 3001.");
});
