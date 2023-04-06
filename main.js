function main() {
    var burgerIcon = document.querySelector('.burger-icon');
    var menu = document.querySelector('.nav-menu');

    var handleOnClick = function handleOnClick(e) {
        var target = e.target;

        if(burgerIcon.contains(target)) {
            menu.classList.toggle('open')
        }
    }
    document.addEventListener('click', handleOnClick);

    function getRandom255() {
        return Math.random() * 255;
    }
    /* For fun, I guess */
    var cards = document.querySelectorAll('.card');
    if(cards.length > 0) {
        cards.forEach((e) => {
            e.style.backgroundColor = "RGB(" + getRandom255() + ", " + getRandom255() + ", " + getRandom255() + ")"; 
        })
    }
}
document.addEventListener("DOMContentLoaded", main)