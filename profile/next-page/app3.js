document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('.checkbox');
    checkboxes.forEach(function(checkbox) {
      checkbox.addEventListener('change', function() {
        const option = this.parentElement;
        if (this.checked) {
          option.classList.add('clicked');
        } else {
          option.classList.remove('clicked');
        }
      });
    });
  });
  