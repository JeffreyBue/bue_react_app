/**
 * Top-level Application reducer
 */
import { combineReducers } from 'redux';
import { reducerFunction as storeState } from './rootDuck';

export default combineReducers({
	storeState
});
