const express = require('express');
const controller = require('./src/AppControler');
let appInsights = require("applicationinsights");
const app = express();
const port = 8080;

const connString = 'InstrumentationKey=583eec4b-b836-4406-8976-bce38ccab47c;IngestionEndpoint=https://northeurope-3.in.applicationinsights.azure.com/;LiveEndpoint=https://northeurope.livediagnostics.monitor.azure.com/';
appInsights.setup(connString).start();

controller.map(app);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})