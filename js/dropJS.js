let $dropdownToggle;
let $buttonDropdown;
let $dropdownMenu;
let $templateLink;
let $templateContainer;
let $show;

const main = () => {
    prepareDOMElements();
    prepareDOMEvents();
};

const prepareDOMElements = () => {
    $dropdownToggle = document.querySelector('.dropdown-toggle');
    $buttonDropdown = document.querySelector('.button-dropdown');
    $dropdownMenu = document.querySelector('.dropdown-menu');
    $templateLink = document.querySelector('.template-link');
    $templateContainer = document.querySelector('.template-container');
    $show = document.querySelector('#show-');
};

const prepareDOMEvents = () => {
    $templateLink.addEventListener('click', templateScript)
};

const templateScript = () => {
    $templateContainer.style.display = 'none';
    this.$show.setAttribute('id');
    this.$show.style.display = 'block';
    this.$show.classList.remove('d-none');
};

document.addEventListener('DOMContentLoaded', main);