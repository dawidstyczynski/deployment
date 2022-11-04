exports.map = function(app){
    mapHome(app)
}

function mapHome(app) {
    app.get("/", (req, res) => {
      res.send("Welcome!");
    });
  }