import {combineReducers} from 'redux';

import reducer2 from "./reducers/reducer2";
import reducer1 from "./reducers/reducer1";



export default combineReducers({
  reducer1, reducer2
});