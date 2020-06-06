const users = (state = {}, action) => {
    switch (action.type) {
        // LOGIN
        case 'LOGIN':
            return {
                ...state,
                user: action.payload
            }
        // LOGOUT
        case 'LOGOUT':
            return {
                ...state,
                user: undefined
            }
        default:
            return state

    }
}
export default users;