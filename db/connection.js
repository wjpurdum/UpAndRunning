var mongoose = require("mongoose");

if(process.env.NODE_ENV == "production"){
mongoose.connect(process.env.MONGOLAB_URL);
 }else{
  mongoose.connect("mongodb://localhost/UpAndRunning");
 }

// mongoose.connect('mongodb://localhost/UpAndRunning');

var db = mongoose.connection;
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
  link: String,
  username: String
  });

var FrameworkSchema = new Schema({
  hook: String,
  title: String,
  summary: String,
  notable: String,
  language: String,
  languageSite: String,
  docs: String,
  npm: String,
  cdn: String,
  bower: String,
  github: String,
  twitter: String,
  assistance: String,
  maintainers: String,
  image: String,
  comments: [CommentSchema]
});

var EndSchema = new Schema({
  type: String,
  description: String,
  icon: String,
  data: [{
    name: String,
    number: Number,
  }],
  frameworks: [FrameworkSchema]
});

const End = mongoose.model("End", EndSchema);
const Framework = mongoose.model("Framework", FrameworkSchema);
const Comment = mongoose.model("Comment", CommentSchema);

db.on('error', function(err){
  console.log(err);
});

db.once('open', function() {
  console.log("Connected to MongoDB!");

});

module.exports = {
  End: End,
  Framework: Framework,
  Comment: Comment
};
