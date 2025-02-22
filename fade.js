const fadeInElements = document.querySelectorAll(".fadein")
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show")
        } else {
            entry.target.classList.remove("show")
        }
    })
})

fadeInElements.forEach((element) => {
    observer.observe(element)
})

if (!localStorage.getItem("beenhere")) {
    document.getElementById("about").click()
    localStorage.setItem("beenhere", "yea")
}