
document.getElementById("signupForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;

    try {
        const response = await fetch('https://your-heroku-backend.herokuapp.com/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        });

        const result = await response.json();
        alert(result.message);
    } catch (error) {
        console.error("Error:", error);
        alert("Something went wrong. Please try again.");
    }
});

function facebookLogin() {
    alert("Facebook login is not yet implemented.");
}

