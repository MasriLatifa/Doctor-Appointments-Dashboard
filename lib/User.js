var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
    name: { type: String, unique: true },
    password: { type: String },
    phone: { type: String },
    email: { type: String }

});
var User = mongoose.model('user', userSchema);
module.exports = User;