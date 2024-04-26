const regist = document.querySelector('.button');
const blockEl = document.querySelector('.block');
regist.addEventListener('click', function (e) {
    blockEl.classList.toggle('visible')

});
