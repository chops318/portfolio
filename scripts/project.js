var projects = [];

function Project (opts) {
  this.company = opts.company;
  this.technologies = opts.technologies;
  this.publishedOn = opts.publishedOn;
  this.body = opts.body;
}

Project.prototype.toHtml = function() {
  var projectTemplate = $('#myProjects').html();
  var compileTemplate = Handlebars.compile(projectTemplate);
  var html = compileTemplate(this);

  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
  this.publishStatus = this.publishedOn ? 'published' + this.daysAgo + ' days ago' : '(draft)';
  $('#projects').append(html);
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
