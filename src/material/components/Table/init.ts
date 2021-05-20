import {MDCDataTable} from '@material/data-table';
import { getElement } from '../../../utils';

const init = () => new MDCDataTable(getElement('.mdc-data-table'));

export default init;
