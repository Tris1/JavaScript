/**
 * A rudimentary Rock Paper Scissors game.
 */
var rPS = function(p1,p2){
  if(p1 === p2){
    alert("The game is tied");
  }
  
  if(p1 === "rock" && p2 === "scissors" || p1 === "scissors" && p2 === "rock"){
    alert("Rock beats scissors");
  }
  
  if(p1 === "rock" && p2 === "paper" || p1 === "paper" && p2 === "rock"){
    alert("Paper covers rock. Paper wins!");
  }
  
  if(p1 === "paper" && p2 === "scissors" || p1 === "scissors" && p2 === "paper"){
    alert("Scissors cut paper. Scissors win!");
  }
  
  //Faulty input validator. Will be fixed.
  if(p1 != "rock" || p1 != "paper" || p1 != "scissors" || p2 != "rock" || p2 != "paper" || p3 != "scissors"){
	  alert("That is not a valid entry!");
  }
};

var p1 = prompt("Enter your choice");
var p2 = prompt("Enter your choice");
rPS(p1,p2);