const icon__menu =  document.querySelector('.icon__menu')
const right__sec = document.querySelector('.right__sec')
icon__menu.addEventListener('click' ,()=>{
    icon__menu.classList.toggle('active')
    right__sec.classList.toggle('active')
})