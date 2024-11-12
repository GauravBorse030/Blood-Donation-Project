function showSignUp() {
    document.getElementById("sign-up").style.display = "block";
    document.getElementById("login").style.display = "none";
}

function showLogin() {
    document.getElementById("login").style.display = "block";
    document.getElementById("sign-up").style.display = "none";
}

function signUp() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const phoneNumber = document.getElementById("phone-number").value;
    const bloodType = document.getElementById("blood-type").value;

    console.log("Sign up form submitted:", { name, email, password, phoneNumber, bloodType });
    alert("Sign-up successful! Thank you for your interest.");
}

function logIn() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    console.log("Log in form submitted:", { email, password });
    alert("Login successful! Welcome back.");
}
