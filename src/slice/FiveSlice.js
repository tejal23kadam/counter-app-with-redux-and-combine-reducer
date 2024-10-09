import { createSlice } from "@reduxjs/toolkit";

const fiveSlice = createSlice({
    name:'multi',
    initialState: { val_five: 1 },
    reducers: {

        multiplyFive: (state, action) => {
            return {
                ...state, val_five: state.val_five * 5
            }
        },
        squareFive: (state, action) => {
            return {
                ...state, val_five: state.val_five * 5 *5
            }
        },
    },
});
export const { multiplyFive,squareFive } = fiveSlice.actions;
export default fiveSlice.reducer;