document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');

  menuToggle.addEventListener('change', function() {
    if (menuToggle.checked) {
      menu.classList.add('is-open');
    } else {
      menu.classList.remove('is-open');
    }
  });
});