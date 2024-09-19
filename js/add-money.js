/**
 * Step-1: Add event listener to the add money button (form submit)
 * Make sure to preventDefault so that page doesn't reload
 * Step-2: Get the money user wants to add 
 * Also get the pin number provided
 * Step-3: Verify the pin number.
 * If pin number is right ==> Allow to add the number to the account balance 
 * If pin number is wrong ==> A alert will Show That failed to add money
 * Step-4: Get the current balance 
 * Step-5: Add Money to be added with the current balance 
 * Step-6: Display/update the balance in the DOM/Ui
 */
document.getElementById("add-money-btn")
    .addEventListener("click", function(event) {
        // Use preventDefault so that page doesn't reload
        event.preventDefault();
        // Get the add money and pin number 
        const addMoney = document.getElementById("input-add-money").value;
        const addMoneyNumber = parseFloat(addMoney);
        const pinNumber = document.getElementById("input-pin-number").value;
        // Verify The pin number 
        if (pinNumber === "1234") {
            // adding money to the account
            const balance = document.getElementById("account-balance").innerText;
            const balanceNumber = parseFloat(balance);
            // New Balance 
            const newBalance = balanceNumber + addMoneyNumber;
            // Update the DOM with updated balance 
            document.getElementById("account-balance").innerHTML = newBalance;

        }
        else {
            alert("Failed to add money. Please try again later.")
        }
    })

