'use strict';

const btn = document.querySelectorAll('.btn'); 
const hide = document.querySelectorAll('.hide');  
const plus = document.querySelectorAll('.plus');
const model = document.querySelector('.model');
const b2 = document.querySelector('.b2');
const modalwrap = document.querySelector('.modalwrap');
const overlay=document.querySelector('.overlay')


for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function () {
        for (let j = 0; j < hide.length; j++) {
            if (j === i) {
                hide[j].classList.toggle('hide');
                plus[j].classList.toggle('plusrotate');
            } else {
                hide[j].classList.add('hide');
            }
        }
        console.log('Button clicked!');
    });
}
b2.addEventListener('click', function () {
    overlay.classList.remove('modalhide');
    model.classList.remove('modalhide');
    modalwrap.classList.add('modalhide');
    
})
overlay.addEventListener('click', function () {
    model.classList.add('modalhide');
    overlay.classList.add('modalhide');
    modalwrap.classList.remove('modalhide');

})


