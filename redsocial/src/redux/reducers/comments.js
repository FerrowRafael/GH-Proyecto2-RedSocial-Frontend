const comments = (state = {}, action) => {
    switch (action.type) {
        // GET COMMENTS  
        case 'GET_COMMENTS':
        return {
            ...state,
            comments_post: action.payload
        } 

        case 'ADD_COMMENT':
            return {
                ...state,
                comments_post: [...state.comments_post, action.payload]
            } 

        default:
            return state
    
    }
}
export default comments;