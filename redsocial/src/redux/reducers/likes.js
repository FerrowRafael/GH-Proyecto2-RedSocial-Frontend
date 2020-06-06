const likes = (state = {}, action) => {
    switch (action.type) {
        // LIKES
        case 'GET_LIKES':
            return {
                ...state,
                likes_post: action.payload
        } 

        case 'ADD_LIKES':
            return {
                ...state,
                likes_post: [...state.likes_post, action.payload]
            } 

        case 'DISLIKES':
            return {
                ...state,
                likes_post: [...state.likes_post, action.payload]
            } 
            
        default:
            return state

    }
}
export default likes;