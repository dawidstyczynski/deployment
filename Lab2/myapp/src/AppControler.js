exports.map = function(app){
    mapHome(app)
}

function mapHome(app) {
    app.get("/", (req, res) => {
      res.send("Welcome!");
    });
  }
  
function mapConcat(app) {
    app.get("/:val1/:val2", (req, res) => {
  
      res.send(req.params.val1.toString() +  req.params.val2.toString());
    });
  }