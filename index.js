var valueOne;
var valueTwo;
var result;
var playerAnswer;


function beginChallenge() {
    var max = parseInt(document.getElementById("Max-Input").value);
    var min = parseInt(document.getElementById("Min-Input").value);
    valueOne = Math.floor(Math.random() * (max - min + 1)) + min;
    valueTwo = Math.floor(Math.random() * (max - min + 1)) + min;
    if (valueOne < valueTwo) {
        console.log("switching");
        valueOne = valueOne + valueTwo;
        valueTwo = valueOne - valueTwo;
        valueOne = valueOne - valueTwo;
        result = valueOne - valueTwo;
        console.log(result);
    }
    else {
        console.log("Correct Placement");
        result = valueOne - valueTwo;
        console.log(result);
    }
    document.getElementById("valOne").innerHTML = valueOne;
    document.getElementById("valTwo").innerHTML = valueTwo;
  
    


}

function answerClick() {
    if (event.key === "Enter") {
        checkAnswer();
    }
}



function resetValues() {
    var min = "0";
    var max = "0";
    var valueOne = "0";
    var valueTwo = "0";
    var result = "0";
    document.getElementById("valOne").innerHTML = "0 ";
    document.getElementById("valTwo").innerHTML = "0 ";
}

function checkAnswer() {

    playerAnswer = document.getElementById("answerValue").value;
    console.log(playerAnswer);

    if (playerAnswer == result) {
        document.getElementById("answerValue").value = " ";
        var valueOne = "0";
        var valueTwo = "0";
        beginChallenge();
    }
    else if (playerAnswer != result) {
        console.log("incorrect");
        alert("Try Again");
        document.getElementById("answerValue").value = " ";
    }

}
