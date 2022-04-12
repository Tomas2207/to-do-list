let proyects = [];

export default class proyect {
  constructor(title) {
    this.title = title;
  }

  addItem(item) {
    proyects.push(item);
  }
}

export { proyects };
