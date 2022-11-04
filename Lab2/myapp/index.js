const express = require('express')
const controllers = require('./src/AppControler')
const app = express()
const port = 8080

controllers.map(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})