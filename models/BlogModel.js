let mongoose = require('mongoose'),
  Schema = mongoose.Schema;

let BlogSchema = new Schema({
  name: String,
  brief: String
});

mongoose.model('Blogs', BlogSchema);
