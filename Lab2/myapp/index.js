const express = require('express');
const controller = require('./src/AppControler');
const app = express();
const port = 8080;


controller.map(app);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})