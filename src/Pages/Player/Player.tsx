import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import ReactHlsPlayer from "react-hls-player";

import { getSingleVideoFetch } from "ReduxStore/videos/singleVideo";

import styles from "./Player.module.scss";
import { RootState } from "ReduxStore/store";
import { TParams } from "Utils/types";

import HandleFetch from "HOC/HandleFetch";
import SectionTitle from "Atoms/SectionTitle/SectionTitle";
import VideoDescription from "Atoms/VideoDescription/VideoDescription";

import NoData from "Assets/nodata.png";

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
        status={video.status}
      >
        <div className={styles.playerInnerWrapper}>
          {video.data.ContentUrl === "" || !video.data.ContentUrl ? (
            <img src={NoData} alt="No data provided" />
          ) : (
            <ReactHlsPlayer
              src={video.data.ContentUrl}
              autoPlay={false}
              controls={true}
              width="100%"
              height="auto"
              playerRef={playerRef}
            />
          )}
          <div className={styles.description}>
            <SectionTitle>Description</SectionTitle>
            <VideoDescription>{video.data.Description}</VideoDescription>
          </div>
        </div>
      </HandleFetch>
    </div>
  );
};

export default Player;
