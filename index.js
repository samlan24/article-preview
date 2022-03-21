const btn = document.querySelector('.share');
const icon = document.querySelector('.socials');
const tri = document.querySelector('.triangle');

btn.addEventListener('click', function () {
    icon.classList.toggle("open");
    tri.classList.toggle("open");
});