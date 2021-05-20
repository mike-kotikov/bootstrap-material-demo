import { getElement } from '../../../utils';

const init = () => {
  const saveBtn = getElement('.btn-save');

  saveBtn.addEventListener('click', () => alert('Changes Saved!'));
}

export default init;
