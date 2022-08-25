//* EJECUTAR MIS BLOQUES DE CÓDIGO
//* MAIN ES NUESTRO ARCHIVO JS PRINCIPAL

const goodReadsCrud = require('./crudAuthors')

//*LISTA DE TODOS LOS AUTORES
// goodReadsCrud.listAuthors()

//*LISTA UN AUTOR POR SU ID
goodReadsCrud.getAuthor(14639)