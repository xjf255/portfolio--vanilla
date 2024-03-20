// import './style.css'
import ScrollSpy from "./spy"
import textAnimation from "./animationText"
import { LIST_THEMES } from "./const"

const $template = document.getElementById('shape--projects').content
const $sectionProjects = document.getElementById('section__projects')
const $fragment = document.createDocumentFragment()
const $contac = document.getElementById('contact')
const $themes = document.getElementById('change--themes')



document.addEventListener('click', e => {
  if (e.target === $contac) console.log(1)

  if (e.target === $themes) {
    const position = LIST_THEMES.indexOf($themes.textContent) + 1
    console.log(LIST_THEMES[position] ?? LIST_THEMES[0])
    $themes.textContent = LIST_THEMES[position] ?? LIST_THEMES[0]
  }

})

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

  textAnimation('.profile__text')
  ScrollSpy()
