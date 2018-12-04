const express = require('express');
const request = require('request');
require('dotenv').load();
const app = express();
const port = 8081;
const path = require("path");

app.get('/healthCheck', function(req,res) {
  res.status(200).send('I\'m healthy papa!')
})
app.get('/realtimedepartures', (req, res) => {
  const newurl = "http://api.sl.se/api2/realtimedeparturesv4.json?key=" + process.env.TRAFIK_LAB_KEY + "&siteid=1552&timewindow=20";
  return request
    .get(newurl)
    .on('response', function(response) {
      response.headers['Access-Control-Allow-Origin'] = '*';
    }).pipe(res);
});

app.use('/', express.static('dist'));
app.get('*', (req, res) => res.sendFile(path.resolve(path.join(__dirname, 'dist/index.html'))))

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
