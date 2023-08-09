let nameInput = document.querySelector('#nameInput');
let emailInput = document.querySelector('#emailInput');
let passwordInput = document.querySelector('#passwordInput');
let registerBtn = document.querySelector('#registerBtn');

let usersContainer = [];

if (localStorage.getItem('users') != null) {
  usersContainer = JSON.parse(localStorage.getItem('users'));
} else {
  console.log('localstorage is empty');
}

// ! Validation functions

function validateUserName(username) {
  let regex = /^[a-zA-z]{3,}$/;
  if (regex.test(username)) {
    return true;
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Sorry, the name should be 3 letters atleast',
    });
    console.log('sry ur name should be 3 letters atleast');
  }
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

//! checks if email exist or no !

function checkEmail(email) {
  let storedUsers = usersContainer;

  for (let i = 0; i < storedUsers.length; i++) {
    if (email != storedUsers[i].email) {
      console.log('GOOOD');
    } else {
      console.log('Bad');
      console.log('sry the email registerd already');
      Swal.fire({
        icon: 'error',
        title: 'Sorry, this email is already registered',
      });
      return false;
    }
  }
  clearForm();
  return true;
}
// checkEmail('body@body.com');

/* function checkEmail(email) {
  if (localStorage.getItem('users') != null) {
    storedUsers = JSON.parse(localStorage.getItem('users'));
  } else {
    console.log('localstorage is empty');
  }

  for (let i = 0; i < storedUsers.length; i++) {
    if (email != storedUsers[i].email) {
      return true;
    } else {
      
    }
  }

  console.log('storedUsers:', storedUsers);
} */

// ! adduser
function addUser() {
  let user = {
    name: nameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
  };

  if (
    validateUserName(user.name) &&
    validateEmail(user.email) &&
    checkEmail(user.email) &&
    validatePassword(user.password)
  ) {
    usersContainer.push(user);
    localStorage.setItem('users', JSON.stringify(usersContainer));
    document.querySelector('#validation-msg').innerHTML = 'Success';
    console.log(usersContainer);
    console.log(user);
  }
}

function clearForm() {
  nameInput.value = '';
  emailInput.value = '';
  passwordInput.value = '';
}

registerBtn.addEventListener('click', addUser);
