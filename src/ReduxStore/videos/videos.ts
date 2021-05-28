import { createSlice } from '@reduxjs/toolkit';

import { AppThunk, RootState } from '../store';

import { VideoData, FetchVideosEntryData, defaultVideoData } from 'Utils/types';

import axios from 'Axios/axios';

interface State {
    loading: boolean;
    error: Error | null;
    success: boolean;
    data: VideoData;
    status: number;
}

const initialState: State = {
    loading: false,
    error: null,
    success: false,
    data: defaultVideoData,
    status: 200
}


const getVideosList = createSlice({
    name: 'getVideosList',
    initialState,
    reducers: {
        start: (state) => {
            state.loading = true;
            state.error = null;
            state.success = false;
            state.data = defaultVideoData;
            state.status = 200;
        },
        success: (state, action) => {
            state.loading = false;
            state.error = null;
            state.success = true;
            state.data = action.payload.data;
            state.status = action.payload.status;
        },
        failed: (state, action) => {
            state.loading = true;
            state.error = action.payload;
            state.success = false;
            state.data = defaultVideoData;
            state.status = 400;
        }
    }
})

export const { start, success, failed } = getVideosList.actions;

export const getVideosListFetch = (data: FetchVideosEntryData): AppThunk => async (dispatch) => {
    dispatch(start());
    try {
        const result = await axios.post('/Media/GetMediaList', data, {
            headers: { 'Authorization': localStorage.getItem('token') }
        });
        dispatch(success({ data: result.data, status: result.status }));
    } catch (error) {
        dispatch(failed(error.response.data));
    }


}

export const selectLoading = (state: RootState) => state.getVideosList.loading;
export const selectSuccess = (state: RootState) => state.getVideosList.success;
export const selectError = (state: RootState) => state.getVideosList.error;

export default getVideosList.reducer;
