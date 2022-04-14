import Item from './todo-item.js';
import display from './display-item.js';
import { Items } from './todo-item.js';

export default function (title, description, duedate, priority, proyect) {
  let item = new Item(title, description, duedate, priority, proyect);
  item.addItem(item);

  display(Items, 'All');
  console.log('yes', Items);
}
