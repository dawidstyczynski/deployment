const express = require('express')
const app = express()
const port = 8080 

function mapHome(app) {
  app.get("/", (req, res) => {
    res.send("Welcome!");
  });
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})