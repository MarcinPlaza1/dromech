const dropdown = document.querySelectorAll('.dropdown');
const dropdownArray = Array.from(dropdown);

dropdownArray.forEach(el => {
  const button = el.querySelector('.dropdown-toggle');
  const menu = el.querySelector('.dropdown-menu');
  const arrow = button.querySelector('.dropdown-toggle > .icon-arrow');

  button.addEventListener('click', event => {
    menu.classList.toggle('show');
    arrow.classList.toggle('open');
    event.preventDefault();
  });
});
