import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import ReactHlsPlayer from "react-hls-player";

import { getSingleVideoFetch } from "ReduxStore/videos/singleVideo";

import styles from "./Player.module.scss";
import { RootState } from "ReduxStore/store";
import { TParams } from "Utils/types";

import HandleFetch from "HOC/HandleFetch";

const Player = () => {
  const playerRef = React.useRef<HTMLVideoElement>(null);
  const dispatch = useDispatch();
  const video = useSelector((state: RootState) => state.getSingleVideo);

  const { videoId } = useParams<TParams>();

  useEffect(() => {
    dispatch(
      getSingleVideoFetch(
        parseInt(videoId),
        localStorage.getItem("userType") || ""
      )
    );
  }, [dispatch, videoId]);

  return (
    <div className={styles.playerWrapper}>
      <HandleFetch
        loading={video.loading}
        error={video.error}
        data={video.data}
      >
        {video.data.ContentUrl === "" || !video.data.ContentUrl ? (
          <span>No data</span>
        ) : (
          <div className={styles.player}>
            <ReactHlsPlayer
              src={video.data.ContentUrl}
              autoPlay={false}
              controls={true}
              width="100%"
              height="auto"
              playerRef={playerRef}
            />
          </div>
        )}
        <div className={styles.description}>
          <div>Description</div>
          {video.data.Description}
        </div>
      </HandleFetch>
    </div>
  );
};

export default Player;
