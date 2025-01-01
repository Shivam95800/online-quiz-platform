
// Elements
const signupSection = document.getElementById('signup-section');
const signinSection = document.getElementById('signin-section');
const mainContent = document.getElementById('main-content');
const goToSignup = document.getElementById('go-to-signup');
const goToSignin = document.getElementById('go-to-signin');
const signupSubmit = document.getElementById('signup-submit');
const signinSubmit = document.getElementById('signin-submit');

// Switch to Sign Up
goToSignup.addEventListener('click', () => {
    signinSection.classList.add('hide');
    signupSection.classList.remove('hide');
});

// Switch to Sign In
goToSignin.addEventListener('click', () => {
    signupSection.classList.add('hide');
    signinSection.classList.remove('hide');
});

// Handle Sign Up
signupSubmit.addEventListener('click', () => {
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

    if (username && password) {
        localStorage.setItem('user', JSON.stringify({ username, password }));
        alert('Sign Up successful! Please Sign In.');
        signupSection.classList.add('hide');
        signinSection.classList.remove('hide');
    } else {
        alert('Please fill out all fields.');
    }
});

// Handle Sign In
signinSubmit.addEventListener('click', () => {
    const username = document.getElementById('signin-username').value;
    const password = document.getElementById('signin-password').value;
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.username === username && storedUser.password === password) {
        alert('Sign In successful!');
        signinSection.classList.add('hide');
        mainContent.classList.remove('hide');
    } else {
        alert('Invalid credentials. Please try again.');
    }
});
