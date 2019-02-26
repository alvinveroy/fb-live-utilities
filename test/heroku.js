/*
Heroku config vars can be access through process.env.<config key>
To make this script work, include the Procfile in the root directory that contains

web:    node ./test/heroku.js

then push it in Heroku using heroku-cli.
make sure to create a config vars name test_vars and test_vars2 and add some random values on it.
To run, type heroku run web
*/

var heroku_env1 = process.env.test_vars;
var heroku_env2 = process.env.test_vars2;

console.log(heroku_env1 + " " + heroku_env2);