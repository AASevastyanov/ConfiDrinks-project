if (localStorage.getItem('warning') != 'none') {
  document.getElementById('warning').style.display = 'block';
}
document.getElementById('warningYes').addEventListener('click', () => {
  localStorage.setItem('warning', 'none');
  checkWarn();
});
document.getElementById('warningNo').addEventListener('click', () => {
  localStorage.setItem('warning', 'block');
  checkWarn();
});

function checkWarn() {
  if ((localStorage.getItem('warning')) == 'block') {
    document.querySelector('.warning__text').style.display = 'none';
    document.querySelector('.warning__text--hidden').style.display = 'block';
  } else (document.getElementById('warning').style.display = 'none');
}
