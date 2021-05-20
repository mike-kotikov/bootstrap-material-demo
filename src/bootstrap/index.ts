import CardComponent from './components/Card';
import TableComponent from './components/Table';
import ModalComponent from './components/Modal';

import { createElement, getElement, insertHTML, renderElement } from '../utils';

const components = [
  CardComponent,
  TableComponent,
  ModalComponent
];

type ComponentType = {
  containerName: string;
  template: string;
  initialize?: () => void;
}

const renderBootstrapComponents = () => {
  const root = getElement('#materialRoot');

  components.forEach(comp => {
    const {containerName, template, initialize}: ComponentType = comp;
    const container = createElement('div', { class: `container ${containerName}` });

    insertHTML(template, container);
    renderElement(container, root);

    if (initialize) {
      initialize();
    }
  });
}

export { renderBootstrapComponents };
