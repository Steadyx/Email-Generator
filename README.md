generator-email [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
=========
> Creates a email development folder which scaffolds out everything you will need. I've included SASS and gulp to help automate otherwise tedious processes such as maintaining code that has to be inline, table attributes that need to be manually inputed.

**Features**
<ul>
<li>Organize and segment your CSS with SASS</li>
<li>Automatically inline your files by just saving your work! </li>
<li>Table attributes will also be added when you save your work,
   no more tedious writing.
</li>
<li>Saves all of your work from the build directory and then zips
   them up so you can send them over to litmus or Email on Acid.
</li>
<li>Comes included with a little CSSS framework to help you start
   creating!
</li>
<ul>

### Installation

First, install [Yeoman](http://yeoman.io) and generator-email using [npm](https://www.npmjs.com/) (I assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
$ npm install -g yo
$ npm install -g generator-email
```

Then generate your new project! (keep in mind that you have to create a project folder to install all of the files in):

```bash
$ yo email
```


Once all of the files and packages have finished installing just run gulp in your current directory, this will start up a server where you can begin to modify everything to your liking.

```bash
$ gulp
```


####Folder Structure
The folder structure is as follows:

```

|   .gitignore
|   gulpfile.js
|   index.js
|   package.json
|   
+---node_modules
|  
+---production
|       build.zip
|       
\---src
   |   index.html
   |   
   +---build
   |   |   index.html
   |   |   
   |   \---css
   |           main.css
   |           
   +---css
   |       main.css
   |       
   \---styles
       |   main.scss
       |   
       \---framework
           +---base
           |       _font-styles.scss
           |       _global-styles.scss
           |       _layout.scss
           |       _responsive.scss
           |       
           +---modules
           |       _colors.scss
           |       
           \---partials
                   _footer.scss
                   _header.scss
                   _mid-section.scss

```


## Getting To Know Yeoman

* Yeoman has a heart of gold.
* Yeoman is a person with feelings and opinions, but is very easy to work with.
* Yeoman can be too opinionated at times but is easily convinced not to be.
* Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT © [Edward Kemp]()


[npm-image]: https://badge.fury.io/js/generator-email.svg
[npm-url]: https://npmjs.org/package/generator-email
[travis-image]: https://travis-ci.org/Steadyx/generator-email.svg?branch=master
[travis-url]: https://travis-ci.org/Steadyx/generator-email
[daviddm-image]: https://david-dm.org/Steadyx/generator-email.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/Steadyx/generator-email
[coveralls-image]: https://coveralls.io/repos/Steadyx/generator-email/badge.svg
[coveralls-url]: https://coveralls.io/r/Steadyx/generator-email
