const sliderImgs = document.querySelectorAll('.slid');
let current = 0;
let currentInput = 0;
const sliderNext = document.querySelector('.next');
const sliderPrev = document.querySelector('.prev');
const navigationList = document.querySelector('.navigation');
const navigationInput = document.querySelector('.navigation');
const navigationInputList = navigationInput.getElementsByTagName('input');

for(let i = 0; sliderImgs.length>i; i++){
    let newInput = document.createElement('input');
    newInput.setAttribute('type', 'radio');
    newInput.setAttribute('name', 'slider');
    if(currentInput === 0){
        newInput.setAttribute('checked', 'true');
    }
    newInput.setAttribute('data-number', currentInput);
    navigationList.appendChild(newInput);
    currentInput++;
}
function sliderFunction() {
    for(let i = 0; sliderImgs.length>i; i++){
        sliderImgs[i].classList.add('opacity0')
    }
    for(let i = 0; navigationInputList.length>i; i++){
        navigationInputList[i].setAttribute('checked', 'false');
    }
    sliderImgs[current].classList.remove('opacity0');
    navigationInputList[current].setAttribute('checked', 'true');
}
navigationInput.addEventListener('click', function (event) {
    if(event.target.tagName !== 'INPUT'){
        return
    }
    let a = event.target.getAttribute('data-number');
    current = a;
    sliderFunction()
});
sliderNext.addEventListener('click', function () {
    console.log(current)
    if(current + 1 >= sliderImgs.length){
        current = 0;
    }
    else{
        current++
    }
    sliderFunction();
});
sliderPrev.addEventListener('click', function () {
    if(current === 0){
        current = sliderImgs.length - 1;
    }
    else{
        current--
    }
    sliderFunction();
});





