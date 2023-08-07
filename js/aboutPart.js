// Functions
function displayNewNavInSmallScreens() {
    if (header.offsetWidth <= 991) {
        addNewClassToElement(navLinks, '', 'none');
        addNewClassToElement(responsivePart, 'none', 'block');
    } else {
        addNewClassToElement(navLinks, 'none', '');
        addNewClassToElement(responsivePart, 'block', 'none');
    };
};
function addNewClassToElement(el, oldClass, newClass) {
    if (oldClass) {
        el.classList.remove(oldClass);
    };
    if (newClass) {
        el.classList.add(newClass);
    };
};
function scrollingCondition(
    sName,
    sOldClass,
    sNewClass,
    scName,
    scOldClass,
    scNewClass
) {
    if (window.scrollY >= sName.offsetTop - 440) {
    addNewClassToElement(sName, sOldClass, sNewClass);
        if (scName && scOldClass && scNewClass) {
            addNewClassToElement(scName, scOldClass, scNewClass);
        };
    };
};
// ###################################################################################################################
// header_JS_Part
const header = document.querySelector('header');
const navBar = document.querySelector('.navBar');
const navBarToogle = document.querySelector('.fa-xmark');
const navLinks = document.querySelector('.navBar__links');
const responsivePart = document.getElementById('responsivePart');
const displayIcon = document.querySelector('#responsivePart i');
displayNewNavInSmallScreens();
displayIcon.addEventListener('click', () => {
    addNewClassToElement(navBar, '', 'navBar__mobile');
    addNewClassToElement(navLinks, 'none', 'navBar__links_mobile');
    addNewClassToElement(navBarToogle, 'none');
});
navBarToogle.addEventListener('click', () => {
    addNewClassToElement(navBar, 'navBar__mobile');
    addNewClassToElement(navLinks, 'navBar__links_mobile','none');
    addNewClassToElement(navBarToogle, '', 'none');
});
// End HeaderPart
// ###################################################################################################################
// Start voluptatem__Section
const voluptatemSection = document.querySelector('.voluptatem__section');
const voluptatemImage = document.querySelector('.voluptatem__image');
const voluptatemText = document.querySelector('.voluptatem__text');
window.addEventListener('load', () => scrollingCondition(
    voluptatemSection,
    'transformedToButtomWithOpacity0',
    'returnedToTop',
    voluptatemImage,
    'transformedToRightWithoutOpacity0',
    'returnedToLeft'
));
// End voluptatem__Section
// ###################################################################################################################
// start testimonials__section
const testimonialsSection = document.querySelector(".testimonials__section");
window.addEventListener("scroll",() => scrollingCondition(
    testimonialsSection,
    "animationPartBefore",
    "animationPartAfter"
    ));
const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCard = carousel.querySelector(".card").offsetWidth;
const cards = [...carousel.children];
let isDragging = false , startX , startScrollLeft ,timeOutId;
let cardPerView = Math.round(carousel.offsetWidth / firstCard);

cards.slice(-cardPerView).reverse().forEach(e => carousel.insertAdjacentHTML("afterbegin",e.outerHTML));
cards.slice(0 , cardPerView).forEach(e => carousel.insertAdjacentHTML("beforeend",e.outerHTML));
const dragStart = (e) => {
    isDragging = true;
    addNewClassToElement(carousel,"","dragging");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
};
const dragStop = () => {
    isDragging = false;
    addNewClassToElement(carousel,"dragging");
};
const dragging = (e) => {
    if(!isDragging) return; 
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
};
const autoPlayCards = () => {
    if(window.innerWidth < 800) return;
    timeOutId = setTimeout(() => carousel.scrollLeft += firstCard , 4000);
};
autoPlayCards();
const infiniteScroll = () => {
    if(carousel.scrollLeft === 0){
        addNewClassToElement(carousel,"","no-scroll-bahavior-smooth");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        addNewClassToElement(carousel,"no-scroll-bahavior-smooth");
    }else if(Math.ceil(carousel.scrollLeft) === (carousel.scrollWidth - carousel.offsetWidth)){
        addNewClassToElement(carousel,"","no-scroll-bahavior-smooth");
        carousel.scrollLeft = carousel.offsetWidth;
        addNewClassToElement(carousel,"no-scroll-bahavior-smooth");
    };
    clearTimeout(timeOutId);
    if(!wrapper.matches(":hover")) autoPlayCards();
};
carousel.addEventListener("mousemove" , dragging);
carousel.addEventListener("mousedown" , dragStart);
document.addEventListener("mouseup" , dragStop);
carousel.addEventListener("scroll" , infiniteScroll);
wrapper.addEventListener("mouseenter" , () => clearTimeout(timeOutId));
wrapper.addEventListener("mouseleave" , autoPlayCards);
// end testimonials__section
// ###################################################################################################################
// start togleTopBtn
const togleTopBtn = document.querySelector(".togleTopBtn");
togleTopBtn.addEventListener("click",() => {
    window.scrollTo({top: 0});
});
window.addEventListener("scroll", () => {
    if(window.scrollY >= 700){
        addNewClassToElement(togleTopBtn,"none","block");
    } else {
        addNewClassToElement(togleTopBtn,"block","none");
    };
});
// end togleTopBtn