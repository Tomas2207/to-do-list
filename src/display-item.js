import removes from './remove.js';
import expandedItem from './expanded-item.js';

export default function (list, title) {
  if (title === 'All') {
    list.forEach((i) => {
      const mid = document.querySelector('.mid-content');

      const item = document.createElement('div');
      item.classList.add('item');
      mid.appendChild(item);
      const title = document.createElement('div');
      title.innerHTML = i.title;
      title.classList.add('item-title');
      item.appendChild(title);
      const dueDate = document.createElement('div');
      dueDate.innerHTML = i.dueDate;
      dueDate.classList.add('item-title');
      item.appendChild(dueDate);
      const priority = document.createElement('div');

      item.style.borderBottom = '1px solid ' + i.priority;
      item.appendChild(priority);

      const remove = document.createElement('div');
      remove.classList.add('remove');
      remove.innerHTML = '-';
      item.appendChild(remove);

      const expand = document.createElement('div');
      expand.classList.add('expandBtn');
      expand.innerHTML = '>';
      item.prepend(expand);

      expand.addEventListener('click', () => {
        item.classList.add('item-expand');

        expandedItem(item, i, 'All');
      });

      remove.addEventListener('click', () => {
        removes(i);
      });
    });
  } else {
    list.forEach((i) => {
      if (i.proyect === title) {
        const mid = document.querySelector('.mid-content');

        const item = document.createElement('div');
        item.classList.add('item');
        mid.appendChild(item);
        const title = document.createElement('div');
        title.innerHTML = i.title;
        title.classList.add('item-title');
        item.appendChild(title);
        const dueDate = document.createElement('div');
        dueDate.innerHTML = i.dueDate;
        dueDate.classList.add('item-title');
        item.appendChild(dueDate);
        const priority = document.createElement('div');

        item.style.borderBottom = '1px solid ' + i.priority;
        item.appendChild(priority);

        const expand = document.createElement('div');
        expand.classList.add('expandBtn');
        expand.innerHTML = '>';
        item.prepend(expand);

        expand.addEventListener('click', () => {
          item.classList.add('item-expand');

          expandedItem(item, i, i.proyect);
          console.log('title ', i.title);
        });

        const remove = document.createElement('div');
        remove.classList.add('remove');
        remove.innerHTML = '-';
        item.appendChild(remove);

        remove.addEventListener('click', () => {
          removes(i);
        });
      }
    });
  }
}
