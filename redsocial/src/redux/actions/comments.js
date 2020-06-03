import axios from 'axios';
import store from '../store';
import {postsAll} from './posts'
// import { API_URL } from '../../api-config'

// COMMENTS ALL
export const comentariosPost = async(post_id) => {
    console.log(localStorage.getItem('authToken'))
    const res = await axios.get('http://localhost:8000/api/v1/comments/post' + post_id,{
        headers: {
            Authorization: "Bearer " + localStorage.getItem('authToken')
        }
    })
    .catch(console.error)
    console.log(res);
    store.dispatch({ 
        type: 'ADD_COMMENT',
        payload: res
    });
    
};

// COMMENTS BY POST ID
export const comentar = async(text, post_id) => {
    console.log(localStorage.getItem('authToken'))
    const res = await axios.post('http://localhost:8000/api/v1/comments/' + post_id, text,{
        headers: {
            Authorization: "Bearer " + localStorage.getItem('authToken')
        }
    })
    .catch(console.error)
    console.log(res);
    store.dispatch({ 
        type: 'COMMENTS_POST',
        payload: res.data
    });
    postsAll();
};
