import { Items } from './todo-item.js';
import display from './display-item.js';
import { proyects } from './proyect.js';

export default function () {
  const sidebar = document.querySelector('.side-bar');

  const proyectsCont = document.createElement('div');
  proyectsCont.classList.add('item');
  const proyects = document.createElement('h3');
  proyects.innerHTML = 'Proyects';
  proyectsCont.classList.add('side-proyect');
  proyectsCont.appendChild(proyects);

  const proyectBtn = document.createElement('button');
  proyectBtn.innerHTML = '+Add Proyect';
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
