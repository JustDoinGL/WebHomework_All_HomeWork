const form = document.querySelector('form');
const passwordInput = document.querySelector('#password');

form.addEventListener('submit', (event) => {
  if (passwordInput.value.length < 8) {
    event.preventDefault();
    alert('Password must contain at least 8 characters');
  }
});
