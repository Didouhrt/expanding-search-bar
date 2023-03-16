let container = document.querySelector('.container')
let lefticondiv = document.querySelector('.lefticondiv')
let closebtn = document.querySelector('#closebtn')

lefticondiv.addEventListener('click',()=>{
  container.classList.toggle('active')
})
closebtn.addEventListener('click',()=>{
  document.querySelector('input').value=''
})