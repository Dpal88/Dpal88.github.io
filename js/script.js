// hamburger menu variables
const hamBtn = document.querySelector('#ham-btn');
const hamIcon = document.querySelector("#ham-icon");
const closeIcon = document.querySelector('#close-icon');
const navLinks = document.querySelector('#nav-links');
const anchors = document.querySelectorAll('.nav-links span a');

// form input variables
const inputMsg = document.querySelector('textarea');
const nameInput = document.querySelector('input[type=text]');
const emailInput = document.querySelector('input[type=email]');
const formButton = document.querySelector('form button');
const contactForm = document.querySelector('form');
const inputs = [nameInput, emailInput, inputMsg];

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

// Loops through the inputs array and checks if any of the inputs
// nextElementSibling has a class of 'active', else add 1 to num variable.
// if all inputs are correctly filled out, num will = 3 and form will submit.
function formValidation() {
    let num = 0;
    inputs.forEach(input => {
        if ( input.nextElementSibling.classList.contains('active') ) {
            console.log('Please make sure all fields are correctly filled out!')
            return false;
        } else {
            num ++;
        }
    })
    console.log(num);
    if (num === 3) {
        contactForm.submit();
        setTimeout( () => {
            contactForm.reset();
        }, 1000)
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
    formValidation();

})



nameInput.addEventListener('keydown', e => {
    const target = e.target;
    const key = e.key;
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

function hamMenuActive () {
    if ( hamIcon.style.display === 'none' || hamIcon.classList.contains('hide') ) {
        hamIcon.classList.remove('hide');
        closeIcon.classList.remove('active-block');
        navLinks.classList.remove('active-flex');
        console.log("remove close icon");

        
    } else {
        hamIcon.classList.add('hide');
        closeIcon.classList.add('active-block');
        navLinks.classList.add('active-flex');
        console.log("remove ham icon");
    }
}

anchors.forEach(anchor => {
    anchor.addEventListener('click', e => {
        hamIcon.classList.remove('hide');
        closeIcon.classList.remove('active-block');
        navLinks.classList.remove('active-flex');
    })
})

hamBtn.addEventListener('click', e => {

    hamMenuActive();
})


// addEventListener("resize", (e) => {
//     screenResize();
// })



// cards slide animation ----------------------------------------------------------------------------------

const observer = new IntersectionObserver( (entries) => {
    entries.forEach( (entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
})

const cards = document.querySelectorAll('.card');
cards.forEach( (card) => {
    observer.observe(card);
})