const express = require('express')
const app = express()
const port = 80
const controllers = require('./src/AppControler')

controllers.map(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})