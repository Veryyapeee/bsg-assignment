import {
    configureStore,
    ThunkAction,
    Action,
    getDefaultMiddleware,
} from "@reduxjs/toolkit";

import thunk from "redux-thunk";

import loginUser from 'ReduxStore/auth/login';
import getVideosList from 'ReduxStore/videos/videos';
import getSingleVideo from 'ReduxStore/videos/singleVideo';

export const store = configureStore({
    reducer: {
        loginUser,
        getVideosList,
        getSingleVideo
    },
    middleware: [
        ...getDefaultMiddleware({
            serializableCheck: false,
        }),
        thunk,
    ],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;