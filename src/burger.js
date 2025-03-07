const overlay = document.querySelector('.overlay');
const burgerToggle = document.getElementById('burger-toggle');
const menuLinks = document.querySelectorAll('.ulWow a');

function closeMenu() {
  burgerToggle.checked = false;
  const ulWow = document.querySelector('.ulWow');
  ulWow.style.top = '-100%';
}

function openMenu() {
  const ulWow = document.querySelector('.ulWow');
  ulWow.style.top = '0'; 
}

burgerToggle.addEventListener('change', () => {
  if (burgerToggle.checked) {
    openMenu();
  } else {
    closeMenu();
  }
});

menuLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});

overlay.addEventListener('click', closeMenu);
