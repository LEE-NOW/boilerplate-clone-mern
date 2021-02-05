const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: { type: String, maxlength: 50 },
  email: { type: String, trim: true, unique: 1 },
  password: {
    type: String,
    minlength: 5,
  },
  lastname: { type: String, maxlength: 50 },
  role: { type: Number, default: 0 },
  token: { type: String },
  tokenExp: { type: Number },
});
// mongodb의 userSchema 모델

const User = mongoose.model('User', userSchema);
// 첫 param은 만드려는 콜랙션의 이름
// userSchema를 User콜랙션에 넣고, User객체에 userSchema를 User객체에 넣는다.

module.exports = { User };
// User객체를 exports 한다.
