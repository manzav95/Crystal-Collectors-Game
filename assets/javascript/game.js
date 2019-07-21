$(document).ready(function(){
    //Declaring Variables

    let wins = 0;
    let losses = 0;
    var totalScore = 0;

    let redNumber = 0;
    let blueNumber = 0;
    let yellowNumber = 0;
    let greenNumber = 0;

    //Creates a random number value for the randomNumber and all 4 gems
    function randomNumberGenerator(){
        randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        $("#random-number").html(randomNumber);


        redNumber = Math.floor(Math.random() * 12) + 1;

        blueNumber = Math.floor(Math.random() * 12) + 1;

        yellowNumber = Math.floor(Math.random() * 12) + 1;

        greenNumber = Math.floor(Math.random() * 12) + 1;

        //Not needed for gameplay. Console.logs all random values
        consoleLog();
    }


    //These are the actions that will be taken when the randomNumber is met or is exceeded.
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

    //This allows a new random number to be generated and resets user score back to 0
    function restartGame(){
    totalScore = 0;

    $("#total-score").html(totalScore);

    randomNumberGenerator();

    }
    //These console.logs were used when developing the game to show values of random generated numbers
    function consoleLog(){
        console.log(randomNumber);
        console.log("Red Number: " + redNumber);
        console.log("Blue Number: " + blueNumber);
        console.log("Yellow Number: " + yellowNumber);
        console.log("Green Number: " + greenNumber);
    }

    //This is where the game first begins. Creating random values for all 4 gems and the randomNumber as well.
    randomNumberGenerator();

    //On click functions for all gems. Updates the value of the totalScore
    $("#red-gem").on("click", function(){
    $("#total-score").html(totalScore+=redNumber);
    updateGame();
    })

    $("#blue-gem").on("click", function(){
    $("#total-score").html(totalScore+=blueNumber);
    updateGame();
    })

    $("#yellow-gem").on("click", function(){
    $("#total-score").html(totalScore+=yellowNumber);
    updateGame();
    })

    $("#green-gem").on("click", function(){
    $("#total-score").html(totalScore+=greenNumber);
    updateGame();
    })
})



