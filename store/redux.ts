import { configureStore } from '@reduxjs/toolkit'

import themeReducer from '@src/store/theme/themeSlice'
import alertReducer from '@src/store/alert/alertSlice'
import userReducer from '@src/store/user/userSlice'

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        alert: alertReducer,
        user: userReducer,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch