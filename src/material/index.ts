import AppBarComponent from './components/AppBar';
import CardComponent from './components/Card';
import TableComponent from './components/Table';

import { createElement, getElement, insertHTML, renderElement } from '../utils';

const components = [AppBarComponent, CardComponent, TableComponent];

const renderMaterialComponents = () => {
  const root = getElement('#materialRoot');

  components.forEach((comp) => {
    const { containerName, template, initialize } = comp;
    const container = createElement('div', {
      class: `container ${containerName}`,
    });

    insertHTML(template, container);
    renderElement(container, root);
    initialize();
  });
};

export { renderMaterialComponents };
