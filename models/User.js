let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let passportLocalMongoose = require('passport-local-mongoose');
let UserSchema = new Schema({
    username: String,
    password: String
});
UserSchema.plugin(passportLocalMongoose);
mongoose.model('User', UserSchema);