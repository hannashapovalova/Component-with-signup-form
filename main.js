const form = document.getElementById('form');






form.addEventListener('submit', e => {
    e.preventDefault();

    const firstName = form['first_name'].value;
    const lastName = form['last_name'].value;
    const userEmail = form['user_email'].value;
    const password = form['password'].value;

    if(firstName === '') {
        addError('first_name', 'First Name cannot be empty');
    } else {
        removeError('first_name');
    }


    if(lastName === '') {
        addError('last_name', 'Last Name cannot be  empty');
    } else {
        removeError('last_name')
    }


    if(userEmail === '') {
        addError('user_email', 'Email cannot be  empty');
    } else if (!isValid(userEmail)) {
        addError('user_email', 'Looks like this is not an email');
    } else {
        removeError('user_email')
    }


    if(password === '') {
        addError('password', 'Password cannot be empty');
    } else {
        removeError('password')
    }
});


function addError(field, message) {
    const errorText = form[field].parentNode.querySelector('.error_text');
    errorText.innerText = message;
    errorText.style.opacity = '1';

};

function removeError(field) {
    const errorText = form[field].parentNode.querySelector('.error_text');
    errorText.style.opacity = '0';
};



function isValid(userEmail) {
    return String(userEmail)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }


