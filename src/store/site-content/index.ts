import { Module } from 'vuex';
import { StateInterface } from '../index';
import state, { SiteContentState } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const exampleModule: Module<SiteContentState, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

export default exampleModule;
