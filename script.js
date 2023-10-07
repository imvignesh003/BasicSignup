document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmpassword = document.getElementById("confirmpassword").value;

    // Email validation using a regular expression
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
        alert("Invalid email address. Please enter a valid email.");
        return;
    }

    // Password validation
    const passwordPattern = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;
    if (!passwordPattern.test(password)) {
        alert("Invalid password. Password must be at least 8 characters long and contain at least one uppercase letter, one number, and one special character.");
        return;
    }

    if(password !== confirmpassword) {
        alert("Password and Confirmation Must Match");
        return;
    }

    alert("Signup Successful!");
});
