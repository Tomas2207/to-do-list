import Item from './todo-item.js';
import display from './display-item.js';
import { Items } from './todo-item.js';
import { resetStorage } from './localStorage.js';

export default function (title, description, duedate, priority, proyect) {
  let item = new Item(title, description, duedate, priority, proyect);
  item.addItem(item);
  resetStorage();

  display(Items, 'All');
  console.log('yes', Items);
}
