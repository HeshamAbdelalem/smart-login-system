let logoutBtn = document.getElementById('logoutBtn');
let logoUserName = document.querySelectorAll('.logoUserName');

let logedUser = localStorage.getItem('logedUser');

for (let i = 0; i < logoUserName.length; i++) {
  logoUserName[i].innerHTML = logedUser;
}

logoutBtn.addEventListener('click', function () {
  localStorage.setItem('logedUser', '');
  window.location = './index.html';
});
