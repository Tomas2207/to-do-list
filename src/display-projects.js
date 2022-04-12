import { proyectRemove } from './remove.js';
import display from './display-item.js';
import { Items } from './todo-item.js';
import sideBar from './side-bar.js';
import addProyect from './add-proyect.js';
import { proyects } from './proyect.js';

export default function (list) {
  const sidebar = document.querySelector('.side-bar');
  sidebar.innerHTML = '';
  sideBar();
  addProyect();
  list.forEach((i) => {
    const mid = document.querySelector('.mid-content');

    const proyect = document.createElement('div');
    proyect.classList.add('item');
    proyect.classList.add('side-proyect');
    proyect.setAttribute('id', i.title);
    proyect.innerText = i.title;
    proyect.setAttribute('id', i.title);

    proyect.addEventListener('click', () => {
      mid.innerHTML = '';
      display(Items, i.title);
      console.log(proyect.textContent);
    });

    const remove = document.createElement('div');
    remove.classList.add('remove');
    remove.innerHTML = '-';
    proyect.appendChild(remove);

    remove.addEventListener('click', () => {
      proyectRemove(i);
    });

    console.log('proyects: ', proyects);

    sidebar.appendChild(proyect);
  });
}
