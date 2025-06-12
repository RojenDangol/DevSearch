// Invoke Functions Call on Document Loaded
//document.addEventListener('DOMContentLoaded', function () {
//  hljs.highlightAll();
//});
//
//
//let alertWrapper = document.querySelector('.alert')
//let alertClose = document.querySelector('.alert__close')
//
//if (alertWrapper) {
//  alertClose.addEventListener('click', () =>
//    alertWrapper.style.display = 'none'
//  )
//}

// Invoke Functions Call on Document Loaded
document.addEventListener('DOMContentLoaded', function () {
  // Highlight code blocks if hljs is loaded
  if (typeof hljs !== 'undefined') {
    hljs.highlightAll();
  }

  // Select all alert elements
  const alertWrappers = document.querySelectorAll('.alert');

  alertWrappers.forEach((alertWrapper) => {
    const closeBtn = alertWrapper.querySelector('.alert__close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        // Add fade-out class
        alertWrapper.classList.add('fade-out');

        // Wait for the transition to complete before hiding
        setTimeout(() => {
          alertWrapper.style.display = 'none';
        }, 300); // Must match CSS transition duration
      });
    }
  });
});


