import sun from './img/sun.png';
import moon from './img/moon.png';

localStorage;

const midContent = document.querySelector('.mid-content');
const sideBar = document.querySelector('.side-bar');
const header = document.querySelector('.header');
const midHeader = document.querySelector('.mid-header');
const darkBtnImg = new Image();
darkBtnImg.src = sun;
darkBtnImg.classList.add('dark-mode-img');
const lightBtnImg = new Image();
lightBtnImg.classList.add('dark-mode-img');
lightBtnImg.src = moon;

let dark = false;
const darkBtn = document.querySelector('.dark-mode-btn');

if (window.localStorage.getItem('darketting') !== null) {
  dark = window.localStorage.getObj('darketting');
  window.localStorage.removeItem('darketting');
}

export default function () {
  darkBtn.addEventListener('click', () => {
    window.localStorage.setItem('darketting', dark);
    goDark();
  });
}

function goDark() {
  if (dark === false) {
    header.classList.remove('header');
    header.classList.add('header-dark');
    midHeader.classList.remove('mid-header');
    midHeader.classList.add('mid-header-dark');
    midHeader.classList.add('dark-mode');
    midContent.classList.add('dark-mode');
    sideBar.classList.add('dark-mode');
    darkBtn.innerHTML = '';
    darkBtn.appendChild(darkBtnImg);
    window.localStorage.removeItem('darketting');
    window.localStorage.setItem('darketting', dark);

    dark = true;
  } else {
    header.classList.add('header');
    header.classList.remove('header-dark');
    midHeader.classList.add('mid-header');
    midHeader.classList.remove('mid-header-dark');
    midHeader.classList.remove('dark-mode');
    midContent.classList.remove('dark-mode');
    sideBar.classList.remove('dark-mode');
    darkBtn.innerHTML = '';
    darkBtn.appendChild(lightBtnImg);
    window.localStorage.removeItem('darketting');
    window.localStorage.setItem('darketting', dark);

    dark = false;
  }
}

export { goDark };
