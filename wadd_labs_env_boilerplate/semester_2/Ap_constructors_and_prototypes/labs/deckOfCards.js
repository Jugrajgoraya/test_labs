// Create a class, `Card`, that represents a playing card. Instances of the card should be constructed with two values: a value and a suit.

// ```
// const aceOfSpades = new Card(1, ‘spades’);
// const tenOfHearts = new Card(10, ‘hearts’);
// const kingOfDiamonds = new Card(13, ‘diamonds’);
// ```

// Add a prototype method, `toString`, to `Card` that returns a string to display the card:

// ```
// aceOfSpades.toString() // returns ‘Card { Ace of Spades }’
// tenOfHearts.toString() // returns ‘Card { 10 of Hearts }’
// kingOfDiamonds.toString() // returns ‘Card { King of Diamonds }’
// ```

// Create a class, `Deck`, that represents a deck of playing cards. In the constructor, initialize a full “deck” of `Card` instances representing all 52 possible cards without jokers storing it in the `Deck` instance. You must not create all 52 cards manually. Use iteration to create all cards.

// Finally, add the following prototype methods to `Deck`:

// - `shuffle` method that will randomly reorder the cards in the deck.
// - `draw` that will remove and return the top card of the deck.
// - `reset` method which resets deck to all 52 cards in order.

function Card(value, suit) {
    this.value = value;
    this.suit = suit;
}

const aceOfSpades = new Card(1, 'spades');
const tenOfHearts = new Card(10, 'hearts');
const kingOfDiamonds = new Card(13, 'diamonds');
 
Card.prototype.toString = function () {
    let cardName = '';
    if (this.value === 1 ) {
        cardName = 'Ace';
    } else if ( this.value === 13 ) {
        cardName = 'King';
    } else {
        cardName = this.value;
    }
    return `Card { ${cardName} of ${this.suit} }`
}
aceOfSpades.toString() 
tenOfHearts.toString() 
kingOfDiamonds.toString()


function Deck(){
    this.deck = [];
    this.reset();
}
Deck.prototype.reset = function(){
    this.deck = [];
    let suits = ['hearts', 'spades', 'clubs', 'diamonds']
    let values = ['Ace', 2,3,4,5,6,7,8,9,10,'jack','queen','king']
    for (let i = 0; i < 4; i++){
        for(let j = 0; j < 13; j++){
            this.deck.push(new Card(values[j], suits[i]))
        }  
    } 
}

Deck.prototype.shuffle = function() {
    return this.deck.sort(() => Math.random() - 0.5);
}

Deck.prototype.draw = function() {
    return this.deck.shift();
}

const arrayOfCards = new Deck();
console.log();


console.log(arrayOfCards.draw());

