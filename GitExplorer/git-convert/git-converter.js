/**
 * Created by bcuser on 5/6/17.
 */
var debug = require('debug')('git-convert');
debug('this is a test');

var fs=require("fs");

function readFile(fileName) {
    return new Promise(function(resolve, reject) {
        fs.readFile( /*YOUR CODE HERE*/ );
    });
}

readFile('git-user.json').then(function(text) {
    // CODE OMITTED. This is where you solve the core of the assignment.
});