import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
    name: "toggle",
    initialState: {
        active: null,
        open: false,
    },
    reducers: {
        setActive: (state, action) => {
            state.active = action.payload;
        },
        setOpen: (state, action) => {
            state.open = action.payload;
        },
    },
})

export const { setActive, setOpen } = toggleSlice.actions;
export default toggleSlice.reducer;