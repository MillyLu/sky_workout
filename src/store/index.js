import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./Slices/userSlice";
import { coursesApi } from "../services/courses";



const rootReducer = combineReducers({
  [coursesApi.reducerPath]: coursesApi.reducer,
  user: userReducer,

});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(coursesApi.middleware)
});

export default store; 
