import { LIST_COLORS } from "./const"

export function printTheme({ colors, theme,$themes }) {
  const rootStyles = document.documentElement.style
  const firtsColor = LIST_COLORS[theme][colors][0],
    secondColor = LIST_COLORS[theme][colors][1],
    hoverColor = LIST_COLORS[theme][colors][2],
    bg = LIST_COLORS[theme][colors][3],
    textColor = LIST_COLORS[theme][colors][4]
  localStorage.setItem('themes', `${theme},${colors}`)
  rootStyles.setProperty('--btn-second-color', firtsColor)
  rootStyles.setProperty('--important-color', secondColor)
  rootStyles.setProperty('--hover', hoverColor)
  rootStyles.setProperty('--bg', bg)
  rootStyles.setProperty('--text-color', textColor)
  $themes.textContent = theme
  document.querySelector('.selected').classList.replace('selected', 'other--colors')
  document.querySelector(`[data-color="${colors}"]`).classList.replace('other--colors', 'selected')
}