'use strict';
var Generator = require( 'yeoman-generator' );
var chalk = require( 'chalk' );
var yosay = require( 'yosay' );

module.exports = Generator.extend( {
  prompting: function() {
    // Have Yeoman greet the user.
    this.log( yosay(
      'Welcome to the ' + chalk.red( 'generator-email' ) + ' generator!'
    ) );

    var prompts = [ {
      type: 'input',
      name: 'name',
      message: 'Whats the name of your project going to be?',
      default: 'Resonsive-Email'
    } ];

    return this.prompt( prompts )
      .then( function( props ) {
        // To access props later use this.props.someAnswer;
        this.props = props;
      }.bind( this ) );
  },

  //Application Logic

  config: function() {
    //Config Files
    this.fs.copyTpl(
      this.templatePath( '_package.json' ),
      this.destinationPath( 'package.json' ), {
        name: this.props.name
      }
    );
    this.fs.copyTpl(
      this.templatePath( '_.gitignore' ),
      this.destinationPath( '.gitignore' )
    );
  },
  //Application Files
  app: function() {
    this.fs.copyTpl(
      this.templatePath( '_index.js' ),
      this.destinationPath( 'index.js' )
    );
    this.fs.copyTpl(
      this.templatePath( '_gulpfile.js' ),
      this.destinationPath( 'gulpfile.js' )
    );

    //HTML

    this.fs.copyTpl(
      this.templatePath( '_src/_index.html' ),
      this.destinationPath( 'src/index.html' )
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

    //CSS Framework - MODULES

    this.fs.copyTpl(
      this.templatePath( '_src/_styles/_framework/_modules/_colors.scss' ),
      this.destinationPath( 'src/styles/framework/modules/_colors.scss' )
    );
    this.fs.copyTpl(
      this.templatePath( '_src/_styles/_framework/_partials/_footer.scss' ),
      this.destinationPath( 'src/styles/framework/partials/_footer.scss' )
    );
    this.fs.copyTpl(
      this.templatePath( '_src/_styles/_framework/_partials/_header.scss' ),
      this.destinationPath( 'src/styles/framework/partials/_header.scss' )
    );
    this.fs.copyTpl(
      this.templatePath( '_src/_styles/_framework/_partials/_mid-section.scss' ),
      this.destinationPath( 'src/styles/framework/partials/_mid-section.scss' )
    );
  },
  install: function() {
    this.installDependencies();
  }
} );
