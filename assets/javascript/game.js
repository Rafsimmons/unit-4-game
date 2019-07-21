//global variable
$(document).ready(function(){
var targetNumber= 100
var counter=0;
var randomNumber=Math.floor(Math.random()*100+30)
var num1=Math.floor(Math.random()*11+1)
var num2=Math.floor(Math.random()*11+1)
var num3=Math.floor(Math.random()*11+1)
var num4=Math.floor(Math.random()*11+1)
var wins=0
var loses=0
var playerTotal=0
$("#totalScore").text(playerTotal)
$("#wins").text(wins)
$("#losses").text(loses)

function great(){
    win++
    $("#wins").text(wins)
}

function boo() {
    loses++
    $("#losses").text(loses);
}

$("#one").on('click', function() {
    playerTotal= playerTotal +num1;
    console.log("New userTotal= " + playerTotal)
}












)})