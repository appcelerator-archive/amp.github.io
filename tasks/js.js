module.exports = function(grunt) {
	grunt.config('concat.js', {
		files : {
			'docs/static/js/core-home.js' : [
				'assets/js/core-home.js'
			],
			'docs/static/js/docs.js' : [
				'assets/js/docs.js'
			],
            'docs/static/js/guides.js' : [
                'assets/js/guides.js'
            ]
		}
	});

	grunt.config('watch.js', {
		files: [
			'assets/**/*.js',
			'libs/**/*.js'
		],
		tasks: ['js']
	});

	grunt.registerTask('js', ['concat:js']);
};
