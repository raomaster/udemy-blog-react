import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import actions from './actions';

export default combineReducers({
  router: routerReducer,
  posts: actions,
  form: formReducer
});
