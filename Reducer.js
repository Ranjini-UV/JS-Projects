//import { combineReducers } from 'redux';
import displayCardReducer from './src/Reducers';
const initialState={
  cards:[],
  isFetching: false
};

// const rootReducer = combineReducers({
//   displayCardReducer
// })
const rootReducer = displayCardReducer;
  export default rootReducer;