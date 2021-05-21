import { MDCTopAppBar } from '@material/top-app-bar';
import { getElement } from '../../../utils';

const init = () => {
  const topAppBarElement = getElement('.mdc-top-app-bar');
  return new MDCTopAppBar(topAppBarElement);
};

export default init;
