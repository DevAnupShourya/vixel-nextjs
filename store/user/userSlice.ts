import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'
import { userDataInterface } from "@src/types/index";

const initialState = {
    name: '' as string,
    username: '' as string,
    joining: '' as string,
    coverImgSrc: '' as string,
    avatarImgSrc: '' as string,
}

export const userSlice = createSlice({
    name: 'userData',
    initialState,
    reducers: {
        updateUserData: (state, action: PayloadAction<userDataInterface>) => {
            state.avatarImgSrc = action.payload.avatarImgSrc;
            state.coverImgSrc = action.payload.coverImgSrc;
            state.joining = action.payload.joining;
            state.name = action.payload.name;
            state.username = action.payload.username;
        }
    },
})

export const { updateUserData } = userSlice.actions;
export default userSlice.reducer;