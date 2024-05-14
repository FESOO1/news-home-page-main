const openMenuBtn = document.getElementById('openBtn');
const closeMenuBtn = document.getElementById('closeBtn');
const menuLinks = document.getElementById('menuLinks');


openMenuBtn.addEventListener('click', function() {
    menuLinks.style.display = 'unset'
});

closeMenuBtn.addEventListener('click', function() {
    menuLinks.style.display = 'none'
});