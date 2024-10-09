import { createSlice } from "@reduxjs/toolkit";

const sixSlice = createSlice({
    name:'multi',
    initialState: { val_six: 1 },
    reducers: {
        multiplySix: (state, action) => {
            return {
                ...state, val_six: state.val_six * 6
            }
        },
        addSix: (state, action) => {
            return {
                ...state, val_six: state.val_six + 6
            }
        }
    },
});
export const { multiplySix,addSix } = sixSlice.actions;
export default sixSlice.reducer;