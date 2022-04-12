import './style.css';
import Item from './todo-item.js';
import { Items } from './todo-item.js';
import display from './display-item.js';
import form from './form.js';
import sideBar from './side-bar.js';
import addProyect from './add-proyect.js';

const shit = new Item('Welcome!', '', '', 'e');

shit.addItem(shit);
display(Items, 'All');
form();
sideBar();
addProyect();

console.log(Items);
