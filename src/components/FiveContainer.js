import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import {multiplyFive,squareFive } from '../slice/FiveSlice';

const FiveContainer= () =>{
	const val_five = useSelector(state => state.five.val_five);
	const dispatch = useDispatch();
	return (
		<div>
			<h1>{val_five}</h1>
			<h3>Click the button to multiply the above number by 5</h3>			
			<button onClick={() => dispatch(multiplyFive())}>Multiply by 5</button> 
			<button onClick={() => dispatch(squareFive())}>square of 5</button> 
		</div>
	);
}
export default FiveContainer;