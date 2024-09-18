// document.getElementById("id").addEventListener("click", function())
// document.getElementById("login-btn")
//     .addEventListener("click", function() {})

// search: form submit reloading the page

// Step-1: Set Event Handler
document.getElementById("login-btn")
    .addEventListener("click", function(event) {
        // Step-2: Prevent Default Behavior (Prevent Reloading Browser)
        event.preventDefault();
        console.log("Login button clicked");

        // Step-3: Get The Phone Number
        const phoneNumber = document.getElementById("phone-number").value;
        console.log(phoneNumber);
    })