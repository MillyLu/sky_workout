import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/userSlice";
// import { userSlice } from "./Slices/userSlice";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});

/* const rootReducer = combineReducers({
   user: userSlice.reducer,

});

export const store = configureStore({
  reducer: rootReducer,

});

export default store; */
