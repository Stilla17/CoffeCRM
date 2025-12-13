import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
    name: "toggle",
    initialState: {
        active: null,
    },
    reducers: {
        setActive: (state, action) => {
            state.active = action.payload;
        },
    },
})

export const { setActive } = toggleSlice.actions;
export default toggleSlice.reducer;