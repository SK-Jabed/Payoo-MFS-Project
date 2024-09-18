// Add Money to The Account
/**
 * Step-1: Add Event Handler
 * Prevent Page Reload After Form Submit 
 * Step-2: Get Money To Be Added to The Account Balance 
 */
// Add an Event Handler to The Add Money Button inside The Form
document.getElementById("add-money-btn")
    .addEventListener("click", function(event) {
        // Prevent Page Reload after Click on The Button
        event.preventDefault();
        
        // Get Money To Be Added to The Account Balance 
        const addMoneyInput = document.getElementById("input-add-money").value;
        console.log(addMoneyInput);

        // Get The Pin Number provided
        const pinNumberInput = document.getElementById("input-pin-number").value;
        console.log(pinNumberInput);

    })