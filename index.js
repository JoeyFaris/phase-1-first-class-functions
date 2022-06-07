const { spy } = require("chai");

function receivesAFunction(callback) {
    callback(spy)
}

function returnsANamedFunction() {
    return function thisIsAFunction(funTimes){
        console.log('Hello world!')
    }
}

function returnsAnAnonymousFunction() {
    return function(){
        console.log('Hello World')
    }
}
