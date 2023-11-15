const loginFormHandler = async (event) => {
  event.preventDefault();

  console.log("loginFormHandler Started")
  // Collect values from the login form
  const username = document.querySelector('#usernameField').value.trim();
  const password = document.querySelector('#passwordField').value.trim();

  if (username && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/loadout');
    } else {
      alert(response.statusText);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();
  console.log("signupBtn Started")

  const username = document.querySelector('#usernameSignUpField').value.trim();
  const password = document.querySelector('#passwordSignUpField').value.trim();

  if (username && password) {
    const response = await fetch('/api/user/create-user', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/loadout');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('#loginFormBtn')
  .addEventListener('click', loginFormHandler);

document
  .querySelector('#signupBtn')
  .addEventListener('click', signupFormHandler);
