'use strict';
var Generator = require( 'yeoman-generator' );
var chalk = require( 'chalk' );
var yosay = require( 'yosay' );

module.exports = Generator.extend( {
	prompting: function() {
		// Have Yeoman greet the user.
		this.log(
			yosay( 'Welcome to the ' + chalk.yellow( 'easyemail' ) + ' generator!' )
		);

		var prompts = [
			{
				type: 'input',
				name: 'name',
				message: 'Whats the name of your project going to be?',
				default: ( this.appname = this.appname.replace( /\s+/g, '-' ) )
			},
			{
				type: 'list',
				name: 'templates',
				message: 'How many columns would you like?',
				choices: [
					{
						name: 'One Column Template',
						value: 'includeOneColumn'
					},
					{
						name: 'Two Column Template',
						value: 'includeTwoColumn'
					},
					{
						name: 'Three Column Template',
						value: 'includeThreeColumn'
					}
				]
			}
		];

		return this.prompt( prompts ).then(
			function( answers ) {
				// To access users configs later use this.answers.prop;
				this.answers = answers;

				if ( this.answers.templates === 'includeOneColumn' ) {
					console.log( 'working..' );
					this.fs.copyTpl(
						this.templatePath( '_src/_one-column/_index.html' ),
						this.destinationPath( 'src/index.html' ), {
							name: this.answers.name
						}
					)
				}
				if ( this.answers.templates === 'includeTwoColumn' ) {
					console.log( 'working..' );
					this.fs.copyTpl(
						this.templatePath( '_src/_two-column/_index.html' ),
						this.destinationPath( 'src/index.html' ), {
							name: this.answers.name
						}
					);
				}
				if ( this.answers.templates === 'includeThreeColumn' ) {
					console.log( 'working..' );
					this.fs.copyTpl(
						this.templatePath( '_src/_three-column/_index.html' ),
						this.destinationPath( 'src/index.html' ), {
							name: this.answers.name
						}
					);
				}
			}.bind( this )
		);
	},

	// Application Logic

	config: function() {
		// Config Files
		this.fs.copyTpl(
			this.templatePath( '_package.json' ),
			this.destinationPath( 'package.json' ), {
				name: this.answers.name
			}
		);

		this.fs.copyTpl(
			this.templatePath( '_.gitignore' ),
			this.destinationPath( '.gitignore' )
		);
	},

	// Application Files
	app: function() {
		this.fs.copy(
			this.templatePath( '_index.js' ),
			this.destinationPath( 'index.js' )
		);

		// HTML

		this.fs.copy(
			this.templatePath( '_gulpfile.js' ),
			this.destinationPath( 'gulpfile.js' )
		);

		// CSS Framework - BASE

		this.fs.copyTpl(
			this.templatePath( '_src/_styles/_main.scss' ),
			this.destinationPath( 'src/styles/main.scss' )
		);
		this.fs.copyTpl(
			this.templatePath( '_src/_styles/_framework/_base/_font-styles.scss' ),
			this.destinationPath( 'src/styles/framework/base/_font-styles.scss' )
		);
		this.fs.copyTpl(
			this.templatePath( '_src/_styles/_framework/_base/_global-styles.scss' ),
			this.destinationPath( 'src/styles/framework/base/_global-styles.scss' )
		);
		this.fs.copyTpl(
			this.templatePath( '_src/_styles/_framework/_base/_layout.scss' ),
			this.destinationPath( 'src/styles/framework/base/_layout.scss' )
		);
		this.fs.copyTpl(
			this.templatePath( '_src/_styles/_framework/_base/_responsive.scss' ),
			this.destinationPath( 'src/styles/framework/base/_responsive.scss' )
		);

		// CSS Framework - MODULES

		this.fs.copyTpl(
			this.templatePath( '_src/_styles/_framework/_modules/_colors.scss' ),
			this.destinationPath( 'src/styles/framework/modules/_colors.scss' )
		);
		this.fs.copyTpl(
			this.templatePath( '_src/_styles/_framework/_modules/_padding.scss' ),
			this.destinationPath( 'src/styles/framework/modules/_padding.scss' )
		);
		this.fs.copyTpl(
			this.templatePath( '_src/_styles/_framework/_partials/_footer.scss' ),
			this.destinationPath( 'src/styles/framework/partials/_footer.scss' )
		);
		this.fs.copyTpl(
			this.templatePath( '_src/_styles/_framework/_partials/_header.scss' ),
			this.destinationPath( 'src/styles/framework/partials/_header.scss' )
		);
	},

	install: function() {
		this.installDependencies( {
			npm: false,
			yarn: true
		} );
	}
} );
