import axios from 'axios';
import { FETCH_USER } from './types';

//refactored for compact look and feel but better pattern
export const fetchUser = () => async dispatch => {
        const res = await axios.get('/api/current_user');
        dispatch({ type: FETCH_USER, payload: res.data});
};

