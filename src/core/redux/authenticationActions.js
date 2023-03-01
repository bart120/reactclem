export const login = (payload) => ({
    payload,
    type: 'AUTH_LOGIN'
});

export const logout = () => ({
    type: 'AUTH_LOGOUT'
});