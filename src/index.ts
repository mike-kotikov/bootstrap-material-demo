import { renderBootstrapComponents } from './bootstrap';
import { renderMaterialComponents } from './material';
import { getElement } from './utils';

import './index.scss';

const bootstrapBtn = document.getElementById('bootstrapBtn');
const materialBtn = document.getElementById('materialBtn');

const clear = () => {
  const bootstrapRoot = getElement('#bootstrapRoot');
  const materialRoot = getElement('#materialRoot');
  bootstrapRoot.innerHTML = '';
  materialRoot.innerHTML = '';
}

[bootstrapBtn, materialBtn].forEach(elem => elem.addEventListener('mousedown', clear));

bootstrapBtn.addEventListener('click', renderBootstrapComponents);
materialBtn.addEventListener('click', renderMaterialComponents);
