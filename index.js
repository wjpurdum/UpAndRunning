const cool = require('cool-ascii-faces');
const express = require("express");
const app = express();
const parser   = require("body-parser");
var mongoose = require("./db/connection");
const passport = require ('passport')
const path = require('path')
const End = require("./db/connection.js").End;
const Framework = require("./db/connection.js").Framework;
const Comment = require("./db/connection.js").Comment;


app.listen(4000, () => {
  console.log("app listening on port 4000");
});

app.use("/assets", express.static("public"));
app.use(parser.json({extended: true}));
app.use(passport.initialize());
app.use(passport.session());

// Allows you to have index.html as root view
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/cool', function(request, response) {
  response.send(cool());
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

    // delete comment
    app.delete("/api/ends/:type/frameworks/:title/comments/:username", (req, res)=> {
      var username = req.body.username
      End.findOne({type: req.params.type}, function(err, end){
        let framework = end.framework.find((framework)=> {
          return framework.title === req.params.title
        })
        // Alter this so it takes into account the username
          for (let i=0; i<framework.comments.length; i++){
            if (framework.comments[i].username===username){
              framework.comments.splice(i, 1)
              end.save().then(function(end){
                res.json(end)
              })
            }
          }
      })
    })

      // To render JSON for a framework's comments
      app.get("/api/ends/:type/frameworks/:title/comments/", (req, res) => {
        	End.findOne({type: req.params.type}, function(err, end){
            let framework = end.frameworks.find((framework) => {
              return framework.title === req.params.title
            })
            res.json(framework.comments)
          })
        })

      // To render JSON for a single comment
      app.get("/api/ends/:type/frameworks/:title/comments/:username", (req, res) => {
          End.findOne({type: req.params.type}, function(err, end){
            let framework = end.frameworks.find((framework) => {
              return framework.title === req.params.title
            })
            let comment = framework.comments.find((comment)=>{
              return comment.username = req.params.username
            })
            res.json(comment)
          })
        })
