var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/UpAndRunning');
var db = mongoose.connection;

db.on('error', function(err){
  console.log(err);
});

db.once('open', function() {
  console.log("Connected to MongoDB!");

});
