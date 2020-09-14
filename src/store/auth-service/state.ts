export interface AuthServiceState {
    userToken: any;
    savedUserInfoLoggedIn: any;
}

const state: AuthServiceState = {
    userToken: null,
    savedUserInfoLoggedIn: null
};

export default state;
