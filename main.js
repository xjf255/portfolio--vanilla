// import './style.css'

const $presentationText = document.querySelectorAll('.profile__text')
console.log($presentationText)


const changeText = setTimeout(() =>{
  $presentationText.forEach((txt) =>{
    txt.classList.toggle('text--hide')
  })
},5000)

