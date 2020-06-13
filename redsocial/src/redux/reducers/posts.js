const posts = (state = {}, action) => {

switch (action.type) {
    // POSTS ALL
    case 'POSTS_ALL':
        return {
            ...state,
            posts: action.payload
        } 
    case 'POST_DETAIL':
        return {
            ...state,
            postDetail: action.payload
        } 
    case 'SEARCH_RESULT':
        return {
            ...state,
            result: action.payload
            }
    case 'SEARCH_NAME':
        return {
            ...state,
            postSearchResult: action.payload
        }
    case 'UPDATE_POST':
        return {
            ...state,
            postSearchResult: action.payload
        }    
    default:
        return state

    }
    
}
export default posts;