import React from "react";
import { useSelector } from "react-redux";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import VideoImage from "Atoms/VideoImage/VideoImage";
import VideoTitle from "Atoms/VideoTitle/VideoTitle";
import VideoCard from "Molecules/VideoCard/VideoCard";
import WatchVideoButton from "Atoms/WatchVideoButton/WatchVideoButton";
import VideoDescription from "Atoms/VideoDescription/VideoDescription";

import VideosTemplate from "Templates/VideosTemplate/VideosTemplate";

import { RootState } from "ReduxStore/store";
import { Video } from "Utils/types";

import styles from "./Home.module.scss";
import BigTitle from "Atoms/BigTitle/BigTitle";

library.add(faPlayCircle);

const Home = () => {
  const videos = useSelector((state: RootState) => state.getVideosList);

  return (
    <div className={styles.main}>
      <BigTitle>Most watched</BigTitle>
      <VideosTemplate maxSize={1}>
        {videos.data.Entities.map((vid: Video) => (
          <VideoCard key={vid.Id}>
            <VideoImage alt={vid.Title} src={vid.Images[0].Url} />
            <div className={styles.cardRight}>
              <VideoTitle>{vid.Title}</VideoTitle>
              <VideoDescription>{vid.Description}</VideoDescription>
              <WatchVideoButton path={`/logged/videos/${vid.Id}`}>
                <FontAwesomeIcon icon={faPlayCircle} /> Watch
              </WatchVideoButton>
            </div>
          </VideoCard>
        ))}
      </VideosTemplate>
    </div>
  );
};

export default Home;
