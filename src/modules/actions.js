import axios from 'axios';
import _ from 'lodash';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=hola1234';

const initialState = {
  primero: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      //console.log(_.mapKeys(action.payload, 'id'));
      return { ...state, todos: _.mapKeys(action.payload, 'id') };
    case CREATE_POST:
    return action.payload;


    case FETCH_POST:
      return { ...state, post: action.payload.data};
    default:
      return state;
  }
};

// export function fetchPosts() {
//     const request = axios.get(`${ROOT_URL}/posts${API_KEY}`)
//                     .then(function (response) {
//                         //console.log(response.data);
//                         return response.data;
//     });

//     //console.log(request);
//     return {
//         type: FETCH_POSTS,
//         payload: request
//     }
// }

export function fetchPosts() {
  const url = `${ROOT_URL}/posts${API_KEY}`;
  return function(dispatch) {
    axios.get(url).then(response =>
      dispatch({
        type: FETCH_POSTS,
        payload: response.data
      })
    );
  };
}

export function createPost(values, callback) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
                  .then(() => callback());

  return{
    type: CREATE_POST,
    payload: request
  }
}

export function deletePost(id, callback) {
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
    .then(() => callback());

  return {
    type: DELETE_POST,
    payload: id
  }
}


export function fetchPost(id) {
  const url = `${ROOT_URL}/posts/${id}${API_KEY}`;
  return function (dispatch) {
    axios.get(url).then(response =>
      dispatch({
        type: FETCH_POST,
        payload: response
      })
    );
  };
}
