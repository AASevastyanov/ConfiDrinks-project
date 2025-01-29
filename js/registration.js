document.getElementById('sign').addEventListener('click', () => {
  let username = document.getElementById('username').value;
  localStorage.setItem('username', `${username}`);
});

//Не доделал