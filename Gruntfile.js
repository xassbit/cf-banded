module.exports = function (grunt) {
    'use strict';
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
        sass: {
          dist: {
            options: {
              style: 'compressed'
            },
            files: {
              './lib/cf-banded.min.css': './src/scss/cf-banded.scss'
            }
          },
          dev: {
            options: {
              style: 'expanded'
            },
            files: {
              './lib/cf-banded.css': './src/scss/cf-banded.scss'
            }
          }
        },
        browserify: {
          dist: {
            files: {
              'lib/cf-banded.js': 'src/js/main.js'
            }
          }
        },
        uglify: {
            dist: {
                files: {
                    'lib/cf-banded.min.js': 'lib/cf-banded.js'
                }
            }
        },
        watch: {
			css: {
				files: ['src/scss/*.scss', 'src/js/*.js'],
				tasks: ['sass', 'browserify', 'uglify']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default', ['sass', 'browserify', 'uglify']);
};
