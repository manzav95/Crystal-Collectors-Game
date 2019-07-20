$(document).ready(function(){

    let wins = 0;
    let losses = 0;
    let totalScore = 0;
    let randomNumber;

    $("#redGem").on("click", function(){
        let redNumber = Math.floor(Math.random() * 12) + 1;
        

        console.log("Red Number: " + redNumber);
    })

    $("#blueGem").on("click", function(){
        alert("Blue");
    })

    $("#yellowGem").on("click", function(){
        alert("Yellow");
    })

    $("#greenGem").on("click", function(){
        alert("Green");
    })

    
    //ask TA how this becomes a number starting from 19?
    function randomNumberGenerator(){
        randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        $("#random-number").html(randomNumber);
        console.log(randomNumber);
    }

    function updateGame(){
        if(totalScore === randomNumber){
            wins++
            $("#wins").html(wins);
        }
    }

    function restartGame(){

    }

    randomNumberGenerator();
})



