
import { combineReducers } from "redux";
// import categories from "./categories";
// import comments from "./comments";
// import likes from "./likes";
import posts from "./posts";
import users from "./users";


const reducer = combineReducers({
    categories,
    comments,
    likes,
    posts,
    users,
})
export default reducer;


// const reducer = (state = { }, action) => {
//     switch (action.type) {
//         // USER
//         // LOGIN
//         case 'LOGIN':
//             return {
//                 ...state,
//                 user: action.payload
//             }
//         // LOGOUT
//         case 'LOGOUT':
//             return {
//                 ...state,
//                 user: undefined
//             }
//         // POSTS ALL
//         case 'POSTS_ALL':
//             return {
//                 ...state,
//                 posts: action.payload
//             } 

//         // CATEGORIES  
//         case 'CATEGORIES_ALL':
//         return {
//             ...state,
//             categories: action.payload
//         } 

//         // COMMENTS  
//         case 'GET_COMMENTS':
//         return {
//             ...state,
//             comments_post: action.payload
//         } 

//         case 'ADD_COMMENT':
//             return {
//                 ...state,
//                 comments_post: [...state.comments_post, action.payload]
//             } 

//         /* fin COMMENTS */

//         // LIKES
//         case 'GET_LIKES':
//             return {
//                 ...state,
//                 likes_post: action.payload
//         } 

//         case 'ADD_LIKES':
//             return {
//                 ...state,
//                 likes_post: [...state.likes_post, action.payload]
//             } 

//         case 'DISLIKES':
//             return {
//                 ...state,
//                 likes_post: [...state.likes_post, action.payload]
//             } 

//         /* fin LIKES */

//         case 'GET_POST_DETAIL':
//             return {
//                 ...state,
//                 postDetail: action.payload
//             } 

//         case 'SEARCH_RESULT':
//             return {
//                 ...state,
//                 result: action.payload
//                 }
//         case 'SEARCH_NAME':
//             return {
//                 ...state,
//                 postSearchResult: action.payload
//             }
//         default:
//             return state;
//     }
// };

// export default reducer;