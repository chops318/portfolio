(function(module){
function Project (opts) {
  this.company = opts.company;
  this.technologies = opts.technologies;
  this.publishedOn = opts.publishedOn;
  this.info = opts.info;
  this.image = opts.image;
}
Project.all = [];

Project.prototype.toHtml = function() {
  var projectTemplate = $('#myProjects').html();
  var compileTemplate = Handlebars.compile(projectTemplate);
  var html = compileTemplate(this);

  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
  this.publishStatus = this.publishedOn ? 'published' + this.daysAgo + ' days ago' : '(draft)';
  $('#projects').append(html);
};

Project.loadAll = function(projData) {
  projData.forEach(function(ele){
    Project.all.push(new Project(ele));
  });
};
Project.fetchAll = function() {
  $.ajax({
    dataType: 'json',
    url: '../data/projects.JSON',
    success: function(data, status, xhr) {
      if(localStorage.tagme == xhr.getResponseHeader('ETag')){
        //console.log(localStorage.projData)
        Project.loadAll(JSON.parse(localStorage.projData));
        projectView.initIndexPage();
        console.log('Match');
      } else {
        localStorage.tagme = xhr.getResponseHeader('ETag');
        $.getJSON('../data/projects.JSON', function(projData){
          Project.loadAll(projData);
          localStorage.projData = JSON.stringify(projData);
          projectView.initIndexPage();
        });
        console.log('No Match');
      }
    }
  });
};

module.Project = Project;

})(window);
