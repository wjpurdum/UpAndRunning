var cool = require('cool-ascii-faces');
const express = require("express");
const app = express();
var parser   = require("body-parser");
var mongoose = require("./db/connection");
var passport = require ('passport')
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

  // Delete Comment
//   app.delete("/api/ends/:type/frameworks/:title", (req, res) => {
// 	End.findOne({type: req.params.type}).then(function(end){
// 		let framework = end.frameworks.find((framework) => {
// 			return framework.title === req.params.title
// 		});
// 		for(let i=0; i < end.frameworks.commments.length; i++){
// 			if(user.accounts[i].id == account.id){
// 				user.accounts.splice(i, 1)
// 			}
// 		}
// 		user.current_funds = user.current_funds + account.current_amount;
// 		user.save().then(function(){
// 				res.json({success: true})
// 		});
// 	});
// });


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
