//global variable
$(document).ready(function(){
var counter=0;
//creating random number to be guessed
var randomNumber=Math.floor(Math.random()*100+30);
//creating random numbers
var num1=Math.floor(Math.random()*11+1);
var num2=Math.floor(Math.random()*11+1);
var num3=Math.floor(Math.random()*11+1);
var num4=Math.floor(Math.random()*11+1);

var wins=0;
var loses=0;

//player total set to 0
var playerTotal=0;

$("#totalScore").text(playerTotal);
$("#wins").text("Wins: " + wins);
$("#losses").text("Losses: " + loses);
$("#score").text("Goal: " + randomNumber);

function resetGame() {
    playerTotal= 0;
    randomNumber=Math.floor(Math.random()*100+30);
    num1=Math.floor(Math.random()*11+1);
    num2=Math.floor(Math.random()*11+1);
    num3=Math.floor(Math.random()*11+1);
    num4=Math.floor(Math.random()*11+1);
    $("#score").text("Goal: " + randomNumber);
    $("#totalScore").text(playerTotal);
    
}

$("#one").on('click', function() {
    playerTotal= playerTotal +num1;
    $("#totalScore").text(playerTotal);
    console.log("New userTotal= " + playerTotal);
    
    if(playerTotal > randomNumber){
        loses++;
        console.log("inside if - losses: " + loses);
        $("#losses").text("Losses: " + loses);
        resetGame()
    } else if(playerTotal ===randomNumber) {
        wins ++;
        $("#wins").text("Wins: " + wins);
        resetGame();
    }
})




$("#two").on('click', function() {
    playerTotal= playerTotal +num2;
    $("#totalScore").text(playerTotal);
    console.log("New userTotal= " + playerTotal);

    if(playerTotal > randomNumber){
        loses++;
        console.log("inside if - losses: " + loses);
        $("#losses").text("Losses: " + loses);
        resetGame();
    } else if(playerTotal ===randomNumber) {
        wins ++;
        $("#wins").text("Wins: " + wins);
        resetGame();
    }
    
})


$("#three").on('click', function() {
    playerTotal= playerTotal +num3;
    $("#totalScore").text(playerTotal);
    console.log("New userTotal= " + playerTotal);

    if(playerTotal > randomNumber){
        loses++;
        console.log("inside if - losses: " + loses);
        $("#losses").text("Losses: " + loses);
        resetGame();
    } else if(playerTotal ===randomNumber) {
        wins ++;
        $("#wins").text("Wins: " + wins);
        resetGame();
    }
    
})



$("#four").on('click', function() {
    playerTotal= playerTotal +num4;
    $("#totalScore").text(playerTotal)
    console.log("New userTotal= " + playerTotal);

    if(playerTotal > randomNumber){
        loses++;
        console.log("inside if - losses: " + loses);
        $("#losses").text("Losses: " + loses);
        resetGame();
    } else if(playerTotal ===randomNumber) {
        wins ++;
        $("#wins").text("Wins: " + wins);
        resetGame();
    }
}
)})