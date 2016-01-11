var projects = [];

function Project (opts) {
  this.author = opts.author;
  this.company = opts.company;
  this.technologies = opts.technologies;
  this.body = opts.body;
}

Project.prototype.toHtml = function() {
  var $newArticle = $('article.template').clone();
  $newArticle.removeClass('template');
  $newArticle.find('h1:first').html(this.company);
  $newArticle.find('.technologies').html(this.technologies)
  $newArticle.find('.article-body').html(this.body);
  $newArticle.find('time[pubdate]').attr('datetime', this.publishedOn)
  $newArticle.find('time[pubdate]').attr('title', this.publishedOn)
  $newArticle.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago')
  $newArticle.append('<hr>');
  return $newArticle;
}

projData.sort(function(a,b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

projData.forEach(function(ele) {
  projects.push(new Project(ele));
})

projects.forEach(function(a){
  $('#articles').append(a.toHtml())
});
