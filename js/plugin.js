var slideIndex = 1,
    i;
showSlides(slideIndex);

function plusSlides(n) {
    "use strict";
    showSlides(slideIndex += n);
}

function showSlides(n) {
    "use strict";
    var slides = document.getElementsByClassName("slide");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}