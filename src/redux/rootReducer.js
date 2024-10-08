import { combineReducers } from 'redux';
import TwoReducer from './multiplyTwo/TwoReducer';
import FiveReducer from './multiplyFive/FiveReducer';


const rootReducer = combineReducers({
	two: TwoReducer,
	five: FiveReducer
})

export default rootReducer;