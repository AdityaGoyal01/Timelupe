document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("register-btn").addEventListener("click", function (event) {
        event.preventDefault();
        let username = document.getElementById("signup-username").value.trim();
        let password = document.getElementById("signup-password").value.trim();

        if (!username || !password) {
            alert("Please enter both username and password.");
            return;
        }

        let users = JSON.parse(localStorage.getItem("users")) || {}; // Retrieve users object
        if (users[username]) {
            alert("Username already exists! Try logging in.");
        } else {
            users[username] = password; // Store user
            localStorage.setItem("users", JSON.stringify(users)); // Save to localStorage
            alert("Registration successful! You can now log in.");
        }
    });

    document.getElementById("login-btn").addEventListener("click", function (event) {
        event.preventDefault();
        let username = document.getElementById("signup-username").value.trim();
        let password = document.getElementById("signup-password").value.trim();

        if (!username || !password) {
            alert("Please enter both username and password.");
            return;
        }

        let users = JSON.parse(localStorage.getItem("users")) || {}; // Retrieve users object
        if (users[username]) {
            if (users[username] === password) {
                localStorage.setItem("loggedInUser", username); // Save logged-in user
                alert("Login successful!");
                window.location.href = "dashboard.html"; // Redirect to dashboard
            } else {
                alert("Incorrect password.");
            }
        } else {
            alert("User not found. Please register first.");
        }
    });
});
