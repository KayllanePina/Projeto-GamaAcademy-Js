const livros = require('./data-base')
console.log(livros)

//Pegar input da pessoa usuária
const readline = require('readline-sync')
const entradaInicial = readline.question('Deseja buscar um livro? S/N')

// Se for S, mostras as categorias disponiveis e pergunta qual categoria escolhe
if(entradaInicial.toUpperCase() === 'S'){
  console.log('Essas sao as categorias disponiveis: ')
  console.log('Produtividade e estilo de vida','/Historia brasileira','/Americas','/Estilo de Vida', '/Tecnologia' )
  const entradaCategoria =  readline.question('Qual categoria voce escolhe?: ')

  const retorno = livros.filter(livro => livro.categoria === entradaCategoria)
  
  console.table(retorno)
}// Se for N, mostra todos os livros em ordem crescente de páginas
else{
  const livrosOrdenados = livros.sort((a, b) => a.paginas - b.paginas)
  console.log('Essas sao todos os livros disponiveis: ')
  console.table(livrosOrdenados)
}



