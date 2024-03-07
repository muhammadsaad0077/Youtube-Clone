import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isMenuOpen: true,
        isPageOpen: true
    },
    reducers: {
        toggleMenu: (state) =>{
            state.isMenuOpen = !state.isMenuOpen
        },
        menuClosed: (state)=>{
            state.isMenuOpen = false
        },
        pageOpen: (state)=>{
            state.isPageOpen = false
        }
    }
})

export default appSlice.reducer;
export const {toggleMenu, menuClosed, pageOpen} = appSlice.actions