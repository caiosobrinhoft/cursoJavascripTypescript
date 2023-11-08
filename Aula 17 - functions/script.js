/*function saudacao() {
    console.log('Olá mundo!');
}

saudacao();
*/

//Função anônima invocada imediatamente

let person = {
	firstName: 'Taylor',
	lastName: 'Swift'
};

(function () {
	console.log(`${person.firstName} ${person.lastName}`);
})(person); //person como argumento

//arrow function
let add = (a, b) => a + b;