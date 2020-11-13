const {favFoods} = require('./myModule');
const colors = require('colors');
const emjs = require('easy-math.js')
const mapArray = require('map-array')
const url = require('url')

console.log('hello'.inverse);

myFoods = (foods) => {
    for (i = 0; i < foods.length; i++) {
        return foods;
    }
};

console.log(myFoods(favFoods));

console.log(`Do not know how else to make it work`.trap);

console.log(emjs.add(1, 2));

console.log(emjs.multiply(0.3, 75));

console.log(emjs.divide(0.3, 231));

const obj = {
    Guti: 'Hernandez',
    Zinedine: 'Zidane',
    Cristiano: 'Ronaldo'
};
console.log(mapArray(obj, (key,value) => key + ' ' + value));

const newOne = 'https://github.com/shinnn/count-days-in-month';
const q = url.parse(newOne, true);
console.log(q.host);
console.log(q.pathname);
console.log(q.query);