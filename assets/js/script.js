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
                alert("You clicked Submit!");
            }
            else
            {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
           
        })
    }
})
/** 
 * the main game loop, called when the script is fist loaded
 */
function runGame()
{
    //creates 2 random numbers
    let num1 = Math.floor(Math.random() *25 + 1);
    let num2 = Math.floor(Math.random() *25 + 1);
}


function checkAnswer()
{

}

function calculateCorrectAnswer()
{

}

function incrementScore()
{

}

function incrementWrongAnswer()
{

}

function displayAdditionQuestion()
{

}

function displaySubtractQuestion()
{

}

function displayMultiplyQuestion()
{

}