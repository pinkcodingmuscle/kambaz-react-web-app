import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import accountReducer from "./Account/reducer";
//import { assignments } from "./Database";
import assignmentsReducer from "./Courses/Assignments/reducer";
import coursesReducer from "./Courses/reducer";
import enrollmentReducer from "./Courses/People/reducer";



const store = configureStore({
  reducer: {
    modulesReducer,
    accountReducer,
    assignmentsReducer,
    coursesReducer,
    enrollmentReducer,
  },
  devTools: process.env.NODE_ENV !== "production", // Enables DevTools in development mode
});
export default store;

