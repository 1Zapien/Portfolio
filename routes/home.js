var data = require("../projects-data.json");

exports.view = function(req, res) {
  res.render("home", {
    data,
    title: "Projects",
    nav: "About",
    link: "about"
  });
};

