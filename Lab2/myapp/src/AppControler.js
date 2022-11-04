var stringControler = require('./StringModule')
exports.map = function(app){
    mapHome(app);
    mapConcat(app);
}

function mapHome(app) {
    app.get("/", (req, res) => {
      res.send("elo elo!");
    });
  }
  
function mapConcat(app) {
    app.get("/:val1/:val2", (req, res) => {
      value = stringControler.concat(req.params.val1,req.params.val2)
      res.send('Concated Params: ' + value);
    });
  }