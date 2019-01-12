// Global Variables
var wins = 0;
var losses = 0;
var yourNumber = 0;
var numberToMatch = getRandomNumberInRange(19, 120);
var blueValue = getRandomCrystalValue();
var greenValue = getRandomCrystalValue();
var yellowValue = getRandomCrystalValue();
var redValue = getRandomCrystalValue();

$(document).ready(function() {
    $("#number-to-match").text(numberToMatch);
    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#your-number").text(yourNumber);
    
    // On crystal click: update your number, then check if we should win/lose/continue.  
    $("#blue").click(function() {
        yourNumber += blueValue;
        checkyourNumber();
    });
    
    $("#green").click(function() {
        yourNumber += greenValue;
        checkyourNumber();
    });
    
    $("#yellow").click(function() {
        yourNumber += yellowValue;
        checkyourNumber();
    });
    
    $("#red").click(function() {
        yourNumber += redValue;
        checkyourNumber();
    });
});

function getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function getRandomCrystalValue() {
    return getRandomNumberInRange(1, 12);
};

// Resets game and assigns new values then updates front end.
function resetGame() {
    yourNumber = 0;
    numberToMatch = getRandomNumberInRange(19, 120)
    blueValue = getRandomCrystalValue();
    greenValue = getRandomCrystalValue();
    yellowValue = getRandomCrystalValue();
    redValue = getRandomCrystalValue();

    $("#number-to-match").text(numberToMatch);
    $("#your-number").text(yourNumber);
};

function checkyourNumber() {
    $("#your-number").text(yourNumber);
    if (yourNumber === numberToMatch) {
        wins++;
        alert("You win!");
        $("#wins").html(wins);
        resetGame();
    }
    else if (yourNumber > numberToMatch) {
        losses++;
        alert("Better luck next time!");
        $("#losses").html(losses);
        resetGame();
    }
    else {
        $("your-total").html(yourNumber)
    }
};