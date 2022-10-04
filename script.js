
// need the full deck of cards
//Total cards=52

//const cards = {"dA":11 ,"dK":12,"dQ":13,"dJ":14,"d10":10,"d09":9,"d08":8,"d07":7,"d06":6,"d05":5,"d04":4,"d03":3,"d02":2,
             //  "hA":11,"hK":12,"hQ":13,"hJ":14,"h10":10,"h09":9,"h08":8,"h07":7,"h06":6,"h05":5,"h04":4,"h03":3,"h02":2,
              // "sA":11,"sK":12,"sQ":13,"sJ":14,"s10":10,"s09":9,"s08":8,"s07":7,"s06":6,"s05":5,"s04":4,"s03":3,"s02":2,
              // "cA":11,"cK":12,"cQ":13,"cJ":14,"c10":10,"c09":9,"c08":8,"c07":7,"c06":6,"c05":5,"c04":4,"c03":3,"c02":2}

const cards = ["dA","dK","dQ","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02",
               "hA","hK","hQ","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02",
              "sA","sK","sQ","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02",
              "cA","cK","cQ","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02"] 
//split deck in half and randomize deck for two players
//Each player has to have 26 cards

//Player cards
 
let Playerdeck = [];
for(let i=0 ; Playerdeck.length < 26 ;i++){
    let j = Math.floor(Math.random() * 52) + 1;
    if(Playerdeck.indexOf(cards[i]) === -1) Playerdeck.push(cards[i]);
    
}
console.log(`${Playerdeck}`);

 
   
 

//Dealer cards
let Dealerdeck = [];
for(let i=0 ; Dealerdeck.length < 26 ;i++){
    let j = Math.floor(Math.random() * 52) + 1;
    if(Dealerdeck.indexOf(cards[i]) === -1) Dealerdeck.push(cards[i]);
   
}
console.log(`${Dealerdeck}`);

 
// Add event listeners to your html buttons/cards
document.querySelectorAll('.card back-red').addEventListener('click', function () {
    return(Playerdeck)
   });
 







// create functions for each event listener
//compare the cards function 
//score the winner function 

// for ex. cardClick ---> compare the two cards, find winner, add score point, change css/card image class

//resetbutton

