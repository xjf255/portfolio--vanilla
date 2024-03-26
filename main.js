// import './style.css'
import ScrollSpy from "./spy"
import textAnimation from "./animationText"
import { LIST_COLORS, LIST_THEMES } from "./const"

const $template = document.getElementById('shape--projects').content
const $sectionProjects = document.getElementById('section__projects')
const $fragment = document.createDocumentFragment()
const $contac = document.getElementById('contact')
const $themes = document.getElementById('change--themes')
const rootStyles = document.documentElement.style
const storage = localStorage.getItem('themes')

function printTheme({storage}) {
  const elements = storage.split(',')
  const colors = elements[1],
    theme = elements[0],
    firtsColor = LIST_COLORS[theme][colors][0],
    secondColor = LIST_COLORS[theme][colors][1],
    hoverColor = LIST_COLORS[theme][colors][2];
  localStorage.setItem('themes', `${theme},${colors}`)
  rootStyles.setProperty('--btn-second-color', firtsColor)
  rootStyles.setProperty('--important-color', secondColor)
  rootStyles.setProperty('--hover', hoverColor)
  $themes.textContent = theme
  document.querySelector('.selected').classList.replace('selected', 'other--colors')
  document.querySelector(`[data-color="${colors}"]`).classList.replace('other--colors', 'selected')
}

if (storage) {
  printTheme({storage})
}


document.addEventListener('click', e => {
  const $themeColors = document.querySelectorAll('.other--colors')
  if (e.target === $contac) console.log(1)

  if (e.target === $themes) {
    const position = LIST_THEMES.indexOf($themes.textContent) + 1
    $themes.textContent = LIST_THEMES[position] ?? LIST_THEMES[0]
  }
  $themeColors.forEach(color => {
    if (e.target === color) {
      const colors = e.target.dataset.color,
        theme = $themes.textContent,
        firtsColor = LIST_COLORS[theme][colors][0],
        secondColor = LIST_COLORS[theme][colors][1],
        hoverColor = LIST_COLORS[theme][colors][2];
      localStorage.setItem('themes', `${theme},${colors}`)
      rootStyles.setProperty('--btn-second-color', firtsColor)
      rootStyles.setProperty('--important-color', secondColor)
      rootStyles.setProperty('--hover', hoverColor)
      document.querySelector('.selected').classList.replace('selected', 'other--colors')
      color.classList.replace('other--colors', 'selected')
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

