var mongoose = require("mongoose");

// Choose connection - accessing through Heroku or through local database?
if(process.env.NODE_ENV == "production"){
mongoose.connect(process.env.MONGOLAB_URL);
 }else{
  mongoose.connect("mongodb://localhost/UpAndRunning");
 }

// mongoose.connect('mongodb://localhost/UpAndRunning');

var db = mongoose.connection;
var Schema = mongoose.Schema;

// Comment Schema
var CommentSchema = new Schema({
  link: String,
  username: String
  });

// Framework Schema:
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

// End Schema
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

// Create Mongoose models using schema. Save them to constant variables.
const End = mongoose.model("End", EndSchema);
const Framework = mongoose.model("Framework", FrameworkSchema);
const Comment = mongoose.model("Comment", CommentSchema);

db.on('error', function(err){
  console.log(err);
});

db.once('open', function() {
  console.log("Connected to MongoDB!");

});

// Export the models to be used where required
module.exports = {
  End: End,
  Framework: Framework,
  Comment: Comment
};
