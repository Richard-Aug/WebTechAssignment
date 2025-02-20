// Scroll to About section
function scrollToSection() {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
}

// Form validation
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        document.getElementById('form-response').textContent = "Thank you for reaching out!";
        document.getElementById('form-response').style.color = "green";
        this.reset();
    } else {
        document.getElementById('form-response').textContent = "Please fill out all fields.";
        document.getElementById('form-response').style.color = "red";
    }
});
