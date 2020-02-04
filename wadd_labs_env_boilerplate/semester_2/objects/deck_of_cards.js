const Suit =["clubs","spades", "hearts", "diamonds"]
const deck = {
    cards : [ ]
}
for(let i=0; i<Suit.length; i++){

    for(let j =1; j<=13;j++ ){
     deck.cards.push({suit:Suit[i],
        number : j}) ;  
    
    }  
}
console.log(deck);

function shuffle () {
    deck.cards[Math.random()]
}


