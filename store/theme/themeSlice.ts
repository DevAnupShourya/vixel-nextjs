import { createSlice } from '@reduxjs/toolkit';

const initialState  = {
    mode: 'dark' as string,
}

export const counterSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.mode = state.mode === 'dark' ? 'light' : 'dark'
        },
    },
})

export const { toggleTheme } = counterSlice.actions
export default counterSlice.reducer;