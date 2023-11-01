const numero = Number(prompt('Digite um numero: '));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>Seu numero - 2 eh ${numero - 2}. </p>`;
texto.innerHTML += `<p>${numero} eh inteiro: ${Number.isInteger(numero)}. </p>`;
texto.innerHTML += `<p>Eh NaN: ${Number.isNaN(numero)}. </p>`;
texto.innerHTML += `<p>Arredondado pra baixo: ${Math.floor(numero)}. </p>`;
texto.innerHTML += `<p>Arredondado pra cima: ${Math.ceil(numero)}. </p>`;
texto.innerHTML += `<p>Duas casas decimais: ${numero.toFixed(2)}. </p>`;
