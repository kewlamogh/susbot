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

// const circle = document.getElementById('circle');
// const positionCursor = (e) => {
//     circle.style.left = `${e.clientX}px`;
//     circle.style.top = `${e.clientY}px`;
//     console.log("hello")
// }

// document.addEventListener('mousemove', positionCursor);
// document.addEventListener('load', positionCursor);