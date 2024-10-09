import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import {multiplySix,addSix } from '../slice/SixSlice';

const SixContainer= () =>{
	const val_six = useSelector(state => state.six.val_six);
	const dispatch = useDispatch();
	return (
		<div>
			<h1>{val_six}</h1>
			<h3>Click the button to multiply the above number by 6</h3>			
			<button onClick={() => dispatch(multiplySix())}>Multiply by 6</button> 
			<button onClick={() => dispatch(addSix())}>Add 6</button> 
		</div>
	);
}
export default SixContainer;