const closeBtn = document.querySelector('#close-btn');
const hamIcon = document.querySelector("#ham-icon");
const closeIcon = document.querySelector('#close-icon');
const navLinks = document.querySelector('#nav-links');

function hamburgerMenu () {

    // if hamIcon does not have a display of block,
    // then hide hamIcon, and show closeIcon & navLinks.
    if (hamIcon.style.display != 'none') {

        hamIcon.style.display = "none";
        closeIcon.style.display = "block";
        navLinks.style.display = "flex";

      // else show hamIcon & hide closeIcon & navLinks.  
    } else {

        hamIcon.style.display = "block";
        closeIcon.style.display = "none";
        navLinks.style.display = "none";

    }
}

closeBtn.addEventListener('click', e => {

    hamburgerMenu();
})

addEventListener("resize", (e) => {

    if (window.screen.width >= 600) {
        navLinks.style.display = "flex";
        console.log('nav links showing');
    } else if (hamIcon.style.display != 'none') {
        navLinks.style.display = "none";
    }
})