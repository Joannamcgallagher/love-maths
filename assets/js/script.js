document.addEventListener("DOMContentLoaded", function()
{
    //add event listeners to buttons - 4 game buttons & 1 submit button
    let buttons = document.getElementsByTagName("button");

    for(let button of buttons)
    {
        button.addEventListener("click", function()
        {
            if(this.getAttribute("data-type") === "submit")
            {
                checkAnswer();
            }
            else
            {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
           
        })
    }
    //allow the user to hit the enter key to submit
    document.getElementById('answer-box').addEventListener("keydown", function(event)
    {
        if (event.key === "Enter")
        {
            checkAnswer();
        }
    })

    runGame("addition");
})
/** 
 * the main game loop, called when the script is fist loaded
 */
function runGame(gameType)
{
    //cleat the answer box in between questions
    document.getElementById('answer-box').value = "";
    //ensure the typing cursor is in the answer box when the game is loaded
    document.getElementById('answer-box').focus();
    //creates 2 random numbers
    let num1 = Math.floor(Math.random() *25 + 1);
    let num2 = Math.floor(Math.random() *25 + 1);

    if(gameType === "addition")
    {
        displayAdditionQuestion(num1, num2);
    }
    else if (gameType === "multiply") 
    {
        displayMultiplyQuestion(num1, num2);
    }
    else if (gameType === "subtract")
    {
        displaySubtractQuestion(num1, num2);
    }
    else if (gameType === "division")
	{
	    displayDivisionQuestion(num1, num2);
	}
    else{
        alert(`Unknow game type : ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }

    
}


function checkAnswer()
{
    let userAnswer = parseInt(document.getElementById('answer-box').value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect)
    {
        alert("Hey! You got it right! :)");
        incrementScore();
    }
    else
    {
        alert(`Awwww.... you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}`);
        incrementWrongAnswer();
    }

    runGame(calculatedAnswer[1]);
}
/**
 * 
 */
function calculateCorrectAnswer()
{
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    if (operator === "+")
    {
        return [operand1 + operand2, "addition"];
    }
    else if (operator === "x")
    {
        return [operand1 * operand2, "multiply"];
    }
    else if (operator === "-")
    {
        return [operand1 - operand2, "subtract"];
    }
    else if (operator === "/")
	{
	    return [operand1 / operand2, "division"];
	}
    else
    {
        alert(`Uminplemented operator ${operator}`);
        throw `Uminplemented operator ${operator}. Aborting`;
    }
}

function incrementScore()
{
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById('score').innerText = ++oldScore;
}

function incrementWrongAnswer()
{
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById('incorrect').innerText = ++oldScore;
}


function displayAdditionQuestion(operand1, operand2)
{
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
}
function displayDivisionQuestion(operand1, operand2)
{
    let operand3 = operand1 * operand2;
    document.getElementById("operand1").textContent = operand3;
	document.getElementById("operand2").textContent = operand1;
	document.getElementById("operator").textContent = "/";
    
}

function displaySubtractQuestion(operand1, operand2)
{
    document.getElementById("operand1").textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById("operand2").textContent = operand1 > operand2 ? operand2 : operand1;
    document.getElementById('operator').textContent = "-";
}

function displayMultiplyQuestion(operand1, operand2)
{
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "x";
}