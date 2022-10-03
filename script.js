
// need the full deck of cards
//Total cards=52
const cards = ["dA","dK","dQ","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02",
             "hA","hK","hQ","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02",
             "sA","sK","sQ","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02",
             "cA","cK","cQ","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02"]


//split deck in half and randomize deck for two players
//Each player has to have 26 cards

//Player cards
 
let Playerdeck = [];
while(Playerdeck.length < 26){
    let i = Math.floor(Math.random() * 52) + 1;
    if(Playerdeck.indexOf(cards[i]) === -1) Playerdeck.push(cards[i]);
}
console.log(`${Playerdeck}`);
 

//Dealer cards
let Dealerdeck = [];
for(i=0 ; Dealerdeck.length < 26 ;i++){
    let i = Math.floor(Math.random() * 52) + 1;
    if(Dealerdeck.indexOf(cards[i]) === -1) Dealerdeck.push(cards[i]);
}
console.log(`${Dealerdeck}`);

//I just change the file 
// Add event listeners to your html buttons/cards





// create functions for each event listener
//compare the cards function 
//score the winner function 

// for ex. cardClick ---> compare the two cards, find winner, add score point, change css/card image class

//resetbutton

