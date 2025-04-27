document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Collect form data
    const userName = document.getElementById('name').value;
    const userEmail = document.getElementById('email').value;
    const userWebsite = document.getElementById('website').value || 'N/A'; // Handle optional field
    const userMessage = document.getElementById('message').value;

    // Initialize EmailJS with your Public Key
    emailjs.init('sC0eJDQEmzsYNWn0r'); // Replace with your EmailJS Public Key

    // Set up the email parameters
    const emailParams = {
        name: userName,
        email: userEmail,
        website: userWebsite,
        message: userMessage,
    };

    // Send the email
    emailjs.send('service_iw1rmgb', 'template_dd1tzil', emailParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Your message has been sent successfully!');
            document.getElementById('contactForm').reset(); // Clear the form
        }, function(error) {
            console.error('FAILED...', error);
            alert('Oops! Something went wrong. Please try again later.');
        });
});