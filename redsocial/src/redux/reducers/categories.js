const categories = (state = {}, action) => {
    switch (action.type) {
        // CATEGORIES  
        case 'CATEGORIES_ALL':
        return {
            ...state,
            categories: action.payload
        } 
        default:
            return state

    }
}
export default categories;