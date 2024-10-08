import { combineReducers } from '@reduxjs/toolkit';
import TwoReducer from './multiplyTwo/TwoReducer';
import FiveReducer from './multiplyFive/FiveReducer';


const rootReducer = combineReducers({
	two: TwoReducer,
	five: FiveReducer
})

export default rootReducer;