const express = require("express");
const app = express();
var parser   = require("body-parser");
var mongoose = require("./db/connection");
const path = require('path')
const End = require("./db/connection.js").End;
const Framework = require("./db/connection.js").Framework;
const Comment = require("./db/connection.js").Comment;


app.listen(4000, () => {
  console.log("app listening on port 4000");
});

app.use("/assets", express.static("public"));
app.use(parser.json({extended: true}));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

// Route to access ends index
app.get("/api/ends", (req, res) => {
	End.find({}).then(function(ends){
    res.json(ends);
    })
	});

  app.get("/api/ends/:type", (req, res) => {
  	End.findOne({type: req.params.type}).then(function(end){
      res.json(end);
      })
  	});



    app.get("/api/ends/:type/frameworks/:title", (req, res) => {
      	End.findOne({type: req.params.type}, function(err, end){
          let framework = end.frameworks.find((framework) => {
            return framework.title === req.params.title
          })
          res.json(framework)
        })
      })

      app.post("/api/ends/:type/frameworks/:title", function(req, res){
      Comment.create(req.body).then(function(comment){
      res.json(comment)
      })
    });


      app.get("/api/ends/:type/frameworks/:title/comments", (req, res) => {
        	End.findOne({type: req.params.type}, function(err, end){
            let framework = end.frameworks.find((framework) => {
              return framework.title === req.params.title
            })
            res.json(framework.comments)
          })
        })
