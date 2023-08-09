console.log(`connected to index.html`);
let emailInput = document.querySelector('#emailInput');
let passwordInput = document.querySelector('#passwordInput');

let loginBtn = document.querySelector('#loginBtn');
let usersContainer = [];

if (localStorage.getItem('users') != null) {
  usersContainer = JSON.parse(localStorage.getItem('users'));
}

function validateEmail(email) {
  let regex = /^[a-zA-Z0-9]{1,}@[a-zA-Z]{2,}.[a-zA-z]{2,}$/;
  if (regex.test(email)) {
    return true;
  } else {
    Swal.fire({
      icon: 'error',

      title: 'Sorry, the email should be vaild',
      text: 'Ex: adam@me.com',
    });
    console.log('sry ur name should be 3 letters atleast');
  }
}

function validatePassword(password) {
  let regex = /[a-zA-Z0-9]{3,}/;
  if (regex.test(password)) {
    return true;
  } else {
    Swal.fire({
      icon: 'error',

      title: 'Sorry, the password should be 3 letters or digits atleast',
      text: 'Ex: 123',
    });
  }
}

function checkEmail() {
  if (
    validateEmail(emailInput.value) &&
    validatePassword(passwordInput.value)
  ) {
    console.log('email and password ok');
  } else {
    return false;
  }

  for (let i = 0; i < usersContainer.length; i++) {
    if (
      emailInput.value.toLowerCase() == usersContainer[i].email.toLowerCase()
    ) {
      console.log('matched emails');
      if (
        passwordInput.value.toLowerCase() ==
        usersContainer[i].password.toLowerCase()
      ) {
        // console.log('matched passwords');
        localStorage.setItem('logedUser', usersContainer[i].name);
        window.location = './userpage.html';
      } else {
        document.getElementById('validation-error-msg').innerHTML =
          'password not match';
      }
    } else {
      document.getElementById('validation-error-msg').innerHTML =
        'email not registerd';
      console.log('email not registerd');
    }
  }
  // clearForm();
  // console.log(`sry this email not regestired`);
}

function clearForm() {
  emailInput.value = '';
  passwordInput.value = '';
}

function login() {
  loginBtn.setAttribute('href', 'userpage.html');
}

loginBtn.addEventListener('click', checkEmail);
