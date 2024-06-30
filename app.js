const slides = document.querySelectorAll(".slide");  // s = [1,2,3,4]
let counter = 0;

slides.forEach((slide, index) => {
     slide.style.right = `${index * 100}%`;
});

const goPrev = () => {
    counter--;
    slideImage();
}

const goNext = () => {
    counter++;
    slideImage();
}

const slideImage = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(${counter * 100}%)`;
    });
}
