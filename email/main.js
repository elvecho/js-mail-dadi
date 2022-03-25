let email= prompt("inserisci la tua email");
let listaemail = ["matteo@gmail.com","fabio@gmail.com","pietro@gmail.com","anna@gmail.com"];

console.log(listaemail);
let trovato= false;
for( let i =0; i <= listaemail.length -1; i++){
    if(email === listaemail[i]){
        trovato = true;
} 
    
}if (trovato==true){
    console.log("la tua email è accettata");
}else{
    console.log("la tua email non è accettata");
    let registrazione= confirm("vuoi inserire una nuova email?");
if (registrazione == true){
let nuovaemail = prompt("inserisci nuova email");
listaemail.push(nuovaemail);
console.log(listaemail);
}else{
    console.log("okay addio");
}
   
}

/*for( let i =0; i < listaemail.length; i++){
    switch(email){
        case email == "matteo@gmail.com":
        case email == "fabio@gmail.com":
        case email == "pietro@gmail.com":
            case email == "anna@gmail.com":
                alert("la tua email è accettata");
                break;
            default:
                alert("la tua email non è accettata");
               let nuovaemail = prompt("vuoi inserire una nuova email?");

    }
}
email.push(nuovaemail)*/