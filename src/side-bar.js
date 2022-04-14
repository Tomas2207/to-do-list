import { Items } from './todo-item.js';
import display from './display-item.js';
import { proyects } from './proyect.js';
import plus1 from './img/plus.png';

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
  plus.src = plus1;
  plus.classList.add('dark-mode-img');
  proyectBtn.appendChild(plus);
  proyectBtn.setAttribute('id', 'proyect-btn');
  proyectsCont.appendChild(proyectBtn);
  sidebar.appendChild(proyectsCont);

  const all = document.createElement('div');
  all.innerHTML = 'All';
  all.classList.add('item');
  all.setAttribute('id', 'all');
  all.classList.add('side-proyect');
  sidebar.appendChild(all);
  const mid = document.querySelector('.mid-content');

  all.addEventListener('click', () => {
    mid.innerHTML = '';
    display(Items, 'All');
  });
}
