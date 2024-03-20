export default function ScrollSpy() {
    const $section = document.querySelectorAll('section')

    const cb = (entries) => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            if (entry.isIntersecting && id !== null) {
                document.querySelector(`a.--default[href="#${id}"]`).classList.add('--active');
            } else {
                document.querySelector(`a.--default[href="#${id}"]`).classList.remove('--active');
            }
        });
    }

    const observer = new IntersectionObserver(cb, {
        threshold: [0.5, 1]
    })

    $section.forEach(ele => {
        observer.observe(ele)
    })
}