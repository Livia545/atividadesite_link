document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const images = document.querySelectorAll(".slider img");
    let index = 0;

    function slide() {
        index++;
        if (index >= images.length) {
            index = 0;
        }
        slider.style.transform = `translateX(${-index * 100}%)`;
    }

    setInterval(slide, 3000); // Muda a cada 3 segundos
});
