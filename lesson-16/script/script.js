"use strict"

let form = document.querySelector('.form');

form.addEventListener('submit', function(event) {
    let inputs = form.querySelectorAll('.field');
    let arrayInputs = Array.from(inputs);
    let checkbox = document.form.querySelector('[name="agreement"]');
   
    for (let i = 0; i < arrayInputs.length; i++) {
        if (arrayInputs[i].value === '') {
        event.preventDefault();
        alert('Заполните все поля!');
        return false;          
    }    
}
    if (!checkbox.checked) {
    alert('Нажмите чекбокс если согласны с условиями');
    event.preventDefault();
}    
});