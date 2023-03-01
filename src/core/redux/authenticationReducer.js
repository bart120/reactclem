const INITIAL_STATE = {
    user: null,
    isConnected: false,
    token: ''
}

const reducer = (state = INITIAL_STATE, action) => {
    /*console.log("state reducer : ", state);
    console.log("action reducer : ", action);*/
    switch (action.type) {
        case 'AUTH_LOGIN':
            return { isConnected: true, user: action.payload };
        case 'AUTH_LOGOUT':
            return { isConnected: false, user: null };
        default:
            return state;
    }

}

export default reducer;