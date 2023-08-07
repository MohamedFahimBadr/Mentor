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
// Start pricing__section
const pricingSection = document.querySelector('.pricing__section');
window.addEventListener('load', () => scrollingCondition(
    pricingSection,
    'transformedToButtomWithOpacity0',
    'returnedToTop'
));
// end pricing__section
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