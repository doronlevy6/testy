const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs'); //את זה צריך רק בשביל הפעולה
//hbs.registerPartials
// עד עכשיו הספיק לנו שייבאנו את החבילה לנוד מודלBUG??

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');
// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'Andrew Mead',
  });
});

app.get('/doron', (req, res) => {
  res.send('<h1>doron</h1>');
});
app.get('/avinoam', (req, res) => {
  res.render('avinoam', {
    title: 'yeled',
    name: 'Avinoam-yakar',
  });
});
//
app.get('/products', (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: 'You must provide a search term',
    });
  }

  console.log(req.query.search);
  console.log(req.query);
  res.send({
    products: [req.query.rate],
  });
});

app.listen(3001, () => {
  console.log('Server is up on port 3001.');
});
