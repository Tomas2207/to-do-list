import displayProyect from './display-projects.js';
import { addProyectToStorage, resetStorage } from './localStorage.js';
import proyect from './proyect.js';
import { proyects } from './proyect.js';

// let proyects = [];

export default function () {
  const sidebar = document.querySelector('.side-bar');
  const proyectBtn = document.querySelector('#proyect-btn');

  proyectBtn.addEventListener('click', () => {
    const formContainer = document.createElement('div');
    formContainer.classList.add('item');
    formContainer.classList.add('side-proyect');
    // formContainer.classList.add('form-container');
    formContainer.classList.add('proyect-form');
    sidebar.insertBefore(formContainer, sidebar.children[1]);

    const labelTitle = document.createElement('label');
    labelTitle.innerHTML = 'Title';
    labelTitle.setAttribute('for', 'title');
    formContainer.appendChild(labelTitle);
    const inputTitle = document.createElement('input');
    inputTitle.type = 'text';
    inputTitle.setAttribute('maxlength', 20);
    inputTitle.setAttribute('id', 'title');
    formContainer.appendChild(inputTitle);

    const buttonCont = document.createElement('div');
    formContainer.appendChild(buttonCont);

    const add = document.createElement('button');
    add.innerHTML = '+';
    add.classList.add('proyect-btn');
    buttonCont.appendChild(add);

    const cancel = document.createElement('button');
    cancel.innerHTML = 'x';
    cancel.classList.add('proyect-btn');
    buttonCont.appendChild(cancel);

    cancel.addEventListener('click', () => {
      sidebar.removeChild(formContainer);
    });

    add.addEventListener('click', () => {
      const proy = new proyect(inputTitle.value);
      proy.addItem(proy);
      resetStorage();

      console.log('this: ', proyects.indexOf(proy));
      displayProyect(proyects);
      sidebar.removeChild(formContainer);
    });

    proyectBtn.addEventListener('click', () => {
      sidebar.removeChild(formContainer);
    });
  });
}

// export { proyects };
