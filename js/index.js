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
let message;
const input = prompt('Please enter username');
if (input === null) {
    message = 'cancelled by the client!';
} else if (input !== 'admin') {
    message = 'Access is prohibited, login isn`t true!';
} else if (input === adminLogin) {
    const passwordInput = prompt('Please enter password');
    if ( passwordInput === null) {
    message = 'cancelled by the client!';
    } else if (passwordInput !== adminPassword){
    message= 'Access is prohibited, password isn`t true!';
    } else if (passwordInput === adminPassword){
        message= 'Welcome!';    
    }
}
alert (message)
console.log(message)