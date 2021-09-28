let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array


function getHand() {
    let randomIndex = Math.floor( Math.random() * 3 );   
    return hands[randomIndex]
}

console.log("Player 1 " + getHand());
console.log("Player 2 " + getHand());

