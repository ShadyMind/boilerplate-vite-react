import { flow } from 'lodash';
import { prepareDocument, bindRescue, renderApp } from '~/renderer';

flow(
  prepareDocument,
  bindRescue,
  renderApp
)(document.getElementById('main'));
