import { Items } from './todo-item.js';
import display from './display-item.js';
import { proyects } from './proyect.js';
import add from './img/add.svg';
import allsvg from './img/all.svg';

export default function () {
  const sidebar = document.querySelector('.side-bar');

  const proyectsCont = document.createElement('div');
  proyectsCont.classList.add('item');
  const proyects = document.createElement('h3');
  proyects.innerHTML = 'Proyects';
  proyectsCont.classList.add('side-proyect');
  proyectsCont.appendChild(proyects);

  const proyectBtn = document.createElement('button');
  const plus = new Image();
  plus.src = add;
  plus.classList.add('dark-mode-img');
  proyectBtn.appendChild(plus);
  proyectBtn.setAttribute('id', 'proyect-btn');
  proyectsCont.appendChild(proyectBtn);
  sidebar.appendChild(proyectsCont);

  const all = document.createElement('div');
  // const allImg = new Image();
  // allImg.src = allsvg;
  // allImg.classList.add('dark-svg');

  all.innerHTML = 'All';
  // all.prepend(allImg);
  all.classList.add('item-all');
  all.setAttribute('id', 'all');
  all.classList.add('side-proyect');
  sidebar.appendChild(all);
  const mid = document.querySelector('.mid-content');

  all.addEventListener('click', () => {
    mid.innerHTML = '';
    display(Items, 'All');
  });
}
