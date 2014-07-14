module.exports = function(grunt) {

	grunt.initConfig({
		'connect': {
			demo: {
				options: {
					open: true,
					keepalive: true
				}
			}
		},
		'gh-pages': {
			options: {
				clone: 'bower_components/input-password'
			},
			src: [
			'bower_components/**/*',
			'!bower_components/input-password/**/*',
			'demo/**/*', 'src/**/*', 'index.html', 'preview.png'
			]
		},
		'replace': {
			example: {
				src: ['src/*'],
				dest: 'dist/',
				replacements: [{
					from: 'bower_components',
					to: '..'
				}]
			}
		},
		'push': {
			options: {
				files: ['package.json', 'bower.json'],
				updateConfigs: [],
				push: {
					releaseBranch: ['develop', 'master']
				},
				add: true,
				addFiles: ['.'],
				commit: true,
				commitMessage: 'Release %VERSION%',
				commitFiles: ['-a'],
				createTag: true,
				tagName: '%VERSION%',
				tagMessage: 'Version %VERSION%',
				push: true,
				pushTo: 'origin',
				npm: true,
				npmTag: 'Release %VERSION%',
				gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d'
			}
		},
		'uglify': {
			dist: {
				files: {
					'dist/input-password.js': 'src/input-password.js'
				}
			}
		},
		'cssmin': {
			dist: {
				files: {
					'dist/input-password.css': 'src/input-password.css'
				}
			}
		},
		'htmlmin': {
			dist: {
				options: {
					removeComments: true,
					removeCommentsFromCDATA: true,
					removeCDATASectionsFromCDATA: true,
					collapseWhitespace: true,
					conservativeCollapse: true
				},
				files: {
					'dist/input-password.html': 'src/input-password.html'
				}
			}
		}
	});

grunt.loadNpmTasks('grunt-contrib-connect');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-htmlmin');
grunt.loadNpmTasks('grunt-gh-pages');
grunt.loadNpmTasks('grunt-text-replace');
grunt.loadNpmTasks('grunt-push-release');

grunt.registerTask('build',  ['replace', 'uglify', 'cssmin', 'htmlmin']);
grunt.registerTask('deploy', ['gh-pages']);
grunt.registerTask('serve', ['connect']);

};
