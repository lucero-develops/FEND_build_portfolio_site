'use strict';

module.exports = function (grunt){

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		responsive_images:{
			options:{},
      files:{
        expand: true,
        cwd: 'images/',
        src: ['*.jpg'],
        dest: 'images/'
      }
		}

	});

	grunt.loadNpmTasks('grunt-responsive-images');

	grunt.registerTask("default", ['responsive_images']);
};