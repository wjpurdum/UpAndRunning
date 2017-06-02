var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/UpAndRunning');
var db = mongoose.connection;

var Schema = mongoose.Schema;


var FrameworkSchema = new Schema({
  title: String,
  summary: String,
  language: String,
  languageSite: String,
  docs: String,
  npm: String,
  cdn: String,
  bower: String,
  website: String,
  latest: String,
  github: String,
  twitter: String,
  assistance: String,
  maintainers: String,
  image: String
});

var EndSchema = new Schema({
  type: String,
  frameworks: [FrameworkSchema]
});

var CommentSchema = new Schema({
  body: String,
  username: String
  });

var End = mongoose.model("End", EndSchema);
var Framework = mongoose.model("Framework", FrameworkSchema);
var Comment = mongoose.model("Comment", CommentSchema);


db.on('error', function(err){
  console.log(err);
});

db.once('open', function() {
  console.log("Connected to MongoDB!");

});

module.exports ={
  End: End,
  Framework: Framework,
  Comment: Comment
};
