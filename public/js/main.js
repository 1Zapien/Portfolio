$(window).on("load", function() {
  $(".post-module").hover(function() {
    $(this)
      .find(".description")
      .stop()
      .animate(
        {
          height: "toggle",
          opacity: "toggle"
        },
        300
      );
  });
});

var path = location.pathname; // ex: '/profile';

$(function() {
  var current = location.pathname;
  $(".navvar a").each(function() {
    var $this = $(this);
    // if the current path is like this link, make it active
    if ($this.attr("id") == current) {
      // $this.removeClass();
      $this.addClass("active");
      return;
    }
  });
});
