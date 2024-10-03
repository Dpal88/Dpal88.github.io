// hamburger menu variables
const hamBtn = document.querySelector('#ham-btn');
const hamIcon = document.querySelector("#ham-icon");
const closeIcon = document.querySelector('#close-icon');
const navLinks = document.querySelector('#nav-links');

// form input variables
const inputMsg = document.querySelector('textarea');
const nameInput = document.querySelector('input[type=text]');
const emailInput = document.querySelector('input[type=email]');
const formButton = document.querySelector('form button');

// form input functions ----------------------------------------------------------------------------------

// if input that is passed into function has not been filled out,
// then show error icon and error text. else remove error icon / text.
function active (input) {
    if (input.value === "") {
            
        input.style.border = '1px solid hsl(0, 100%, 74%)';
        // targets error icon
        input.nextElementSibling.classList.add('active');
        // targets error text
        input.nextElementSibling.nextElementSibling.classList.add('active');

    } else {

        input.style.border = '1px solid #DEDEDE';
        input.nextElementSibling.classList.remove('active');
        input.nextElementSibling.nextElementSibling.classList.remove('active');

    }
}


/**
 * if user types anything but tab, then remove error icon / text.
 * else if user presses tab then run function for input that checks if 
 * input field is filled out or filled out correctly
 * 
 * 
 * @param {function} callback - callback function that will check if input field is filled out or correctly formatted
 * @param {string} key - event.key
 * @param {object} target - event.target
 */
function keyPress(callback, key, target) {
    if (key != 'Tab') {
        target.nextElementSibling.classList.remove('active');
        target.nextElementSibling.nextElementSibling.classList.remove('active');
    } else {
        callback;
    }
}

function checkEmailInput () {
    // if returns true
    // The presence of an “@” symbol, separating the local part from the domain part.
    // The presence of a domain part with at least one dot, indicating a domain extension.
    // No leading, trailing, or consecutive whitespace characters within the email address.
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {

        emailInput.style.border = '1px solid #DEDEDE';
        emailInput.nextElementSibling.classList.remove('active');
        emailInput.nextElementSibling.classList.remove('active');

    } else if (emailInput.value === "") {

        emailInput.style.border = '1px solid hsl(0, 100%, 74%)';
        // targets error icon
        emailInput.nextElementSibling.classList.add('active');
        // targets error text
        emailInput.nextElementSibling.nextElementSibling.classList.add('active');
        emailInput.nextElementSibling.nextElementSibling.textContent = "Please enter your email.";

    } else {

        emailInput.style.border = '1px solid hsl(0, 100%, 74%)';
        // targets error icon
        emailInput.nextElementSibling.classList.add('active');
        // targets error text
        emailInput.nextElementSibling.nextElementSibling.classList.add('active');
        emailInput.nextElementSibling.nextElementSibling.textContent = "Email is not valid.";

    }
}

// form input event listeners ----------------------------------------------------------------------------------

formButton.addEventListener('click', e => {
    e.preventDefault();

    // checks name input
    active(nameInput);
    // checks textarea element
    active(inputMsg);
    // checks for a valid email
    checkEmailInput();

    // if form does not have any errors than send email

    console.log('button clicked');
})



nameInput.addEventListener('keydown', e => {
    const target = e.target;
    const key = e.key;
    console.log(typeof target);
    console.log(typeof key);
    keyPress(active(target), key, target);
})

emailInput.addEventListener('keydown', e => {
    const target = e.target;
    const key = e.key;
    keyPress(checkEmailInput(), key, target);
})

inputMsg.addEventListener('keydown', e => {
    const target = e.target;
    const key = e.key;
    keyPress(active(target), key, target);
})

// hamburger menu functions ----------------------------------------------------------------------------------

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