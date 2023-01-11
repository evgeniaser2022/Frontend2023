"use strict";
let lastName = prompt('Введите Вашу фамилию:', ' ');
let firstName = prompt('Введите Ваше имя:', ' ');
let age = prompt('Ваш возвраст:', ' ');
let sex = confirm('Вы мужчина?');
let pension;
if(sex==true){
    sex=('Мужчина');
    if(age>=65){
        pension=('Да');
    } else{
        pension=('Нет');
    }
} else {
    sex=('Женщина');
    if(age>=60){
        pension=('Да');
    } else{
        pension=('Нет');
    }
}
alert(`Ваше имя: ${firstName}\nВаша фамилия: ${lastName}\nВаш пол: ${sex}\nВы на пенсии: ${pension}`);