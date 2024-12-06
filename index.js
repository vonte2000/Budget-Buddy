//variables
let totalBudget = 0
let entertainmentSpent = 0
let clothesSpent = 0
let billsSpent = 0
let foodSpent = 0

//update the remaining budget here
const updateRemainingBudget = () => {
    const totalSpent = entertainmentSpent + clothesSpent + billsSpent + foodSpent
    const remainingBudget = totalBudget - totalSpent

//update the display of the remaining budget, temporarily make text, but nth a colored bar
document.getElementById("remaining-budget").innerText = `Remaining Budget $${remainingBudget}`}

//check if over budget using if/else statement
if (remainingBudget < 0) {
    alert("You're over budget!")
}

//function to update spending (which will update remaining budget)

//KEVIN: function for entertainmentSpent (totalEntertainmentSpent) += itself + entertainmentSpent
//same for other categories
//must display how much each category is eating into budget in a percentage (make this just text for now, nth a graphic)

//function to clear the category inputs (select all the inputs and reset them)

//function for the total budget input

//event listener for submit button
document.getElementById("submit-btn").addEventListener("click", ) //name of function that handles the submit button() after the comma

//event listener for enter key, for entire document
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault()
        () //name for the function that updates the spending goes in the ()
    }
})

//event listener to clear button
document.getElementById("clear-btn").addEventListener("click", ) //name for function that clears the inputs goes after the comma

//event listener to total budget input field
document.getElementById("total-budget").addEventListener("input", ) //name for function that updates spending goes after the comma