const form = document.getElementById('form');






form.addEventListener('submit', e => {
    e.preventDefault();

    const firstName = form['first_name'].value;
    const lastName = form['last_name'].value;
    const userEmail = form['user_email'].value;
    const password = form['password'].value;

    if(firstName === '') {
        addErrorTo('first_name', 'First Name cannot be empty');
    }
    if(lastName === '') {
        addErrorTo('last_name', 'Last Name cannot be  empty');
    }
    if(isValid(userEmail)) {
        addErrorTo('user_email', 'Looks like this is not an email');
    }
    if(password === '') {
        addErrorTo('password', 'Password cannot be empty');
    }
});


function addErrorTo(field, message) {
    const errorText = form[field].parentNode.querySelector('.error_text');
    errorText.innerText = message;
    errorText.style.opacity = '1';

};

function isValid(email) {
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return re.test(String(email).toLowerCase());
    }
