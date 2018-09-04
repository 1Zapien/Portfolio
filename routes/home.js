exports.view = function(req, res) {
  res.render("home", {
    title: "Projects",
    nav: "About",
    link: "about"
  });
};