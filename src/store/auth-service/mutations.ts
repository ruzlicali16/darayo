import { MutationTree } from 'vuex';
import { AuthServiceState } from './state';

const mutation: MutationTree<AuthServiceState> = {
  userToken(state: AuthServiceState, token: any) {
    state.userToken = token;
  },
  savedUserInfoLoggedIn(state: AuthServiceState, payload: any) {
    state.savedUserInfoLoggedIn = payload;
  }
};

export default mutation;
