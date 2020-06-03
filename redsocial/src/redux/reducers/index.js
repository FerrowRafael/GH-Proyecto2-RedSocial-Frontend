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
        case 'COMMENTS_POST':
        return {
            ...state,
            comments_post: action.payload
        } 

        //   // COMMENTS  
        //   case 'ADD_COMMENT':
        //     return {
        //         ...state,
        //         comments_post: [...state.comments_post, action.payload]
        //     } 

        case 'GET_POST_DETAIL':
            return {
                ...state,
                postDetail: action.payload
            } 

        default:
            return state;
    }
};

export default reducer;