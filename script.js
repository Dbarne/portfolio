document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

$(document).ready(function () {
  $('form').submit(function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the form data
    var name = $('#name-input').val();
    var email = $('#email-input').val();
    var message = $('#message-area').val();

    // Create an object to hold the form data
    var formData = {
      name: name,
      email: email,
      message: message
    };

    // Send the AJAX request
    $.ajax({
      url: 'https://mail.google.com', // Replace with the actual endpoint URL
      type: 'POST',
      data: formData,
      success: function (response) {
        // Handle the success response
        $('#success-message').text('Form submitted successfully!');
        $('#error-message').text(''); // Clear any previous error message
      },
      error: function (xhr, status, error) {
        // Handle the error response
        $('#error-message').text('Error sending email: ' + error);
        $('#success-message').text(''); // Clear any previous success message
      }
    });
  });
});
