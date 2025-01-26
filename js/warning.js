ИСПРАВИТЬ ДОПОЛНИТЬ
// window.addEventListener('load', () => {
//     const warning = document.getElementById('warning');
//     const isHidden = localStorage.getItem('warningHidden');
//     const textStart = document.querySelector('start');
//     const textNo = document.querySelector('no');
//     // Если элемента не скрыто, делаем его видимым
//     if (isHidden !== 'true') {
//       warning.style.display = 'flex'; // Показываем элемент
//     }
//     // Добавляем обработчики событий для кнопок
//     document.querySelectorAll('.warning_cont-button').forEach(button => {
//     button.addEventListener('click', () => {
//         if (button.textContent === 'Да') {
//             warning.style.display = 'none';
//             localStorage.setItem('warningHidden', 'true');;
//             } else if (button.textContent === 'Нет') {
//             textStart.style.display = 'none';
//             textNo.style.display = 'block';
//             }
//          // Полное скрытие
//          // Сохраняем состояние
        
//     });
//     });
// })
// 
