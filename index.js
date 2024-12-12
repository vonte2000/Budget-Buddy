let totalBudget = 0
let resetting = false // Flag to suppress alerts during reset

const categories = ["entertainment", "clothes", "bills", "food"]
const categorySpent = {
    entertainment: 0,
    clothes: 0,
    bills: 0,
    food: 0
}

// Function to open the modal
const openModal = () => {
    const modal = document.getElementById("modal")
    modal.style.display = "flex" // Show the modal
}

// Function to close the modal
const closeModal = () => {
    const modal = document.getElementById("modal")
    modal.style.display = "none" // Hide the modal
}

// Attach event listener to the close button
document.getElementById("close-modal").addEventListener("click", closeModal)

// Update the remaining budget
const updateRemainingBudget = () => {
    const totalSpent = Object.values(categorySpent).reduce((sum, value) => sum + value, 0)
    const remainingBudget = totalBudget - totalSpent
    document.getElementById("remaining").innerText = `Remaining Budget: $${remainingBudget}`

    const trackerDiv = document.querySelector(".remaining-budget-tracker")
    if (totalBudget > 0) {
        const percentage = remainingBudget / totalBudget
        const totalCharas = 10 // max number of characters to track remaining budget
        const charaCount = Math.max(0, Math.floor(percentage * totalCharas))
        trackerDiv.innerText = "$".repeat(charaCount)
    } else {
        trackerDiv.innerText = "" // clear tracker if no budget
    }

    // Open modal if over budget
    if (!resetting && remainingBudget < 0) {
        openModal()
    }
}

// Clear the category inputs and spans
const clearInputs = () => {
    document.querySelectorAll(".category").forEach(input => {
        input.value = "" // Clear input fields
    })

    // Clear the spans showing category amounts
    for (const category of categories) {
        const span = document.getElementById(`${category}-amount`)
        span.innerText = "" // Clear the span text
    }

    // Reset categorySpent and update the remaining budget
    for (const category in categorySpent) {
        categorySpent[category] = 0
    }
    updateRemainingBudget()
}

// Reset the inputs and remaining budget
const resetInputs = () => {
    for (const inputId of categories) {
        const span = document.getElementById(inputId + "-amount")
        span.innerText = "" // Clear category spans
    }
    clearInputs() // Clear input fields
}

// Save and display budget inputs
const saveButton = document.getElementById("save")
saveButton.addEventListener("click", e => {
    e.preventDefault()
    for (const inputId of categories) {
        const input = document.getElementById(inputId)
        const span = document.getElementById(inputId + "-amount")
        if (input.value !== "") {
            categorySpent[inputId] += +input.value // Add to categorySpent
            span.innerText = "$" + categorySpent[inputId] // Update the span
        }
        input.value = "" // Clear the input field
    }
    updateRemainingBudget()
})

// Event listeners for buttons
document.getElementById("clear").addEventListener("click", clearInputs)

document.getElementById("reset").addEventListener("click", () => {
    resetting = true // Start resetting
    totalBudget = 0
    document.getElementById("total").value = ""
    for (const category in categorySpent) {
        categorySpent[category] = 0 // Reset all category spending
    }
    resetInputs()
    updateRemainingBudget()
    resetting = false // End resetting
})

// Update total budget and remaining budget on input
document.getElementById("total").addEventListener("input", () => {
    totalBudget = +document.getElementById("total").value // Convert input to a number
    updateRemainingBudget()
})