import axios from 'axios';
import store from '../store';
// import { API_URL } from '../../api-config'

// GET ALL POSTS
export const postsAll = async() => {
    console.log(localStorage.getItem('authToken'))
    const res = await axios.get('http://localhost:8000/api/v1/posts',{
        headers: {
            Authorization: "Bearer " + localStorage.getItem('authToken')
        }
    })
    console.log(res);
    store.dispatch({ 
        type: 'POSTS_ALL',
        payload: res.data
    });
};

// CREATE POST
export const addPost = async() => {

    const res = await axios.post('http://localhost:8000/api/v1/likes', {
        headers: {
            Authorization: localStorage.getItem('authToken')
        }
    });
    store.dispatch({ 
        type: 'ADD_POST',
        payload: res.data
    });
    
}