const btn = document.querySelector('#btn');
const input = document.querySelector('#text');
const square = document.querySelector('#square');
const e_btn = document.querySelector('#e_btn');
const inputRange = document.querySelector('#range');
const circle = document.querySelector('#circle');
const rangeSpan = document.querySelector('#range-span');

const changeColorSquare = function () {
    square.style.backgroundColor = input.value;
}

console.log(circle.style.width = '3000')

const changeSizeCircle = () => {
    circle.style.width = inputRange.value + '%';
    circle.style.height = inputRange.value + '%';
    rangeSpan.textContent = inputRange.value
}

e_btn.style.display = 'none';

btn.addEventListener('click', changeColorSquare);
inputRange.addEventListener('change', changeSizeCircle);