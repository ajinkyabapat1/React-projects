import {configureStore} from '@reduxjs/toolkit'

import userReducer from "../state-management/userSlice";

const appStore=configureStore({
    reducer:{ user: userReducer,}
})

export default appStore;