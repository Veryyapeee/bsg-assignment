import { createSlice } from '@reduxjs/toolkit';

import { AppThunk, RootState } from '../store';

import { SingleVideo, defaultSingleVideo } from 'Utils/types';

import axios from 'Axios/axios';

interface State {
    loading: boolean;
    error: Error | null;
    success: boolean;
    data: SingleVideo;
}

const initialState: State = {
    loading: false,
    error: null,
    success: false,
    data: defaultSingleVideo,
}

const getSingleVideo = createSlice({
    name: 'getSingleVideo',
    initialState,
    reducers: {
        start: (state) => {
            state.loading = true;
            state.error = null;
            state.success = false;
            state.data = defaultSingleVideo;
        },
        success: (state, action) => {
            state.loading = false;
            state.error = null;
            state.success = true;
            state.data = action.payload
        },
        failed: (state, action) => {
            state.loading = true;
            state.error = action.payload;
            state.success = false;
            state.data = defaultSingleVideo;
        }
    }
})

export const { start, success, failed } = getSingleVideo.actions;

export const getSingleVideoFetch = (videoId: number, type: string): AppThunk => async (dispatch) => {
    dispatch(start());
    try {
        const result = await axios.post(`/Media/GetMediaPlayInfo`, {
            MediaId: videoId,
            StreamType: type
        }, {
            headers: { 'Authorization': localStorage.getItem('token') }
        });
        dispatch(success(result.data))
    } catch (error) {
        dispatch(failed(error.response.data));
    }
}

export const selectLoading = (state: RootState) => state.getSingleVideo.loading;
export const selectSuccess = (state: RootState) => state.getSingleVideo.success;
export const selectError = (state: RootState) => state.getSingleVideo.error;

export default getSingleVideo.reducer;
