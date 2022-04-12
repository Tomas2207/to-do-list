import { Items } from './todo-item.js';
import display from './display-item.js';
import { proyects } from './proyect.js';
import sideBar from './side-bar.js';
import addProyect from './add-proyect.js';
import displayProjects from './display-projects.js';

export default function (item) {
  Items.splice(Items.indexOf(item), 1);
  const mid = document.querySelector('.mid-content');
  mid.innerHTML = '';
  display(Items, 'All');
}

const proyectRemove = function (pro) {
  proyects.splice(proyects.indexOf(pro), 1);
  console.log(proyects.indexOf(pro));
  const sidebar = document.querySelector('.side-bar');
  sidebar.innerHTML = '';
  sideBar();
  addProyect();
  displayProjects(proyects);
};

export { proyectRemove };
