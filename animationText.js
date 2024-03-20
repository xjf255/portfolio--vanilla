export default function textAnimation(selector) {
    const $presentationText = document.querySelectorAll(selector)

    const changeText = setTimeout(() => {
        $presentationText.forEach((txt) => {
            txt.classList.toggle('text--hide')
        })
    }, 5000)
}