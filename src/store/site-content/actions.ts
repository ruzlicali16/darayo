import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { SiteContentState } from './state';

const actions: ActionTree<SiteContentState, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default actions;
