document.getElementById('save').addEventListener('click', () => {
  localStorage.setItem('userName', document.getElementById('userName').value);
  localStorage.setItem('userSurname', document.getElementById('userSurname').value);
});
document.getElementById('userName').value = localStorage.getItem('userName');
document.getElementById('userSurname').value = localStorage.getItem('userSurname');



const fileInput = document.getElementById('file');
const avatarImg = document.getElementById('avatar');

window.addEventListener('DOMContentLoaded', () => {
  const savedAvatar = localStorage.getItem('avatarImage');
  if (savedAvatar) {
    avatarImg.src = savedAvatar;
  }
});

fileInput.addEventListener('change', () => {
  const file = fileInput.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    const base64URL = e.target.result; 
    // Показываем в img
    avatarImg.src = base64URL;
    localStorage.setItem('avatarImage', base64URL);
  };
  reader.readAsDataURL(file);
});
