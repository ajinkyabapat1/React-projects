import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../state-management/userSlice";
import movieReducer from "../state-management/movieSlice";
const appStore = configureStore({
  reducer: { user: userReducer, movies: movieReducer },
});

export default appStore;
