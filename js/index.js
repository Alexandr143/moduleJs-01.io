/*
  Напишите скрипт имитирующий авторизацию администратора в панели управления.
  
  При загрузке страницы у посетителя запрашивается логин через prompt:
  
    - Если посетитель нажал Cancel — показывать alert с текстом 'Отменено пользователем!'
    - Если было введено что либо другое, что не совпадает со значением константы adminLogin, 
       показывать alert с текстом 'Доступ запрещен, неверный логин!'   
    - Если был введен логин совпадающий со значением константы adminLogin, 
      спрашивать пароль через prompt.
    
  При вводе пароля:
  
      - Если нажали Cancel, показывать alert с текстом 'Отменено пользователем!'
      - Если введен пароль который не совпадает со значением константы adminPassword,
        показывать alert с текстом 'Доступ запрещен, неверный пароль!'        
      - Если введён пароль который совпадает со значением константы adminPassword, 
        показывать alert с текстом 'Добро пожаловать!'
*/

`use strict`

const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';
let massege;
const admin = prompt('Please enter username');
if (admin === null) {
    massage = 'cancelled by the client!';
    alert (massage);
} else if ( admin !== 'admin') {
    massage = 'Access is prohibited, login isn`t true!';
    alert (massage);
} else if ( adminLogin === 'admin') {
    const admin = prompt('Please enter password');
    if (admin === null){
        massage= 'cancelled by the client!';
        alert(massage)
    } else if ( admin !== adminPassword){
        massage= 'Access is prohibited, login isn`t true!';
        alert(massage)
    } else if (admin === adminPassword){
        massage= 'Welcome!';
        alert (massage)
    }
}
console.log(massage)