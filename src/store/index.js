import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./modules/countStore";
import taskReducer from "./modules/taskStore";

export default configureStore({
    reducer: {
        counter: counterReducer,
        task: taskReducer,
    }
})