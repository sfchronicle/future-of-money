module.exports = function(grunt) {
  
  grunt.initConfig({
	  processhtml: {
	    dist: {
	      files: {
	        'build/wcm.html': ['build/index.html']
	      }
	    }
	  },
    htmlmin: {                                     
      dist: {                                      
        options: {   
          collapseWhitespace: true
        },
        files: {                                  
          'build/wcm.html': 'build/wcm.html'
        }
      }
    }
	});

  grunt.registerTask("content", "Load content from data files", ["state", "json", "csv", "markdown"]);
  grunt.registerTask("template", "Build HTML from content/templates", ["content", "build"]);
  grunt.registerTask("static", "Build all files", ["copy", "bundle", "less", "template"]);
  grunt.registerTask("wcm", ["clean", "static", "processhtml", "htmlmin"]);
  grunt.registerTask("default", ["clean", "static", "connect:dev", "watch"]);

  //load tasks
  grunt.loadTasks("./tasks");
  grunt.loadNpmTasks('grunt-processhtml');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

};
