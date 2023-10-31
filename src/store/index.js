import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./modules/countStore";
import taskReducer from "./modules/taskStore";
import commentStore from "./modules/commentStore";

export default configureStore({
    reducer: {
        counter: counterReducer,
        task: taskReducer,
        comment: commentStore
    }
})