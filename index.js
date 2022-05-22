var prettyjson = require('prettyjson');

var data = {
  username: 'kvmoraes',
  url: 'https://github.com/kvmoraes',
  bio: `Olá! Atualmente tenho 17 anos e estou no último 
  ano do ensino médio. Ao longo da minha trajetória, desenvolvi
  diferentes projetos dentro da escola utilizando a tecnologia arduíno
  e, assim, fui iniciada no mundo da programação através da linguagem
  C++. Em 2021, comecei a estudar por conta própria sobre desenvolvimento
  web e me apaixonei pela área. Desde então, fiz diversos miniprojetos, 
  sempre me dedicando a aprender cada vez mais.`
};

var options = {
  keysColor: 'magenta',
  stringColor: 'white'
};

console.log(prettyjson.render(data, options));