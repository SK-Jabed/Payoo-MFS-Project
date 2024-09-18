// Add Money to The Account
/**
 * Step-1: Add Event Handler
 * Prevent Page Reload After Form Submit 
 * Step-2: Get Money To Be Added to The Account Balance 
 * Get The Pin Number
 * Step-3: Verify The Pin Number 
 * If Pin Number is Right ==> Allow to add the number to Account Balance 
 * If Pin Number is Wrong ==> Alert --> Failed to Add Money! Please Try again 
 * Step-4: Get The Current Balance 
 * Step-5: Add  addMoneyInput with accountBalance
 * Step-6: Update The Balance in The UI/DOM
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

        // Verify Pin Number
        // Wrong Way To Validate PIn Number 
        if (pinNumberInput === "1234") {

            // Step-4: Get The Current Balance 
            const accountBalance = document.getElementById("account-balance").innerText;
            console.log(accountBalance);

            // Step-5: Add  addMoneyInput with accountBalance
            const addMoneyNumber = parseFloat(addMoneyInput);
            const accountBalanceNumber = parseFloat(accountBalance);
            const newBalance = addMoneyNumber + accountBalanceNumber;
            console.log(newBalance);

            // Step-6: Update The Balance in The UI/DOM
            document.getElementById("account-balance").innerText = newBalance;
        }
        else {
            alert("Failed to Add Money! Please Try again");
        }

    })