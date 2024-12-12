let totalBudget = 0

const categories = ["entertainment", "clothes", "bills", "food"]
const categorySpends = {
    "entertainment": 0,
    "clothes": 0, 
    "bills": 0, 
    "food": 0
}

//Update the remaining budget
const updateRemainingBudget = e => {
    e.preventDefault()
    const totalSpent = Object.values(categorySpends).reduce((sum, value) => sum + value, 0)
    const remainingBudget = totalBudget - totalSpent
    document.getElementById(".remaining").innerText = `Remaining Budget: $${remainingBudget}`

    if (remainingBudget < 0) {
        alert("You are over budget!")
    }
}
//clear and reset the inputs!
const clearInputs = e => {
    e.preventDefault()
    document.getElementById("category").forEach(input => {
        input.value = ""
    })
    for (let category in categorySpent) {
        categorySpent[category] = 0
    }
    updateRemainingBudget()
}
//save and display budget inputs:
const userInput = document.getElementById("userInput");
const saveButton = document.getElementById("save");
const displayArea = document.getElementById("display");
saveButton.addEventListener("click", e => {
    e.preventDefault()
    for (const inputId of categories) {
        const input = document.getElementById(inputId)
        const span = document.getElementById(inputId + "-amount")
        if (input.value !== "") {
            categorySpends[inputId] += +input.value
            span.innerText = "$" + categorySpends[inputId]
        }
        input.value = ""
    }

});


//update the spending and the remaining budget...
const updateSpending = () => {
    document.getElementById("category").forEach(input => {
        const category = input.classList[1] // the second class in the category
        const value = input.value ? +input.value : 0 //+input converts the string to a number. if input has a number in it, the value will be the number in the input, else value is 0
        categorySpent[category] = value //assign the value to category, update the spending...
    })

    updateRemainingBudget()
}
//event listeners for buttons!

document.getElementById("submit").addEventListener("click", updateSpending)

document.getElementById("clear").addEventListener("click", clearInputs)

document.getElementById("reset").addEventListener("click", e => {
    e.preventDefault()
    totalBudget = 0
    document.getElementById("total").value = ""
    clearInputs()
})
//event listener for the input and total budget, convert the input from a string to a number
document.getElementById("total").addEventListener("input", () => {
    totalBudget = +document.getElementById("total").value //convert the input from string to a number, 
    updateRemainingBudget()
})