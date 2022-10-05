// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// poi chiedi la sua età
// Infine scrivi sulla pagina nomecognomecolorepreferito21 (dove il 21 è in questo caso l'età)

const nameClient = prompt('Qual è il tuo nome ?');
const secondNameClient = prompt('Qual è il tuo cognome ?');
const colorPreferClient = prompt('Qual è il tuo colore preferito ?');
const ageClient = prompt('Qual è la tua età ? ');

const pswGen = `${nameClient}${secondNameClient}${colorPreferClient}${ageClient}`;

const saluto = `Password Generator:
${pswGen}`

var elemento = alert(saluto);
var elemento = document.getElementById('my_id');

elemento.innerHTML = pswGen;

console.log(nameClient, secondNameClient, colorPreferClient, ageClient);
