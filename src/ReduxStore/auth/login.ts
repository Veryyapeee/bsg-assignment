import { createSlice } from '@reduxjs/toolkit';

import { AppThunk, RootState } from '../store';
import { UserData, LoginData, AnonymData, defaultUser } from 'Utils/types';

import axios from 'Axios/axios';

interface State {
    loading: boolean;
    error: Error | null;
    success: boolean;
    data: UserData;

}

const initialState: State = {
    loading: false,
    error: null,
    success: false,
    data: defaultUser,

}

const loginUser = createSlice({
    name: 'login',
    initialState,
    reducers: {
        start: (state) => {
            state.loading = true;
            state.error = null;
            state.success = false;
            state.data = defaultUser;

        },
        success: (state, action) => {
            state.loading = false;
            state.error = null;
            state.success = true;
            state.data = action.payload;

        },
        failed: (state, action) => {
            state.loading = true;
            state.error = action.payload;
            state.success = false;
            state.data = defaultUser;

        },
        logout: (state) => {
            state.loading = false;
            state.error = null;
            state.success = false;
            state.data = defaultUser;

        }
    }
})

export const { start, success, failed, logout } = loginUser.actions;

export const loginUserFetch = (userType: string, loginData: LoginData = AnonymData): AppThunk => async (dispatch) => {
    dispatch(start());
    try {
        const result = await axios.Auth.login(loginData);
        dispatch(success(result.data));
        localStorage.setItem('token', result.data.AuthorizationToken.Token);
        localStorage.setItem('userType', userType);
    } catch (error) {
        dispatch(failed(error.response.data));
    }
}

export const logoutAction = (): AppThunk => (dispatch) => {
    dispatch(logout());
    localStorage.clear();
}

export const selectLoading = (state: RootState) => state.loginUser.loading;
export const selectSuccess = (state: RootState) => state.loginUser.success;
export const selectError = (state: RootState) => state.loginUser.error;

export default loginUser.reducer;
