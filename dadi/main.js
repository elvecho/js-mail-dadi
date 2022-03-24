let numerocomputer = Math.floor(Math.random()*6);
console.log("numerocomputer");
console.log(numerocomputer);

let numerogiocatore = Math.floor(Math.random()*6);
console.log("numerogiocatore");
console.log(numerogiocatore);

if (numerocomputer>numerogiocatore){
    console.log("ha vinto il computer");
}else if(numerocomputer<numerogiocatore){
    console.log("ha vinto il giocatore");
}else{
    console.log("pareggio");
}