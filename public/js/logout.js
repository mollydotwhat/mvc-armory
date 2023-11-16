const logoutButton = document.querySelector("#logoutBtn");


const logout = async () => {
  console.log("logout button click")
  const response = await fetch('/api/user/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    console.log(response.statusText);
  }
};


logoutButton.addEventListener("click", logout)