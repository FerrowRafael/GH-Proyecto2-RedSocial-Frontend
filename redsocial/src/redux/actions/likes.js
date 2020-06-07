import axios from 'axios';
import store from '../store';
import { postsAll } from '../../redux/actions/posts';
// import { API_URL } from '../../api-config'

// ALL LIKES
export const AllLikes = async() => {
    const res = await axios.get('http://localhost:8000/api/v1/likes',{
        headers: {
            Authorization: "Bearer " + localStorage.getItem('authToken')
        }
    })
    store.dispatch({ 
        type: 'LIKES_ALL',
        payload: res.data
    });
};

// ADD LIKE
export const addLike = async(post_id) => {
    const res = await axios.post('http://localhost:8000/api/v1/likes', {post_id},{
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('authToken')
                }
            })
                .catch(console.error)
    store.dispatch({ 
        type: 'LIKES_ALL',
        payload: res.data
    });
    postsAll();
};

// DISLIKE
export const dislike = async(post_id) => {
    const res = await axios.delete('http://localhost:8000/api/v1/likes/' + post_id, {
        headers: {
            Authorization: "Bearer " + localStorage.getItem('authToken')
        }
    })
        .catch(console.error)
    store.dispatch({ 
        type: 'LIKES_ALL',
        payload: res.data
    });
    postsAll();
};

// LIKES BY POST ID
export const likesPost = async(post_id) => {
    const res = await axios.get('http://localhost:8000/api/v1/likes/post/' + post_id,{
        headers: {
            Authorization: "Bearer " + localStorage.getItem('authToken')
        }
    })
    console.log(res.data);
    store.dispatch({ 
        type: 'GET_LIKES',
        payload: res.data
    });
};