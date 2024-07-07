// Get the input and output elements
const inputOutput = document.getElementById('in-out-sec');
// Function to update the input/output display
function updateDisplay(value) {
    inputOutput.value = value;
}
// Function to perform calculation
function calculate() {
    try {
        // Evaluate the expression
        const result = eval(inputOutput.value);
        // Update the display with the result
        updateDisplay(result);
    } catch (error) {
        // Handle any errors
        updateDisplay('Error');

    }
    
}

// Get all the calculator buttons
const buttons = document.querySelectorAll('.cal-icon input[type="button"]');
const uniValues = document.querySelectorAll('.cal-icon input[id="calValue"]');

// Add event listeners to all buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonValue = button.value;
        // Handle '=' button separately for calculation
        if (buttonValue === '=') {
            calculate();
        } else if (buttonValue === 'C') {
            // Delete the last character from the input/output display
            inputOutput.value = inputOutput.value.slice(0, -1);
        } else if (buttonValue === 'AC') {
            // Clear the entire input/output display
            inputOutput.value = '';
        } else if (buttonValue === 'x^2') {
            // Delete the last character from the input/output display
            inputOutput.value = inputOutput.value * inputOutput.value;
        }else if (buttonValue === '1/x') {
            // Delete the last character from the input/output display
            inputOutput.value = 1/inputOutput.value;
        }
        else if (buttonValue === 'sqrt') {
            // Delete the last character from the input/output display
            inputOutput.value = Math.sqrt(inputOutput.value);
        }
        else {
            // Append the clicked button's value to the input/output display
            inputOutput.value += buttonValue;
        }
    });
});
