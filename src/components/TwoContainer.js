import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import {multiplyTwo } from '../slice/TwoSlice';

const TwoContainer = () => {
	const val_two = useSelector(state => state.two.val_two);
	const dispatch = useDispatch();
	return (
		<div>
			<h1>{val_two}</h1>
			<h3>Click the button to multiply the above number by 2</h3>
			<button onClick={() => dispatch(multiplyTwo())}>Multiply by 2</button>
		</div>
	);
}
export default TwoContainer;