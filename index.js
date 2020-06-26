
var diceNumber1 = Math.floor(Math.random() * 6 + 1);
var diceNumber2 = Math.floor(Math.random() * 6 + 1);
document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice" + diceNumber1 + ".png");
document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice" + diceNumber2 + ".png");

if (diceNumber1 > diceNumber2) {
  document.getElementsByClassName("flag")[0].classList.remove("left-flag");
  document.querySelector("h1").innerText = "Player 1 Wins !";
} else if (diceNumber2 > diceNumber1) {
  document.getElementsByClassName("flag2")[0].classList.remove("right-flag");
  document.querySelector("h1").innerText = "Player 2 Wins !";
} else {
  document.querySelector("h1").innerText = "Draw!";
}
