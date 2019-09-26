"use strict";

const hamburger = document.querySelector('.hamburger');         // selects hamburger icon.
const navLinks = document.querySelector('.nav-links');          // selects nav-links element
const links = document.querySelectorAll(".nav-links li");       // selects all the li's in nav-links

hamburger.addEventListener("click", function(event) {            // on click of the hamburger icon...
    navLinks.classList.toggle('open');                           // toggle the "open" style
    links.forEach(function(link) {
        link.classList.toggle('fade');
    });
});

