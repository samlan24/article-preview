const btn = document.querySelector('.share');
const icon = document.querySelector('.social-icons');

btn.addEventListener('click', function () {
    icon.classList.toggle("open")
});