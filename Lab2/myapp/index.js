const express = require('express');
const controller = require('./src/AppControler');
import { ApplicationInsights } from '@microsoft/applicationinsights-web'
const app = express();
const port = 8080;

const connString = 'InstrumentationKey=583eec4b-b836-4406-8976-bce38ccab47c;IngestionEndpoint=https://northeurope-3.in.applicationinsights.azure.com/;LiveEndpoint=https://northeurope.livediagnostics.monitor.azure.com/'
const appInsights = new ApplicationInsights({ config: {
  connectionString: connString
} });

appInsights.loadAppInsights();
appInsights.trackPageView(); 
controller.map(app);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})