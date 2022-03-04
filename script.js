const roadmapGlobe = document.querySelector(".roadmap-globe");

window.addEventListener("scroll", () => {
    const globePosFromTop = roadmapGlobe.getBoundingClientRect().top;
    const screenHeight = window.screen.height;
    if (globePosFromTop <= screenHeight / 1.4) {
        roadmapGlobe.style.top = `${screenHeight / 1.4 - globePosFromTop}px`;
    } else {
        roadmapGlobe.style.top = 0;
    }
});
