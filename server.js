const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT);