import { createSlice } from "@reduxjs/toolkit";

const twoSlice = createSlice({
    name:'multi',
    initialState: { val_two: 1 },
    reducers: {
        multiplyTwo: (state, action) => {
            return {
				...state,
				val_two: state.val_two * 2
            }
        }
    },
});
export const { multiplyTwo } = twoSlice.actions;
export default twoSlice.reducer;