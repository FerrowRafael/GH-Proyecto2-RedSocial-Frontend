import axios from 'axios';
import store from '../store';
// import { API_URL } from '../../api-config'

// GET ALL PRODUCTS
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