(function(module) {
  var repoView = {};

  var ui = function() {
    var $about = $('#about');

    $about.find('ul').empty();
    $about.show().siblings().hide();
  };

  var render = function(repo) {
    return '<li><a href="'+repo.html_url + '">' + repo.name + '</a>' ;
  };

  repoView.index = function() {
    ui();

    $('#github ul').append(
      repos.with('name').map(render)
    );
  };

  module.repoView = repoView;
})(window);
