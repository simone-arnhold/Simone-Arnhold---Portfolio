function fadeInIfInView() {
    let sections = document.querySelectorAll(".Section")
    sections.forEach(section => {
        let position = section.getBoundingClientRect()

        if (position.top < window.innerHeight && position.bottom >= 0) {
            section.classList.add("fade-in-active")
        }
    });
}

window.addEventListener("scroll", fadeInIfInView)
window.addEventListener("load", fadeInIfInView)