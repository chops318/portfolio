(function(module){
  var projectView = {};

projectView.handleMainNav = function() {
  $('.main-nav').on('click', '.tab', function(e) {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn();
  });

  $('.main-nav .tab:first').click(); // Let's now trigger a click on the first .tab element, to set up the page.
};


projectView.menuSlide = function () {
  $('.menuActivate').on('click', function(e) {
    e.preventDefault();
    $('.main-nav ul').toggle(350);
  });
};
projectView.setTeasers = function() {
  $('.article-body *:nth-of-type(n+2)').hide(); // Hide elements beyond the first 2 in any artcile body.

  $('#articles').on('click', 'a.read-on', function(e) {
    e.preventDefault();
    $(this).parent().find('*').fadeIn();
    $(this).hide();
  });
};

projectView.initIndexPage = function() {
  Project.all.forEach(function(p) {
    $('#projects').append(p.toHtml());
  });
};

projectView.slickSlider = function() {
  $('.projects').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll, 3
  })
}

$(document).ready(function() {
  projectView.handleMainNav();
  projectView.setTeasers();
  projectView.menuSlide();
  projectView.slickSlider();
});
module.projectView = projectView;
})(window);
