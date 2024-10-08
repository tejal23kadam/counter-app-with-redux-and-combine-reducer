import { createSlice } from "@reduxjs/toolkit";

const fiveSlice = createSlice({
    
    initialState: { val_five: 1 },
    reducers: {

        multiplyFive: (state, action) => {
            return {
                ...state, val_five: state.val_five * 5
            }
        }

    },
});
export const { multiplyFive } = fiveSlice.actions;
export default fiveSlice.reducer;