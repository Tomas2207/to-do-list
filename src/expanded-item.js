import buildItem from './build-item';
import displayItem from './display-item';
import Item, { Items } from './todo-item';
import edit1 from './edit.js';
import removes from './remove.js';
import editsvg from './img/edit.svg';

export default function (div, obj, t) {
  div.innerHTML = '';
  div.classList.remove('item');
  const column1 = document.createElement('div');
  div.appendChild(column1);
  column1.classList.add('column');
  const column2 = document.createElement('div');
  div.appendChild(column2);
  column2.classList.add('column');

  const title = document.createElement('div');
  title.classList.add('expand-title');
  title.innerHTML = obj.title;
  div.appendChild(title);

  const Description = document.createElement('div');
  Description.classList.add('note');
  Description.textContent = obj.description;
  column1.appendChild(Description);

  const dueDate = document.createElement('div');
  dueDate.innerHTML = obj.dueDate;
  column2.appendChild(dueDate);

  const priority = document.createElement('div');
  div.style.borderBottom = '1px solid ' + obj.priority;
  column2.appendChild(priority);

  const expand = document.createElement('div');
  expand.classList.add('expandBtn');
  expand.innerHTML = '∨';
  div.prepend(expand);

  const edit = document.createElement('button');
  edit.classList.add('edit-button');
  div.appendChild(edit);
  const editimg = new Image(22);
  editimg.src = editsvg;
  edit.classList.add('edit-button');
  edit.appendChild(editimg);

  edit.addEventListener('click', () => {
    removes(obj);
    edit1(obj.title, obj.description, obj.dueDate);
  });

  expand.addEventListener('click', () => {
    div.classList.remove('item-expand');
    div.classList.add('item');
    div.innerHTML = '';
    const mid = document.querySelector('.mid-content');
    mid.innerHTML = '';
    displayItem(Items, t);
  });
}
