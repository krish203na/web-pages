const slideContainer = document.querySelector('.cotainer');
const slideContainer2 = document.querySelector('.cotainer2');
const slide = document.querySelector('.slides');
const slide2 = document.querySelector('.slides2');
const nextbtn = document.getElementById('next-btn');
const prevbtn = document.getElementById('prev-btn');
const interval = 3000;

let slides = document.querySelectorAll('.slide');
let slides2 = document.querySelectorAll('.slide2');
let index = 1;
let index2 = 1;

const firstClone = slides[0].cloneNode(true);
const secondClone = slides[1].cloneNode(true);
const thirdClone = slides[2].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

const firstClone2 = slides2[0].cloneNode(true);
const secondClone2 = slides2[1].cloneNode(true);
const thirdClone2 = slides2[2].cloneNode(true);
const lastClone2 = slides2[slides2.length - 1].cloneNode(true);

firstClone.id = 'first-clone'
secondClone.id = 'second-clone'
thirdClone.id = 'third-clone'
lastClone.id = 'last-clone'

firstClone2.id = 'first-clone2'
secondClone2.id = 'second-clone2'
thirdClone2.id = 'third-clone2'
lastClone2.id = 'last-clone2'

slide.append(firstClone);
slide.append(secondClone);
slide.append(thirdClone);
slide.append(lastClone);
slide.prepend(lastClone);

slide2.append(firstClone2);
slide2.append(secondClone2);
slide2.append(thirdClone2);
slide2.append(lastClone2);
slide2.prepend(lastClone2);

const slideWidth = slides[index].clientWidth ;
const slideWidth2 = slides2[index2].clientWidth ;

console.log(slideWidth);
console.log(slideWidth2);

slide.style.transform = `translateX(${(-slideWidth * index)-10 }px)`;

slide2.style.transform = `translateX(${(-slideWidth2 * index2)-10 }px)`;

// let count;
let count1 = 10;
let count2 = 10;

const startSlide = ()=>{
    setInterval(() => {
        index++;
        count1 = count1+20
        slide.style.transform = `translateX(${(-slideWidth * index) -count1 }px)`;
        slide.style.transition = '1.5s'
    }, interval);
};

const startSlide2 = ()=>{
    setInterval(() => {
        index2++;
        count2 = count2 + 20
        slide2.style.transform = `translateX(${(-slideWidth2 * index2) -count2 }px)`;
        slide2.style.transition = '1.5s'
    }, interval);
};


slide.addEventListener('transitionend', () => {
    slides = document.querySelectorAll('.slide');
    
    
    if(slides[index].id === firstClone.id) {
        slide.style.transition = 'none';
        index = 1;
        count1 = 10
        slide.style.transform = `translateX(${(-slideWidth * index) -10 }px)`;
    }
})

slide2.addEventListener('transitionend', () => {
    slides2 = document.querySelectorAll('.slide2');
    
    
    if(slides2[index2 +1].id === firstClone2.id) {
        slide2.style.transition = 'none';
        index2 = 1;
        count2 = 10
        slide2.style.transform = `translateX(${(-slideWidth2 * index2) -10 }px)`;
    }
})

startSlide();
startSlide2();