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
    if (window.scrollY >= sName.offsetTop - mainClientHeight) {
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
// Measuring mainClientHeight 
const homeSection = document.querySelector('.home__section');
const mainClientHeight = homeSection.clientHeight + header.clientHeight;
// ###################################################################################################################
// Start voluptatem__Section
const voluptatemSection = document.querySelector('.voluptatem__section');
const voluptatemImage = document.querySelector('.voluptatem__image');
const voluptatemText = document.querySelector('.voluptatem__text');
window.addEventListener('scroll', () => scrollingCondition(
    voluptatemSection,
    'transformedToButtomWithOpacity0',
    'returnedToTop',
    voluptatemImage,
    'transformedToRightWithoutOpacity0',
    'returnedToLeft'
));
// End voluptatem__Section
// ###################################################################################################################
// Start Timer__section
const timerNums = document.querySelectorAll('.timer__num');
const timerSection = document.querySelector('.timer__section');
if (window.scrollY >= timerSection.offsetTop - mainClientHeight) {
    timerNums.forEach((e) => {
        e.textContent = 0;
        let percentage = parseInt(+e.id / 15);
        let counter = setInterval(() => {
        e.textContent = +e.textContent + percentage;
        if (+e.textContent >= +e.id) {
            clearInterval(counter);
            e.textContent = +e.id;
        };
        }, 100);
    });
};
// End Timer__section
// ###################################################################################################################
// start choose__section
const chooseSection = document.querySelector('.choose__section');
const animationPartBefore = document.querySelector('.animationPartBefore');
window.addEventListener('scroll', () => scrollingCondition(
    chooseSection,
    'transformedToButtomWithOpacity0',
    'returnedToTop',
    animationPartBefore,
    'animationPartBefore',
    'animationPartAfter'
));
// end choose__section
// ###################################################################################################################
// Start features__section
const featuresSection = document.querySelector('.features__section');
window.addEventListener('scroll', () => scrollingCondition(
    featuresSection,
    'animationPartBefore',
    'animationPartAfter'
    ));
// end features__section
// ###################################################################################################################
// start popular__section
const popularSection = document.querySelector(".popular__section");
window.addEventListener("scroll",() => scrollingCondition(
    popularSection,
    "animationPartBefore",
    "animationPartAfter"
    ));
// end popular__section
// ###################################################################################################################
// start trainers__section
const trainersSection = document.querySelector(".trainers__section");
window.addEventListener("scroll",() => scrollingCondition(
    trainersSection,
    "animationPartBefore",
    "animationPartAfter"
    ));
// end trainers__section
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