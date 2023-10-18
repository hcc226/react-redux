import { createSlice } from "@reduxjs/toolkit";

const taskStore = createSlice({
    name: 'task',
    initialState: {
        taskList: ['react']
    },
    reducers: {
        addTaskList(state, action) {
            state.taskList.push(action.payload)
        }
    }
})


const addTaskList = taskStore.actions;
export {addTaskList}
const taskReducer = taskStore.reducer;

export default taskReducer