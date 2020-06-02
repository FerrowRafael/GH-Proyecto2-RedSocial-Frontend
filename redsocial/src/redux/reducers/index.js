const reducer = (state = { }, action) => {
    switch (action.type) {
        // USER
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
        // POSTS ALL
        case 'POSTS_ALL':
            return {
                ...state,
                posts: action.payload
            } 

        // CATEGORIES  
        case 'CATEGORIES_ALL':
        return {
            ...state,
            categories: action.payload
        } 

        // COMMENTS  
        case 'ADD_COMMENT':
        return {
            ...state,
            comments: action.payload
        } 

        default:
            return state;
    }
};

export default reducer;