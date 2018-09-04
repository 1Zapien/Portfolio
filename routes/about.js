exports.view = function(req, res) {
  res.render("about", {
    title: "About",
    nav: "Projects",
    link: "/"
  });
};


