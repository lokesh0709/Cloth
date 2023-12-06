const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
}
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}

var mainImg = document.getElementById("mainImg");
var sImg = document.getElementsByClassName("small-img");
sImg[0].onclick = function () {
    mainImg.src = sImg[0].src;
}
sImg[1].onclick = function () {
    mainImg.src = sImg[1].src;
}
sImg[2].onclick = function () {
    mainImg.src = sImg[2].src;
}
sImg[3].onclick = function () {
    mainImg.src = sImg[3].src;
}
