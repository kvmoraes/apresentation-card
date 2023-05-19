var prettyjson = require('prettyjson');

var data = {
  name: 'Karine Vitória Moraes ♥',
  github: 'kvmoraes',
  urls: [
    'https://www.linkedin.com/in/karine-moraes-1776801b9',
    'https://fourway.tech'
  ]
};

var options = {
  keysColor: 'magenta',
  stringColor: 'white'
};

module.exports = prettyjson.render(data, options);

