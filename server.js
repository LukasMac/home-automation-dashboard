const express = require('express');
const app = express();
const port = 8081;

app.get('/healthCheck', function(req,res) {
  res.status(200).send('I\'m healthy papa!')
})

app.use('/', express.static('dist'));
app.get('*', (rqe, res) => res.sendFile(path.resolve(path.join(__dirname, 'dist/index.html'))))

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
