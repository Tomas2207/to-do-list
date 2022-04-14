import { proyects } from './proyect.js';
import { Items } from './todo-item.js';

localStorage;

Storage.prototype.setObj = function (key, obj) {
  return this.setItem(key, JSON.stringify(obj));
};
Storage.prototype.getObj = function (key) {
  return JSON.parse(this.getItem(key));
};

function checkStorageItem() {
  if (localStorage.getObj('item') !== null) {
    let newLibrary = localStorage.getObj('item');
    console.log('new', newLibrary);
    newLibrary.forEach((item) => {
      Items.push(item);
      console.log('this one', Items);
    });
  }
}
function checkStorageProyect() {
  if (localStorage.getObj('proyect') !== null) {
    let newLibrary2 = localStorage.getObj('proyect');
    console.log('new2', newLibrary2);
    newLibrary2.forEach((proyect) => {
      proyects.push(proyect);
      console.log('this other one', proyects);
    });
  }
}

function resetStorage() {
  localStorage.clear();
  localStorage.setObj('item', Items);
  localStorage.setObj('proyect', proyects);
}

function addItemToStorage(obj) {
  localStorage.clear();
  localStorage.setObj('item', Items);
  console.log(localStorage);
}

function addProyectToStorage(obj) {
  localStorage.clear();
  localStorage.setObj('proyect', proyects);
  console.log(localStorage);
}

export {
  checkStorageItem,
  addItemToStorage,
  checkStorageProyect,
  addProyectToStorage,
  resetStorage,
};
