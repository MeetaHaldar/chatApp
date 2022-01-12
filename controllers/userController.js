const User = require("../models/user");
exports.login = function () {};

exports.logout = function () {};

exports.register = function (req, res) {
var user = new User(req.body)
user.register;

  res.send("thanks for trying to register");
};

exports.home = function (req, res) {
  res.render("home-guest");
};
