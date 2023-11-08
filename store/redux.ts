import { configureStore } from '@reduxjs/toolkit';

import themeReducer from '@src/store/theme/themeSlice';
import alertReducer from '@src/store/alert/alertSlice';
import userReducer from '@src/store/user/userSlice';

const reduxStore = configureStore({
    reducer: {
        theme: themeReducer,
        // alert: alertReducer,
        // user: userReducer,

    }
})

export default reduxStore;
export type RootState = ReturnType<typeof reduxStore.getState>
export type AppDispatch = typeof reduxStore.dispatch