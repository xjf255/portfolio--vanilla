import ScrollSpy from "./spy"
import textAnimation from "./animationText"
import { LIST_THEMES } from "./const"
import { printTheme } from "./changeThemes"

const $template = document.getElementById('shape--projects').content
const $sectionProjects = document.getElementById('section__projects')
const $fragment = document.createDocumentFragment()
const $contac = document.getElementById('contact')
const $themes = document.getElementById('change--themes')
const storage = localStorage.getItem('themes')


if (storage) {
  const elements = storage.split(',')
  const colors = elements[1],
    theme = elements[0]
  printTheme({ colors, theme, $themes })
}


document.addEventListener('click', e => {
  const $themeColors = document.querySelectorAll('.other--colors')
  if (e.target === $contac) console.log(1)

  if (e.target === $themes) {
    const position = LIST_THEMES.indexOf($themes.textContent) + 1
    $themes.textContent = LIST_THEMES[position] ?? LIST_THEMES[0]
    const theme = $themes.textContent,
      colors = document.querySelector(`.selected`).dataset.color
    printTheme({ colors, theme })
  }
  $themeColors.forEach(color => {
    if (e.target === color) {
      const colors = e.target.dataset.color,
        theme = $themes.textContent
      printTheme({ colors, theme })
    }
  })
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

