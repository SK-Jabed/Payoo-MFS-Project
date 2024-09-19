// Show The Cash Out Form
document.getElementById("show-cash-out-btn")
    .addEventListener("click", function() {
        // Show Cash Out Button Clicked
        document.getElementById("cash-out-form").classList.remove("hidden");
        // Hide The Add Money Form
        document.getElementById("add-money-form").classList.add("hidden");
    })

    // Show Add Money Form and Hide the cash Out Form
    document.getElementById("show-add-money-btn")
            .addEventListener("click", function() {
                document.getElementById("add-money-form").classList.remove("hidden");

                document.getElementById("cash-out-form").classList.add("hidden");
            })