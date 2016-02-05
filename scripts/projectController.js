(function(module) {
  var projectController = {};

  projectController.index = function() {
    Project.fetchAll(projectView.initIndexPage);
  };

  module.projectController = projectController;
})(window);
