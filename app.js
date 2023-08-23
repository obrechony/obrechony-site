// Получаем форму по ее id
const form = document.getElementById('form');

// Обработчик события отправки формы
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Отменяем стандартное поведение отправки формы

  // Получаем значения полей формы
  const email = document.querySelector('.inp_email').value;
  const vk = document.querySelector('.inp_vk').value;
  const fullname = document.querySelector('.inp_fullname').value;
  const country = document.querySelector('.inp_country').value;
  const address = document.querySelector('.inp_address').value;
  const index = document.querySelector('.inp_index').value;
  const phone = document.querySelector('.inp_phone').value;
  const comment = document.querySelector('.inp_comment').value;

  // Формируем данные для отправки на сервер
  const data = {
    email,
    vk,
    fullname,
    country,
    address,
    index,
    phone,
    comment
  };

  // Отправляем данные на сервер
  fetch('sendemail.php', { // Замените "send_email.php" на адрес вашего серверного скрипта, который будет отправлять почту
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json)
    .then(result => {
      // Действия после успешной отправки
      console.log(result);
      alert('Заказ оформлен. Мы свяжемся с вами в ближайшее время.');
      form.reset(); // Очищаем поля формы
    })
    .catch(error => {
      // Обработка ошибок при отправке
      console.error(error);
      alert('Произошла ошибка при оформлении заказа. Пожалуйста, попробуйте еще раз.');
    });
});