let left = document.querySelector(".arrow-left");
let right = document.querySelector(".arrow-right");

let backgroundImgs = document.querySelectorAll(".landing-background img");
let bullets = document.querySelectorAll("ul.bullets li");

let currentImgIndex = 2;

window.onload = refreshBackground;

function refreshBackground() {
    for (let i = 0; i < backgroundImgs.length; i++) {
        backgroundImgs[i].style.transform = `translateX(-${
            currentImgIndex * 100
        }%)`;
    }

    bullets.forEach((bullet) => {
        bullet.classList.remove("active");
    });
    bullets[currentImgIndex].classList.add("active");
}

left.addEventListener("click", function () {
    if (currentImgIndex === 0) currentImgIndex = backgroundImgs.length - 1;
    else currentImgIndex--;
    refreshBackground();
});

right.addEventListener("click", function () {
    if (currentImgIndex == backgroundImgs.length - 1) currentImgIndex = 0;
    else currentImgIndex++;
    refreshBackground();
});

setInterval(function () {
    if (currentImgIndex === backgroundImgs.length - 1) currentImgIndex = 0;
    else currentImgIndex++;
    refreshBackground();
}, 8000);

bullets.forEach(bullet => {
    bullet.addEventListener("click", function() {
        currentImgIndex = +bullet.dataset.index;
        refreshBackground();
    })
})