import { createSlice } from "@reduxjs/toolkit";

const chatsSlice = createSlice({
    name: "chat",
    initialState: {
        messages: []
    },
    reducers: {
        addMessages: (state, action)=>{
            state.messages.push(action.payload)
            state.messages.splice(10, 1)
        }
    }
})

export const {addMessages} = chatsSlice.actions
export default chatsSlice.reducer