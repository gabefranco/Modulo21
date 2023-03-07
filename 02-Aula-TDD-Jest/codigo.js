const soma = (a,b) => a + b; // isso é a mesma coisa que isso: const soma = function () {};
// o codigo acima é que será testado no Jest dentro do arquivo "codigo.test.js"
// para isso esse arquivo deve ser exportado, conforme abaixo
const dobro = (valor) => valor * 2;

module.exports = { soma, dobro } // comando para exportar a variavel "soma"

