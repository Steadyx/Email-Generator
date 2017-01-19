generator-easyemail [![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build status][appveyor-image]][appveyor-url]
=========
> Creates a email development folder which scaffolds out everything you will need. I've included SASS and gulp to help automate otherwise tedious processes such as maintaining code that has to be inline, table attributes that need to be manually included.

>Be Aware that this is an on going project and you are likely to encounter errors or you may spot something out of the ordinary, If that's the case please let me know.

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
<li>Comes included with a little CSS framework to help you start
   creating!
</li>
<ul>

### Installation

First, install [Yeoman](http://yeoman.io) and generator-easyemail using [npm](https://www.npmjs.com/) (I assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
$ npm install -g yo
$ npm install -g generator-easyemail
```

Then generate your new project! (keep in mind that you have to create a project folder to install all of the files in):

```bash
$ yo easyemail
```

Once all of the files and packages have finished installing just run gulp in your current directory, this will start up a server where you can begin to modify everything to your liking.

```bash
$ gulp
```

####Future Updates

I am currently working on this generator to generate more options, In future updates I am going to allow you all to generate different responsive layout techniques. I will also be adding options for you all to choose from different CSS frameworks including **LESS**, **SASS** or **SCSS**. As for HTML I am going to be adding HTML template framworks such as **pug**, **handlebars**,  **mustache**, **EJS** and more!  If you have anything that you think you might need get in contact with me and I will be sure to make it an option for every one.

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
   |
   +---images
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


[npm-url]: https://npmjs.org/package/generator-easyemail
[downloads-image]: http://img.shields.io/npm/dm/generator-easyemail.svg
[npm-image]: http://img.shields.io/npm/v/generator-easyemail.svg
[appveyor-image]:https://ci.appveyor.com/api/projects/status/bsu9w9ar8pboc2nj?svg=true
[appveyor-url]:https://ci.appveyor.com/project/Steadyx/Email-Generator
