
import { combineReducers } from "redux";
import categories from "./categories";
import comments from "./comments";
import likes from "./likes";
import posts from "./posts";
import users from "./users";


const reducer = combineReducers({
    categories,
    comments,
    likes,
    posts,
    users
})
export default reducer;
