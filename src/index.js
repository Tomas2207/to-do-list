import './style.css';
import toDo from './img/to-do.png';
import Item from './todo-item.js';
import { Items } from './todo-item.js';
import display from './display-item.js';
import form from './form.js';
// import sideBar from './side-bar.js';
// import addProyect from './add-proyect.js';
import sort from './sort.js';
import darkMode, { goDark } from './dark-mode.js';
import { checkStorageItem } from './localStorage.js';
import { checkStorageProyect } from './localStorage.js';
import displayProjects from './display-projects.js';
import { proyects } from './proyect';

checkStorageItem();
checkStorageProyect();

// const welcome = new Item('Welcome!', '', '', 'e');

// welcome.addItem(welcome);

goDark();

darkMode();

const sortSelect = document.querySelector('#sort');
sortSelect.addEventListener('click', () => {
  sort(Items);
  display(Items, 'All');
});

display(Items, 'All');
form();
displayProjects(proyects);
// sideBar();
// addProyect();

console.log(Items);
