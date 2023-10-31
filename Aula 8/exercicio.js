const nome = 'Caio Sobrinho';
const sobrenome = 'da Silva';
const idade = 20;
const peso = 65; //em kg
const altura = 1.72; //em metros
const anoAtual = 2023;
let imc;
let anoNascimento;

imc = peso/(altura*altura);
anoNascimento = anoAtual - idade;

console.log(nome, sobrenome,'tem',idade,'anos, pesa', peso, 'tem', altura, 'de altura e seu IMC é de', imc);
console.log('Nascido em',anoNascimento);
console.log(`tem ${altura} de altura`);
console.log(`Meu nome é ${nome} ${sobrenome} e tenho ${idade} anos`);