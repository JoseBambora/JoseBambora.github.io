window.onscroll = function() {scrollFunction()};

height = 0

document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.getElementById("top");
    height = navbar.offsetTop
});

function fix(element, height) {
    if (window.pageYOffset > height) {
        element.classList.add("fixed");
    } else {
        element.classList.remove("fixed");
    }
    
}

function scrollFunction() {
    var navbar = document.getElementById("top");
    fix(navbar,height)
}

function section(sec)
{
    var sec = document.getElementById(sec);
    window.scrollTo({
        top: sec.offsetTop - height,
        behavior: 'smooth'
    });
    sec.classList.add('highlight');

    setTimeout(function() {
        sec.classList.remove('highlight');
    }, 1000);

}