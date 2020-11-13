# Node Modules Practice

- [x] Fork and clone this repo
- [x] Initialize node in your cloned repo so it becomes a node project!

## Make your own module

- [x] Create a node module that stores an array of your favorite foods
- [x] Import that module into your `index.js`
- [x] Write code in your `index.js` so when you run your app, it loops through the array, printing all of your favorite foods to the console

## Experiment with implementing a package

- [x] Find 3 [npm](https://www.npmjs.com/) packages that look interesting
- [x] Experiment with incorporating them into this node project, just like we did with moment

## Add to your Node app instructions readme

- [x] Add notes about how to create and import node modules to your Node/Express app readme, along with instructions about adding a `.gitignore`
- [x] Paste the link to your repo in this the readme of this assignment

## Finally, .gitignore and submit a PR!

- [x] Add a `.gitignore` to this assignment, so the `node_modules` folder doesn't upload to Github
- [x] Submit this assignment by making a `pull request`

## How to create and import node modules
First thing to do is install the npm package in your terminal. Each package will have a different method of installing. The package should have a description how to
```text
npm install --save map-array
```
once You create the npm you then add it to your main point file which is index.js in this instance
```js
const mapArray = require('map-array')
```
when you require the npm you can now use its contents on you index.js file like so 
```js
const obj = {
    Guti: 'Hernandez',
    Zinedine: 'Zidane',
    Cristiano: 'Ronaldo'
};
console.log(mapArray(obj, (key,value) => key + ' ' + value));
```

You can also create your own npm package. In the terminal type
```text
npm init
```
from there you will be prompt to fill in what you need to. Once you finish you will create your module.js file like so
```text
touch myModule.js
```
Then you require it in the index.js file like so
```js
const {favFoods} = require('./myModule');
```
Once it's required you can now use whatever functions you have in the myModule.js file in your index.js file.

## .gitignore
to set up your .gitignore you simply enter in your terminal

```text
touch .gitignore
```
Once that is done you go into the .gitignore file in your vscode and put in the name of the npm package in this case I added
```text
node-modules
myModule.js
```
## github repo link

[github](https://github.com/AlexJBustillos/node_modules_practice)