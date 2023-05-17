document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

(function() {
  emailjs.init('_xWo3mpzvZksO-sei');
  
  $('form').submit(function(event) {
      event.preventDefault();
      
      var name = $('#name-input').val();
      var email = $('#email-input').val();
      var message = $('#message-area').val();
      
      var templateParams = {
          from_name: name,
          from_email: email,
          message: message
      };
      
      emailjs.send('service_yc4wkze', 'template_w4cf9q4', templateParams)
          .then(function(response) {
              // Email sent successfully
              $('#success-message').text('Form submitted successfully!');
              $('#error-message').text('');
              $('#name-input').val('');
              $('#email-input').val('');
              $('#message-area').val('');
          }, function(error) {
              // Error sending email
              $('#error-message').text('Error sending email: ' + error);
              $('#success-message').text('');
          });
  });
})();
