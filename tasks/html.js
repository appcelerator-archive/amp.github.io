var path = require('path'),
	docs = require('../data/docs');

function rename (dest, src) {
	var basename = path.basename(src, path.extname(src));

	if (basename === "index") {
		basename = "";
	}

	return path.join(dest, path.dirname(src), basename, 'index.html');
}

module.exports = function(grunt) {
	grunt.config('assemble', {
		'options' : {
			partials   : 'pages/partials/**/*.hbs',
			layoutdir  : 'pages/layout',
			helpers    : 'pages/helpers/**/*.js',
			marked     : { sanitize: false }
		},
		'dev' : {
			options : {
				docs : docs('doc', 'dev'),
                guides: docs('guides', 'dev')
			},
			files: [{
				expand : true,
				rename : rename,
				dest   : 'docs',
				cwd    : 'pages/dev',
				src    : '**/*.{hbs,md}'
			}]
		},
		'devops' : {
			options : {
				docs : docs('doc', 'devops'),
                guides: docs('guides', 'devops')
			},
			files: [{
				expand : true,
				rename : rename,
				dest   : 'docs/devops',
				cwd    : 'pages/devops',
				src    : '**/*.hbs'
			}]
		}
	});

	grunt.registerTask('html', [
		'assemble:dev',
		'assemble:devops'
	]);

	grunt.config('watch.html-dev', {
		files: ['{pages,doc/dev}/**/*.{hbs,json,md,js}'],
		tasks: ['assemble:dev']
	});

	grunt.config('watch.html-devops', {
		files: ['{pages,doc/devops}/**/*.{hbs,json,md,js}'],
		tasks: ['assemble:devops']
	});
};
