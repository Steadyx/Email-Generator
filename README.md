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

### **Installation**
This project now uses [yarn](https://www.npmjs.com/package/yarn) to install packages, so you will need to do this before proceeding to any of the other steps.
```bash
$ npm install -g yarn
```
Now install [Yeoman](http://yeoman.io) and generator-easyemail using [npm](https://www.npmjs.com/) (I assume you have pre-installed [node.js](https://nodejs.org/)).
```bash
$ npm install -g yo
$ npm install -g generator-easyemail
```
(Optional) - This project has a small and simple server built with express, if you plan on making changes to the server you can automate not having to stop and restart the server everytime you make some adjustments.
```bash
$ npm install -g nodemon
```
Then generate your new project! (keep in mind that you have to create a project folder to install all of the files in):

```bash
$ yo easyemail
```
If you've followed the optional step or you already have nodemon installed in your packages, run nodemon to begin watching your server.
```bash
$ nodemon
```
Once all of the files and packages have finished installing just run gulp in your current directory, this will start up a proxy server and you will automatically open up a new window to your perferred browser.
```bash
$ gulp
```
####**Current Updates**
I have started working on this project again, I have added an option to alllow you to choose from three templates. These include a One Column Layout, Two Column Layout, and a Three Column Layout. Look at the following pictures to get a better persepective.

![One Column Layout](https://lh3.googleusercontent.com/-BYVhLm5LlyQ/WRls1eC_m8I/AAAAAAAAAaw/UozNYKV79bsSTUEq0gGRk4BCxzR9Ft7sgCLcB/s400/one-col.png "one-col.png") ![Two Column Layout](https://lh3.googleusercontent.com/-wUAh25Z-EdQ/WRltVezvNWI/AAAAAAAAAa8/vUzPIdRSeSkzqj1vMGB6ka41OEUdWt4VQCLcB/s400/two-cols.png "two-cols.png") ![Three Column Layout](https://lh3.googleusercontent.com/-M7F-_SLwsU0/WRltguJGjcI/AAAAAAAAAbE/NflVd6aiVmMWz4NzqyimkLINPBhCSjHaQCLcB/s400/three-cols.png "three-cols.png")

####**Future Updates**
I am currently working on this generator to generate more options, In future updates I am going to allow you all to generate different responsive layout techniques. I will also be adding options for you all to choose from different CSS frameworks including **LESS**, **SASS** or **SCSS**. As for HTML I am going to be adding HTML template framworks such as **pug**, **handlebars**,  **mustache**, **EJS** and more!  If you have anything that you think you might need get in contact with me and I will be sure to make it an option for every one.

####**Folder Structure**
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
