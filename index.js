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

      // app.post("/api/ends/:type/frameworks/:title/comments", function(req, res){
      //   End.findOne({type: req.params.type}.then(function(err, end){
      //     let framework = end.frameworks.find((framework)=> {
      //       return framework.title = req.params.title
      //       Comment.create({link: req.body.link, username: req.body.username}).then(function(comment){
      //         framework.comments.push(comment)
      //         framework.comments.save(function(framework){
      //           res.json(comment)
      //           console.log(framework)
      //         })
      //       })
      //     }))
      //   })
      // })

      // app.post("/api/ends/:type/frameworks/:title/comments", function(req, res){
      //   End.findOne({type: req.params.type}, (function(err, end){
      //     let framework = end.frameworks.find((framework)=> {
      //       return framework.title = req.params.title
      //       Comment.create({link: req.body.link, username: req.body.username}).then(function(comment){
      //         framework.comments.push(comment)
      //         framework.comments.save(function(comment){
      //           res.json(comment)
      //           console.log(comment)
      //         })
      //       })
      //     })
      //   }))
      // })

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




      app.get("/api/ends/:type/frameworks/:title/comments", (req, res) => {
        	End.findOne({type: req.params.type}, function(err, end){
            let framework = end.frameworks.find((framework) => {
              return framework.title === req.params.title
            })
            res.json(framework.comments)
          })
        })

        // app.get("/api/ends/:type/frameworks/:title/comments/:id", (req, res) => {
        //     Framework.findOne({title: req.params.type}), function(err, framework){
        //       let comments = framework.comments.find
        //       for (var i = 0; i<framework.comments.length; i++) {
        //         if framework.comments[i].id === req.params.id {
        //           res.json(framework.comments[i])
        //         }
        //       }
        //     }
          //   Comment.findOne({id: req.params.id}, function(err, end){
          //     let framework = end.frameworks.find((framework) => {
          //       return framework.title === req.params.title
          //     })
          //     res.json(framework.comments)
          //   })
          // })
