const nome = prompt('Digite seu nome completo:');
//Caio Sobrinho da Silva
let tamanho = nome.length;

let subNome = nome.split(' ');
let numLetters = 0;

for (let index = 0; index < subNome.length; index++) {
    numLetters += subNome[index].length;
}

document.body.innerHTML += `Seu nome é: ${nome}<br />`;
document.body.innerHTML += `Seu nome tem ${numLetters} letras <br />`;
document.body.innerHTML += `A segunda letra do seu nome é: ${nome[1]}<br />`;
document.body.innerHTML += `Qual o primeiro índice da letra O no seu nome? R: ${nome.indexOf('o')} <br />`;
document.body.innerHTML += `Qual o último índice da letra O no seu nome? R: ${nome.lastIndexOf('o')} <br />`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${nome.slice(-3)} <br />`;
document.body.innerHTML += `As palavras do seu nome são: ${nome.split(' ')} <br />`;
document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toUpperCase()} <br />`;
document.body.innerHTML += `Seu nome com letras minúsculas: ${nome.toLowerCase()} <br />`;