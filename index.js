// Code your solutions in this file
const cards = [];

function writeCards(names) {
    let greetings = [];
    for (let i = 0; i < names.length; i++) {
        greetings[i] = `Thank you, ${names[i]}, for the wonderful surprise gift!`;
        
    }
    return greetings;
}

writeCards(cards);

function countDown(duke) {
    let i = duke;
    while (i >= 0){
        console.log(i);
        i--;
    }
}