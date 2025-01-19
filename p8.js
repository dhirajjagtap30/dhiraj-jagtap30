// JavaScript for Form Submission (Optional)
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for contacting us!');
    // Reset form after submission
    this.reset();
});
