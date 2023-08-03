const Btns = document.querySelectorAll('.btn-open-modal')
const mdl = document.querySelector('.user-modal')
const mdlclose = document.querySelector('.header__user--btn-close')
const modalcontainer = document.querySelector('.user__content')
const mdlftclose = document.querySelector('.footer__user--btn btn-close')

function showmodal(){
    mdl.classList.add('open')
}
Btns.addEventListener('click', showmodal)

function closemodal(){
    mdl.classList.remove('open')
}
mdlclose.addEventListener('click', closemodal)

mdlftclose.addEventListener('click', closemodal)

mdl.addEventListener('click', closemodal)

modalcontainer.addEventListener('click', function(envent){
    envent.stopPropagation
})