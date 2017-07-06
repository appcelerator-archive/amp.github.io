module.exports = function(grunt) {
	grunt.config('connect.dev-server', {
		options: {
			port: 6060,
			hostname: '*',
			base: 'docs',
			livereload: 36060,
			open: true
		}
	});

	grunt.config('connect.server', {
		options: {
			port: 6060,
			hostname: '*',
			base: 'docs',
                        keepalive: true,
			open: true
		}
	});

	grunt.config('watch.livereload', {
		options: {
			debounceDelay: 250,
			livereload: 36060
		},
		files: 'docs/**/*'
	});

	// This fails with stack exceeded for me...
	grunt.registerTask('dev-server', ['default', 'connect:dev-server', 'watch']);
	grunt.registerTask('server', ['default', 'connect:server']);
};
