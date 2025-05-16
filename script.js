// Bootstrap form validation
(() => {
  'use strict';
  const forms = document.querySelectorAll('.needs-validation');
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      'submit',
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          event.preventDefault();
          // Handle form submission here (e.g., send data via AJAX)
          const formAlert = document.getElementById('formAlert');
          formAlert.innerHTML =
            '<div class="alert alert-success" role="alert">Your message has been sent successfully!</div>';
          form.reset();
          form.classList.remove('was-validated');
        }
        form.classList.add('was-validated');
      },
      false
    );
  });
})();
