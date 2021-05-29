import { request } from 'Axios/axios';

import { VideoData, SingleVideo, FetchVideosEntryData, SingleVideoEntryData } from 'Utils/types';

const Videos = {
    getAllVideos: (data: FetchVideosEntryData) => request.post<VideoData>('/Media/GetMediaList', data),
    getSingleVideo: (data: SingleVideoEntryData) => request.post<SingleVideo>(`/Media/GetMediaPlayInfo`, data)
}

export default Videos;