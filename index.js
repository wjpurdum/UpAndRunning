const express = require("express");
const app = express();
const parser   = require("body-parser");
var mongoose = require("./db/connection");
const path = require('path')
const End = require("./db/connection.js").End;
const Framework = require("./db/connection.js").Framework;
const Comment = require("./db/connection.js").Comment;
app.set("port", process.env.PORT || 8080)
var db;

// Mongo Connection
// mongodb.MongoClient.connect(process.env.MONGODB_URI, function (err, database) {
//   if (err) {
//     console.log(err);
//     process.exit(1);
//   }
//
//   db = database;
//   console.log("Database connected");
//
//   var server = app.listen(process.env.PORT || 8080, function () {
//     var port = server.address().port;
//     console.log("App now running on port", port);
//   });
// });


app.listen(app.get("port"), ()=> {
  console.log("deployed!")
});



app.use("/assets", express.static("public"));
app.use(parser.json({extended: true}));


// Allows you to have index.html as root view
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});



// Route to access ends index
app.get("/api/ends", (req, res) => {
	End.find({}).then(function(ends){
    res.json(ends);
    })
	});

// Render End
app.get("/api/ends/:type", (req, res) => {
  End.findOne({type: req.params.type}).then(function(end){
    res.json(end);
      })
  	});

  // Render framework
  app.get("/api/ends/:type/frameworks/:title", (req, res) => {
      End.findOne({type: req.params.type}, function(err, end){
        let framework = end.frameworks.find((framework) => {
          return framework.title === req.params.title
        })
        res.json(framework)
      })
    })

      // Create comment
      app.post("/api/ends/:type/frameworks/:title/comments", function(req, res){
      End.findOne({type: req.params.type}).then(function(end){
        let framework = end.frameworks.find((framework)=> {
          return framework.title == req.params.title
        })
        framework.comments.push({link: req.body.link, username: req.body.username})
        end.save().then(function(end) {
          res.json(end)
        })
      })
    })

    // Delete Comment
    app.delete("/api/ends/:type/frameworks/:title/comments/:link", (req, res)=> {
      End.findOne({type: req.params.type}).then(function(end){
        let framework = end.frameworks.find((framework)=> {
          return framework.title == req.params.title
        })
        let comment = framework.comments.find((comment)=>{
          return comment.link == req.params.link
        })
          for (let i = 0; i < framework.comments.length; i++) {
            if (framework.comments[i].link == comment.link) {
              framework.comments.splice(i, 1)
              }
            }
            end.save().then(function() {
              res.json({success:true})
          })
        })
      })
