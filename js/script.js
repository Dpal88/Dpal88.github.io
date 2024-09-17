const hamBtn = document.querySelector('#ham-btn');
const hamIcon = document.querySelector("#ham-icon");
const closeIcon = document.querySelector('#close-icon');
const navLinks = document.querySelector('#nav-links');

function hamburgerMenu () {

    // if hamIcon display is not set to none,
    // then hide hamIcon, and show closeIcon & navLinks.
    if (hamIcon.style.display != 'none') {

        hamIcon.style.display = "none";
        closeIcon.style.display = "block";
        navLinks.style.display = "flex";
        // navLinks.classList.add("active-flex");

      // else show hamIcon & hide closeIcon & navLinks.  
    } else {

        hamIcon.style.display = "block";
        closeIcon.style.display = "none";
        navLinks.style.display = "none";
        // navLinks.classList.add("hide");

    }
}

function changeScreen() {
    if (window.screen.width >= 600) {
        navLinks.classList.remove("hide");
        navLinks.classList.add("active-flex");
        console.log('over 600px');
    } else if (window.screen.width <= 599 && hamIcon.style.display != 'none') {
        navLinks.classList.remove("active-flex");
        navLinks.classList.add("hide");
        console.log('under 600px');

    }
}

// function hamMenu() {
//     if (hamIcon.style.display != 'none') {
//         hamIcon.classList.add("hide");
//         closeIcon.classList.add("active-block");
//         navLinks.classList.add("active-flex");
//     } else {
//         hamIcon.classList.remove("hide");
//         closeIcon.classList.remove("active-block");
//         navLinks.classList.remove("active-flex");
//     }
// }

function screenResize() {
    // if window screen is greater than or equal to 600,
    // then set navLinks to display flex. else if hamIcon
    // is displayed, set navLinks to display none.
    // & if closeIcon is showing, set navLinks to display flex.
    // (this fixes any issues if user goes back and fourth between screen sizes)
    if (window.screen.width <= 599 && hamIcon.style.display != 'none') {
        navLinks.style.display = "none";
        console.log('over 600px');
    } else if (window.screen.width >= 600) {
        navLinks.style.display = "flex";
        console.log('over 600px');
    }

    
    // else if (hamIcon.style.display != 'none') {
    //     navLinks.style.display = "none";
    // } else if (closeIcon.style.display != 'none') {
    //     navLinks.style.display = "flex";
    // }
}



hamBtn.addEventListener('click', e => {

    hamburgerMenu();
})


addEventListener("resize", (e) => {
    screenResize();
    // changeScreen();
})

// try enabling navLinks with classes instead of setting style inline