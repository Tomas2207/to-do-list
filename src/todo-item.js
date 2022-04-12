let Items = [];

export default class Item {
  constructor(title, description, dueDate, priority, proyect) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.proyect = proyect;
  }

  addItem(item) {
    Items.push(item);
  }
}

export { Items };
