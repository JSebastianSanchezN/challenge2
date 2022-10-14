export const SET_LOGGED_IN = (state, value) => {
    state.user.loggedIn = value;
};

export const SET_USER = (state, data) => {
    state.user.data=data;
}