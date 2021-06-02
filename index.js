// below section is for the first player
var randomnumber1 = Math.floor(Math.random()*6)+1;
var randomimagesource1= "images/dice" + randomnumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomimagesource1);

// below section is for the second player
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
// this section is for the "who wins among the players"
if (randomnumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomnumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
