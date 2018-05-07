import axios from 'axios';
import _ from 'lodash';

export const FETCH_POSTS = 'FETCH_POSTS';

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
