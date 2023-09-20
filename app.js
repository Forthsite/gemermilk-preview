const produktyExpander = document.querySelector('#menu-expander');
const menuExpansion = document.querySelector('.menu-expansion');
const produktyArrow = document.querySelector('#productarrw');

produktyExpander.addEventListener('mouseover', () =>{
    menuExpansion.classList.toggle('visible');
    produktyArrow.classList.toggle('arrow-hovered');
});

const langSelect = document.querySelector('.lang-select');
const selectedLang = document.querySelector('.selected');
const langArrow = document.querySelector('#langarrw');
const nonselectedLangs = document.querySelectorAll('.non-selected')

selectedLang.addEventListener('mouseenter', () =>{
    nonselectedLangs.forEach((lang) =>{
        lang.classList.toggle('visible');
    });
    langArrow.classList.toggle('arrow-hovered');
    langSelect.classList.toggle('open');
})

selectedLang.addEventListener('mouseleave', () =>{
    nonselectedLangs.forEach((lang) =>{
        lang.classList.toggle('visible');
    });
    langArrow.classList.toggle('arrow-hovered');
    langSelect.classList.toggle('open');
})
