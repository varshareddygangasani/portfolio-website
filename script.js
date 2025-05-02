document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Collect form data
    const userName = document.getElementById('name').value;
    const userEmail = document.getElementById('email').value;
    const userWebsite = document.getElementById('website').value || 'N/A';
    const userMessage = document.getElementById('message').value;

    // Initialize EmailJS with your Public Key
    emailjs.init('sC0eJDQEmzsYNWn0r'); // Replace with your Public Key

    // Email parameters for sending the message to you
    const emailParamsToYou = {
        name: userName,
        email: userEmail,
        website: userWebsite,
        message: userMessage,
    };

    // Email parameters for confirmation to user
    const emailParamsToUser = {
        name: userName,
        email: userEmail,
    };

    // Send email to you (your email)
    emailjs.send('service_iw1rmgb', 'template_uks4kzv', emailParamsToYou)
        .then(function(response) {
            console.log('Message sent to you!', response.status, response.text);
        }, function(error) {
            console.error('Failed to send to you...', error);
            alert('Oops! Something went wrong while sending the message. Please try again later.');
        });

    // Send confirmation email to user
    emailjs.send('service_iw1rmgb', 'template_dd1tzil', emailParamsToUser)
        .then(function(response) {
            console.log('Confirmation sent to user!', response.status, response.text);
            alert('Your message has been sent successfully! You’ll receive a confirmation email shortly.');
            document.getElementById('contactForm').reset(); // Clear the form
        }, function(error) {
            console.error('Failed to send confirmation...', error);
            alert('Oops! Something went wrong while sending the confirmation. Please try again later.');
        });
});
function myFunction() {
    var x = document.getElementById("myLinks");
    x.classList.toggle("active");
}