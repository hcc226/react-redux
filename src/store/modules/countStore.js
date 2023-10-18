import { createSlice } from "@reduxjs/toolkit";

const counter = createSlice({
    name: 'counter',
    initialState: {
        count: 1
    },
    reducers: {
        add(state) {
            state.count++
        }
    }
})


const {add} = counter.actions;
const counterReducer = counter.reducer;


export { add }
export default counterReducer