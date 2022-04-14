import './style.css';
import Item from './todo-item.js';
import { Items } from './todo-item.js';
import display from './display-item.js';
import form from './form.js';
import sideBar from './side-bar.js';
import addProyect from './add-proyect.js';
import sort from './sort.js';
import darkMode from './dark-mode.js';

const welcome = new Item('Welcome!', '', '', 'e');

welcome.addItem(welcome);

darkMode();

const sortSelect = document.querySelector('#sort');
sortSelect.addEventListener('click', () => {
  sort(Items);
  display(Items, 'All');
});

display(Items, 'All');
form();
sideBar();
addProyect();

console.log(Items);
