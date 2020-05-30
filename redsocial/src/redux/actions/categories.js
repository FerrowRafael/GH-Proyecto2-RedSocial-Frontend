import axios from 'axios';
import store from '../store';
// import { API_URL } from '../../api-config'

// CATEGORIES ALL PRODUCTS
export const categoriesAll = async() => {
    console.log(localStorage.getItem('authToken'))
    const res = await axios.get('http://localhost:8000/api/v1/categories',{
        headers: {
            Authorization: "Bearer " + localStorage.getItem('authToken')
        }
    })
    console.log(res);
    store.dispatch({ 
        type: 'CATEGORIES_ALL',
        payload: res.data
    });
};