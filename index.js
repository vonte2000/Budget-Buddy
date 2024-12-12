let totalBudget = 0
let categorySpent = {
    entertainment: 0,
    clothes: 0,
    bills: 0,
    food: 0,
}
let totalEntertainmentSpent = 0
let totalClothesSpent = 0
let totalBillsSpent = 0
let totalFoodSpent = 0

//Update the remaining budget
const updateRemainingBudget = () => {
    const totalSpent = Object.values(categorySpent).reduce((sum, value) => sum + value, 0)
    const remainingBudget = totalBudget - totalSpent
    document.querySelector(".remaining-budget").innerText = `Remaining Budget: $${remainingBudget}`

    const trackerDiv = document.querySelector(".remaining-budget-tracker");
    if (totalBudget > 0) {
        const percentage = remainingBudget / totalBudget;
        const totalCharas = 10; // give the total max number of characters that track remaining budget
        const charaCount = Math.max(0, Math.floor(percentage * totalCharas));
        trackerDiv.innerText = "$".repeat(charaCount);
    } else {
        trackerDiv.innerText = ""; // clear so no tracking characters if no number
    }

//if over budget alert here ... change to modal box?
    if (remainingBudget < 0) {
        alert("You are over budget! :(")
    }
}
//clear and reset the inputs!
const clearInputs = () => {
    document.querySelectorAll(".category").forEach(input => {
        input.value = ""
    })
    for (let category in categorySpent) {
        categorySpent[category] = 0
    }
    updateRemainingBudget()
}
//update the spending and the remaining budget...
const updateSpending = () => {
    document.querySelectorAll(".category").forEach(input => {
        const category = input.classList[1] // the second class in the category
        const value = input.value ? +input.value : 0 //+input converts the string to a number. if input has a number in it, the value will be the number in the input, else value is 0
        categorySpent[category] = value //assign the value to category, update the spending...
    })

    updateRemainingBudget()
}
//event listeners for buttons!

document.querySelector(".submit-btn").addEventListener("click", updateSpending)

document.querySelector(".clear-btn").addEventListener("click", clearInputs)

document.querySelector(".reset-btn").addEventListener("click", () => {
    totalBudget = 0
    document.querySelector(".total-budget").value = ""
    clearInputs()
})
//event listener for the input and total budget, convert the input from a string to a number
document.querySelector(".total-budget").addEventListener("input", () => {
    totalBudget = +document.querySelector(".total-budget").value //convert the input from string to a number, 
    updateRemainingBudget()
})