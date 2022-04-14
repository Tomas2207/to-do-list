import build from './build-item.js';
import { proyects } from './proyect.js';


export default function (title, desc, date) {
  const mid = document.querySelector('.mid-content');
  const formContainer = document.createElement('div');
  formContainer.classList.add('item');
  formContainer.classList.add('item-expand');
  formContainer.classList.add('form-container');
  mid.prepend(formContainer);

  const column1 = document.createElement('div');
  formContainer.appendChild(column1);
  const column2 = document.createElement('div');
  formContainer.appendChild(column2);
  column1.classList.add('column');
  column2.classList.add('column');

  const labelTitle = document.createElement('label');
  labelTitle.innerHTML = 'Title';
  labelTitle.setAttribute('for', 'title');
  column1.appendChild(labelTitle);
  const inputTitle = document.createElement('input');
  inputTitle.type = 'text';
  inputTitle.setAttribute('value', title);
  inputTitle.setAttribute('id', 'title');
  inputTitle.setAttribute('maxlength', 20);
  column1.appendChild(inputTitle);

  const labelDesc = document.createElement('label');
  labelDesc.innerHTML = 'Description';
  labelDesc.setAttribute('for', 'desc');
  column1.appendChild(labelDesc);
  const inputDesc = document.createElement('textarea');
  inputDesc.innerHTML = desc;
  inputDesc.setAttribute('maxlength', 100);
  inputDesc.setAttribute('placeholder', '100 max.');
  inputDesc.setAttribute('id', 'desc');
  column1.appendChild(inputDesc);

  const labelDue = document.createElement('label');
  labelDue.innerHTML = 'Due Date';
  labelDue.setAttribute('for', 'due');
  column1.appendChild(labelDue);
  const inputDue = document.createElement('input');
  inputDue.type = 'date';
  inputDue.setAttribute('id', 'due');
  inputDue.setAttribute('value', date);
  column1.appendChild(inputDue);

  const labelPrior = document.createElement('label');
  labelPrior.innerHTML = 'Priority';
  labelPrior.setAttribute('for', 'prior');
  column2.appendChild(labelPrior);
  // const inputPrior = document.createElement('input');
  // inputPrior.type = 'color';
  // inputPrior.setAttribute('id', 'prior');
  // column2.appendChild(inputPrior);
  const inputPrior = document.createElement('select');
  inputPrior.classList.add('input-proyect');
  column2.appendChild(inputPrior);
  const defaultPriority = document.createElement('option');
  defaultPriority.innerHTML = '- -Select Priority- -';
  inputPrior.appendChild(defaultPriority);
  const greenPriority = document.createElement('option');
  greenPriority.innerHTML = 'Green';
  inputPrior.appendChild(greenPriority);
  const yellowPriority = document.createElement('option');
  yellowPriority.innerHTML = 'Yellow';
  inputPrior.appendChild(yellowPriority);
  const redPriority = document.createElement('option');
  redPriority.innerHTML = 'Red';
  inputPrior.appendChild(redPriority);

  const labelproyect = document.createElement('label');
  labelproyect.innerHTML = 'Proyect';
  labelproyect.setAttribute('for', 'proyect');
  column2.appendChild(labelproyect);
  const inputProyect = document.createElement('select');
  inputProyect.classList.add('input-proyect');
  // inputProyect.type = 'text';
  inputProyect.setAttribute('id', 'proyect');
  column2.appendChild(inputProyect);

  const defaultSelect = document.createElement('option');
  defaultSelect.innerHTML = '- -Select a proyect- -';
  inputProyect.appendChild(defaultSelect);

  proyects.forEach((proyect) => {
    const select = document.createElement('option');
    select.innerHTML = proyect.title;
    select.setAttribute('value', proyect.title);
    inputProyect.appendChild(select);
  });

  const add = document.createElement('button');
  add.innerHTML = '+Add';
  column2.appendChild(add);

  const cancel = document.createElement('button');
  cancel.innerHTML = 'Cancel';
  column2.appendChild(cancel);

  cancel.addEventListener('click', () => {
    mid.removeChild(formContainer);
  });

  add.addEventListener('click', () => {
    mid.innerHTML = '';
    build(
      inputTitle.value,
      inputDesc.value,
      inputDue.value,
      inputPrior.value,
      inputProyect.value
    );
  });
}
