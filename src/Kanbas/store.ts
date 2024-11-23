import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import accountReducer from "./Account/reducer";
import assignmentsReducer from "./Courses/Assignments/reducer";
import enrollmentReducer from "./Dashboard/enrollmentSlice";

const store = configureStore({
    reducer: {
        modulesReducer,
        accountReducer,
        assignmentsReducer,
        enrollmentReducer,
    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
