// dice numbers
var diceNumber = (Math.floor(Math.random()*6 + 1));
var diceNumber2 = (Math.floor(Math.random()*6 + 1));

// setting dice images randomly
document.querySelector(".img1").setAttribute("src" , "images/dice"+diceNumber.toString()+".png")
document.querySelector(".img2").setAttribute("src" , "images/dice"+diceNumber2.toString()+".png")

//
if(diceNumber > diceNumber2){
    document.querySelector("h1").textContent = "🚩 Player 1 wins";
}
else if(diceNumber < diceNumber2){
    document.querySelector("h1").textContent = " Player 2 wins 🚩";
}
else  {
    document.querySelector("h1").textContent = "Draw";
}