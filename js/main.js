const sliderImgs = document.querySelectorAll('.slid');
let current = 0;
let currentSpan = 0;
const sliderNext = document.querySelector('.next');
const sliderPrev = document.querySelector('.prev');
const navigationList = document.querySelector('.navigation');
const navigationSpan = document.querySelector('.navigation');
const navigationSpanList = navigationSpan.getElementsByTagName('span');
for(let i = 0; sliderImgs.length>i; i++){
    let newSpan = document.createElement('span');
    if(currentSpan === 0){
        newSpan.classList.add('active');
    }
    newSpan.setAttribute('data-number', currentSpan);
    navigationList.appendChild(newSpan);
    currentSpan++;
}
function sliderFunction() {
    for(let i = 0; sliderImgs.length>i; i++){
        sliderImgs[i].classList.add('opacity0')
    }
    for(let i = 0; navigationSpanList.length>i; i++){
        navigationSpanList[i].classList.remove('active');
    }
    sliderImgs[current].classList.remove('opacity0');
    navigationSpanList[current].classList.add('active');
}
navigationSpan.addEventListener('click', function (event) {
    if(event.target.tagName !== 'SPAN'){
        return
    }
    let a = event.target.getAttribute('data-number');
    current = +a;
    sliderFunction()
});
sliderNext.addEventListener('click', function () {
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


const select = document.querySelector('#select');
const input = document.querySelector('#input');
input.addEventListener('click', function () {
    if(select.style.height === '0px'){
        select.style.height = '150px';
        select.style.bottom = '-150px';

    }
    else{
        select.style.height = '0px';
        select.style.bottom = '0px';
    }
});
select.addEventListener('change', function (event) {
    input.value = event.target.value;
    select.style.height = '0px';
    select.style.bottom = '0px';
})