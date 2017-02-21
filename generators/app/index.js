'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = Generator.extend({
	prompting: function () {
		// Have Yeoman greet the user.
		this.log(yosay('Welcome to the ' + chalk.yellow('easyemail') + ' generator!'));

		var prompts = [{

			type: 'input',
			name: 'name',
			message: 'Whats the name of your project going to be?',
			default: this.appname
			// }, {
			// 	type: 'list',
			// 	name: 'styles',
			// 	message: 'What CSS framework would you like to use?',
			// 	choices: [{
			// 		name: 'CSS',
			// 		value: 'includeCss'
			// 	}, {
			// 		name: 'Sass',
			// 		value: 'includeSass',
			// 	}, {
			// 		name: 'Less',
			// 		value: 'includeLess',
			// 	}, {
			// 		name: 'Scss',
			// 		value: 'includeScss',
			// 	}]
			// }
						}];

		return this.prompt(prompts)
			.then(function (answers) {
				// To access users configs later use this.answers.prop;
				this.answers = answers;


			}.bind(this));
	},

	// Application Logic

	config: function () {
		// Config Files
		this
			.fs
			.copyTpl(this.templatePath('_package.json'), this.destinationPath('package.json'), {


				name: this.answers.name

			})


		this
			.fs
			.copyTpl(this.templatePath('_.gitignore'), this.destinationPath('.gitignore'));

	},


	// Application Files
	app: function () {

		this
			.fs
			.copy(this.templatePath('_index.js'), this.destinationPath('index.js'));

		// HTML

		this.fs
			.copyTpl(this.templatePath('_src/_index.html'), this.destinationPath('src/index.html'), {
				name: this.answers.name
			})

		this.fs.copy(this.templatePath('_gulpfile.js'), this.destinationPath('gulpfile.js'));

		// CSS Framework - BASE
		// if (this.answers.styles === 'includeScss') {

		this
			.fs
			.copyTpl(this.templatePath('_src/_styles/_main.scss'), this.destinationPath('src/styles/main.scss'));
		this
			.fs
			.copyTpl(this.templatePath('_src/_styles/_framework/_base/_font-styles.scss'), this.destinationPath('src/styles/framework/base/_font-styles.scss'));
		this
			.fs
			.copyTpl(this.templatePath('_src/_styles/_framework/_base/_global-styles.scss'), this.destinationPath('src/styles/framework/base/_global-styles.scss'));
		this
			.fs
			.copyTpl(this.templatePath('_src/_styles/_framework/_base/_layout.scss'), this.destinationPath('src/styles/framework/base/_layout.scss'));
		this
			.fs
			.copyTpl(this.templatePath('_src/_styles/_framework/_base/_responsive.scss'), this.destinationPath('src/styles/framework/base/_responsive.scss'));

		// CSS Framework - MODULES

		this
			.fs
			.copyTpl(this.templatePath('_src/_styles/_framework/_modules/_colors.scss'), this.destinationPath('src/styles/framework/modules/_colors.scss'));

	},

	install: function () {
		this.installDependencies();
	}

});
