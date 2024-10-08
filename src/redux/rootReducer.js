import { combineReducers } from '@reduxjs/toolkit';
import TwoReducer from './TwoSlice';
import FiveReducer from './FiveSlice';


const rootReducer = combineReducers({
	two: TwoReducer,
	five: FiveReducer
})

export default rootReducer;