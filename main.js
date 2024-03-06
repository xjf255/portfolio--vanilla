// import './style.css'

const navItem = document.querySelectorAll('.li--item>a')
const $presentationText = document.querySelectorAll('.profile__text')
const $template = document.getElementById('shape--projects').content
const $sectionProjects = document.getElementById('section__projects')
const $fragment = document.createDocumentFragment()

document.addEventListener('click', e => {
  navItem.forEach(item => {
    const itemSelect = document.querySelector('.--active')
    if (item === e.target && item !== itemSelect) {
      itemSelect.classList.remove('--active')
      itemSelect.classList.add('--default')
      item.classList.add('--active')
      item.classList.remove('--default')
    }
  })
})

const changeText = setTimeout(() => {
  $presentationText.forEach((txt) => {
    txt.classList.toggle('text--hide')
  })
}, 5000)

fetch('projects.json')
  .then(json => json.json())
  .then(list => {
    list['projects']?.map(el => {
      $template.querySelector('.project__title').textContent = el.title
      let $clone = document.importNode($template, true)
      $fragment.appendChild($clone)
    })
    $sectionProjects.appendChild($fragment)
  })

