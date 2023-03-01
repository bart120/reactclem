const INITIAL_STATE = {
    user: JSON.parse(sessionStorage.getItem('USER')),
    isConnected: sessionStorage.getItem('USER') ? true : false,
    token: ''
}

const reducer = (state = INITIAL_STATE, action) => {
    /*console.log("state reducer : ", state);
    console.log("action reducer : ", action);*/
    switch (action.type) {
        case 'AUTH_LOGIN':
            sessionStorage.setItem('USER', JSON.stringify(action.payload));
            return { isConnected: true, user: action.payload };
        case 'AUTH_LOGOUT':
            sessionStorage.removeItem('USER');
            return { isConnected: false, user: null };
        default:
            return state;
    }

}

export default reducer;