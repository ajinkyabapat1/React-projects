import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../state-management/userSlice";
import movieReducer from "../state-management/movieSlice";
import gptReducer from "../state-management/gptSlice";
import configReducer from "../state-management/configSlice";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    gpt: gptReducer,
    config: configReducer,
  },
});

export default appStore;
