export default class Section {
  constructor(renderer, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  // принимаем DOM-элемент и добавляем его в контейнер
  addItem(data) {
    this._container.append(data);
  }

  // метод, отвечает за отрисовку элементов
  renderItems(items) {
    items.map((item) => this._renderer(item));
  }
}
