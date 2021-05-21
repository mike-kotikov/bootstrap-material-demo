const createElement = (type: string, attrs?: { [key: string]: string }): HTMLElement => {
  const elem = document.createElement(type);

  Object.keys(attrs).forEach((attr) => elem.setAttribute(attr, attrs[attr]));

  return elem;
};

const renderElement = (elem: Node, parent: Node): Node | undefined => {
  return parent.appendChild(elem);
};

const render = (elements: (string | Node)[], target: ParentNode): void => {
  target.append(...elements);
};

const insertHTML = (
  html: string,
  target: Element,
  position: 'beforebegin' | 'afterbegin' | 'beforeend' | 'afterend' = 'afterbegin'
): void => {
  target.insertAdjacentHTML(position, html);
};

const getElement = (selector: string): Element | null => {
  return document.querySelector(selector);
};

const getElements = (selector: string): NodeListOf<Element> => {
  return document.querySelectorAll(selector);
};

export { createElement, renderElement, render, insertHTML, getElement, getElements };
