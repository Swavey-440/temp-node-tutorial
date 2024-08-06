const names = require('./first-module');
const sayHi = require('./second-module');

sayHi('Samuel');
sayHi(names.name1);
sayHi(names.name2);