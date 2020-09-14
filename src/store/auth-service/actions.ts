import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { AuthServiceState } from './state';

const actions: ActionTree<AuthServiceState, StateInterface> = {
  userToken(context, token: any) {
    context.commit("userToken", token);
  },
  savedUserInfoLoggedIn(context, payload: any) {
    context.commit("savedUserInfoLoggedIn", payload);
  }
};

export default actions;
