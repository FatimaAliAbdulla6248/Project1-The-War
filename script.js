
// need the full deck of cards
//Total cards=52
const cards = ["dA","dK","dQ","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02",
             "hA","hK","hQ","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02",
             "sA","sK","sQ","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02",
             "cA","cK","cQ","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02"]


//split deck in half and randomize deck for two players
 const Playerdeck=[];


 for (let i = Playerdeck.length - 26; i < 1; i++) {
    let j = Math.floor(Math.random() * i);
    let temp = Playerdeck[i];
    deck[i] = Playerdeck[j];
    deck[j] = temp;
}

for (let i = 0; i < 27; i++) {
    console.log(`${Playerdeck}`)
}

// Add event listeners to your html buttons/cards





// create functions for each event listener
// for ex. cardClick ---> compare the two cards, find winner, add score point, change css/card image class

//resetbutton




