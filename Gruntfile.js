module.exports = function(grunt) {

	var mozjpeg = require('imagemin-mozjpeg');

	grunt.initConfig({

		watch: {
			options: {
				livereload: true
			},
			todos: {
				files: ['**']
			}
		},

		copy: {
			projeto: {
				expand: true,
				cwd: 'site',
				src: '**',
				dest: 'dist'
			}
		},

		clean: ['dist'],

		useminPrepare: {
			html: ['dist/**/*.html']
		},

		usemin: {
			html: ['dist/**/*.html']
		},

		uglify: {
			main: {
				expand: true,
				cwd: 'dist/',
				src: '**/*.js',
				dest: 'dist/'
			}
		},

		cssmin: {
			main: {
				expand: true,
				cwd: 'dist/',
				src: '**/*.css',
				dest: 'dist/'
			}
		},

	 	imagemin: {                          // Task
		    static: {                          // Target
				options: {                       // Target options
					optimizationLevel: 7
				},
		    },
		    dynamic: {                         // Another target
				files: [{
					expand: true,                  // Enable dynamic expansion
					cwd: 'dist/img',                   // Src matches are relative to this path
					src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
					dest: 'dist/img'                  // Destination path prefix
				}]
		    }
	  	}

	});

	grunt.registerTask('run', ['watch']);
	grunt.registerTask('minify', ['useminPrepare', 'usemin', 'concat', 'uglify', 'cssmin', 'imagemin']);
	grunt.registerTask('default', ['clean', 'copy', 'minify']);

	// carregando das tasks
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-usemin');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
}


