let userName = 'admiN';
let password = 'imthebest';
let userCommit = prompt('Введите логин');
let userPassword = prompt('Введите пароль');
if (userName === userCommit && password === userPassword){
    alert('Доступ разрешен');
}else{
    alert('Доступ недоступен');
}