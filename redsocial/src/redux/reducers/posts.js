const posts = (state = {}, action) => {
// POSTS ALL
switch (action.type) {
    case 'POSTS_ALL':
        return {
            ...state,
            posts: action.payload
        } 
    case 'GET_POST_DETAIL':
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