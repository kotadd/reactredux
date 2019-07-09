import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import adminReducer from './adminReducer';

export default combineReducers({
  users: usersReducer,
  auth: authReducer,
  admins: adminReducer
});
