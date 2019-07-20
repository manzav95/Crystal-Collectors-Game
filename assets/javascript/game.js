$(document).ready(function(){

    let wins = 0;
    let losses = 0;
    var totalScore = 0;

    let redNumber = 0;
    let blueNumber = 0;
    let yellowNumber = 0;
    let greenNumber = 0;

    function randomNumberGenerator(){
    randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    $("#random-number").html(randomNumber);
    console.log(randomNumber);
    }

    function updateGems(){
        redNumber = Math.floor(Math.random() * 12) + 1;

        blueNumber = Math.floor(Math.random() * 12) + 1;

        yellowNumber = Math.floor(Math.random() * 12) + 1;

        greenNumber = Math.floor(Math.random() * 12) + 1;
    }

    function updateGame(){

        if(totalScore === randomNumber){
            alert("WINNER!");
            wins++;
            $("#wins").html(wins);
            restartGame();
        }
    
        else if(totalScore > randomNumber){
            alert("LOSER!");
            losses++;
            $("#losses").html(losses);
            restartGame();
        }
    
    }

    function restartGame(){
    totalScore = 0;

    $("#total-score").html(totalScore);

    randomNumberGenerator();
    updateGems();

    }

    randomNumberGenerator();
    updateGems();


    $("#red-gem").on("click", function(){
    $("#total-score").html(totalScore+=redNumber);

    updateGame();

    console.log("Red Number: " + redNumber);
    })

    $("#blue-gem").on("click", function(){
    $("#total-score").html(totalScore+=blueNumber);

    updateGame();

    console.log("Blue Number: " + blueNumber);
    })

    $("#yellow-gem").on("click", function(){
    $("#total-score").html(totalScore+=yellowNumber);

    updateGame();

    console.log("Yellow Number: " + yellowNumber);

    })

    $("#green-gem").on("click", function(){
    $("#total-score").html(totalScore+=greenNumber);

    updateGame();

    console.log("Green Number: " + greenNumber);

    })

})



