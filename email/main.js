let email= prompt("inserisci la tua email");
let listaemail = ["matteo@gmail.com","fabio@gmail.com","pietro@gmail.com","anna@gmail.com"];

console.log(listaemail);

for( let i =0; i < listaemail.length; i++){
    if(email === listaemail[i]){
        console.log("la tua email è accettata");
    }
}
