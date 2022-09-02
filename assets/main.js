import gallery from "./images.js";

let slider = () => {
    let container = document.querySelector('.container');
    let dotscontainer = document.querySelector('#dots-container');

    gallery.forEach((image, index) => {
        let img = `<img src='${image.source}' class='invisible' id='${index}' alt='${image.description}'>`;
        container.innerHTML+=img;
        let span = `<span id="dot_${index}" class="dot"></span>`;
        dotscontainer.innerHTML+=span;
    });

    let firstImage = document.getElementById('0');
    firstImage.classList.remove('invisible');
    firstImage.classList.add('fade');
    let description = document.querySelector('.text');
    description.innerHTML=gallery[0].description;
    let counter = document.querySelector('.numbertext');
    counter.innerHTML = `${currentIndex+1}/${gallery.length}`;
    let nextButton = document.querySelector('.next');
    nextButton.addEventListener('click', nextImage);
    let prevButton = document.querySelector('.prev');
    prevButton.addEventListener('click', previousImage);

    for(let i = 0;i < gallery.length;++i){
        let dotSpan = document.querySelector(`#dot_${i}`);
        dotSpan.addEventListener('click', () => selectDots(i));
    }
}

let selectDots = (index) => {
    let currentImage = document.getElementById(currentIndex);
    currentImage.classList.add('invisible');
    currentImage.classList.remove('fade');
    currentIndex = index; 
    let nextImage = document.getElementById(currentIndex);
    nextImage.classList.remove('invisible');
    nextImage.classList.add('fade');
    let description = document.querySelector('.text');
    description.innerHTML=gallery[currentIndex].description;
    let counter = document.querySelector('.numbertext');
    counter.innerHTML = `${currentIndex+1}/${gallery.length}`;
}

let currentIndex = 0;
let nextImage = () => {
    let currentImage = document.getElementById(currentIndex);
    currentImage.classList.add('invisible');
    currentImage.classList.remove('fade');
    if (currentIndex === gallery.length -1) {
        currentIndex = 0;
    } else {
        ++currentIndex;
    }
    let nextImage = document.getElementById(currentIndex);
    nextImage.classList.remove('invisible');
    nextImage.classList.add('fade');
    let description = document.querySelector('.text');
    description.innerHTML=gallery[currentIndex].description;
    let counter = document.querySelector('.numbertext');
    counter.innerHTML = `${currentIndex+1}/${gallery.length}`;
}

let previousImage = () => {
    let currentImage = document.getElementById(currentIndex);
    currentImage.classList.add('invisible');
    currentImage.classList.remove('fade');
    if (currentIndex === 0) {
        currentIndex = gallery.length -1;
    } else {
        --currentIndex;
    }
    let previousImage = document.getElementById(currentIndex);
    previousImage.classList.remove('invisible');
    previousImage.classList.add('fade');
    let description = document.querySelector('.text');
    description.innerHTML=gallery[currentIndex].description;
    let counter = document.querySelector('.numbertext');
    counter.innerHTML = `${currentIndex+1}/${gallery.length}`;
}

slider();

let time = 2000; //--> itt paraméterezhető az automata idő váltás

setInterval(nextImage, time);