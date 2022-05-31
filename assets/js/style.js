//Menu collapse
const collapse = document.getElementsByClassName('collapse-bar')[0];
const nav = document.getElementsByClassName('nav')[0];
const cross = document.getElementsByClassName('cross')[0];

collapse.addEventListener('click', function() {
    nav.style.top = '0px';
    nav.style.left = '0px';
});


cross.addEventListener('click', function() {
    nav.style.top = '';
    nav.style.left = '';
});