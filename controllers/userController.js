const User = require("../models/user");
exports.login = function () {};

exports.logout = function () {};

exports.register = function (req, res) {
var user = new User()
var user2 = new User()
user.homePlanet
user2.homePlanet
  res.send("thanks for trying to register");
};

exports.home = function (req, res) {
  res.render("home-guest");
};
