import {MDCRipple} from '@material/ripple';
import { getElements } from '../../../utils';

const init = () => {
  Array.prototype.map.call(
    getElements('.mdc-button, .mdc-icon-button, .mdc-card__primary-action'),
    (el: Element) => new MDCRipple(el)
  );
};

export default init;
