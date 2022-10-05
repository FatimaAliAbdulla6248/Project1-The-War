
//full deck of cards
//Total cards=52

const cardsobjects = {"dA":14 ,"dK":13,"dQ":12,"dJ":11,"d10":10,"d09":9,"d08":8,"d07":7,"d06":6,"d05":5,"d04":4,"d03":3,"d02":2,
                      "hA":14,"hK":13,"hQ":12,"hJ":11,"h10":10,"h09":9,"h08":8,"h07":7,"h06":6,"h05":5,"h04":4,"h03":3,"h02":2,
                      "sA":14,"sK":13,"sQ":12,"sJ":11,"s10":10,"s09":9,"s08":8,"s07":7,"s06":6,"s05":5,"s04":4,"s03":3,"s02":2,
                      "cA":14,"cK":13,"cQ":12,"cJ":11,"c10":10,"c09":9,"c08":8,"c07":7,"c06":6,"c05":5,"c04":4,"c03":3,"c02":2}

const cards = ["dA","dK","dQ","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02",
               "hA","hK","hQ","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02",
              "sA","sK","sQ","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02",
              "cA","cK","cQ","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02"] 

 //split deck in half and randomize deck for two players
//Each player has to have 26 cards


let dealerDeck = cards
let playerDeck = []
while(dealerDeck.length>26){
    // pick a random number between 0 and dealerDeck.length
    let randomIndex=Math.floor(Math.random()*dealerDeck.length)
    // splice out the card at dealerDeck[randumNum]
    let randomCard=dealerDeck.splice(randomIndex,1)
    // push that card into playerDeck
    playerDeck.push(randomCard[0])
}
console.log(dealerDeck)
console.log(playerDeck)

//Flip new card function 
let playercard =document.querySelector('#CurrentCardP')//html id
let dealercard =document.querySelector('#CurrentCardD')//html id

    function flipNewCard(e){
        console.log(playerDeck)
        console.log(dealerDeck)
        console.log('the value of the Player card is: ', cardsobjects[playerDeck[0]])
        console.log('the value of the Dealer card is: ', cardsobjects[dealerDeck[0]])
        //Empty class each time 
        playercard.className = ''
        dealercard.className=''
        //Add new card from css images
        playercard.classList.add(`card`)
        dealercard.classList.add(`card`)
        //take the first card index from the deck
        playercard.classList.add(`${playerDeck[0]}`)
        dealercard.classList.add(`${dealerDeck[0]}`)

        //delete the card from the deck
        playerDeck.shift()
        dealerDeck.shift()     
}


 
//Add event listener to click the back red card 
let drawDecks = document.querySelectorAll('.back-red')
drawDecks.forEach(deck=>deck.addEventListener("click", flipNewCard))
 
 
//compare the cards function 
//score the winner function 
 
 

//resetbutton
