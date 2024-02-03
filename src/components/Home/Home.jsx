import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import Nav from "../Nav/Nav";

import { getAllVideos } from "../../apiServices/videoApis";
import ButtonLoader from "../Loader/ButtonLoader";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import Row4 from "./Row4";
import Row5 from "./Row5";
import Row6 from "./Row6";

export default function Home() {
  // const [loading, setLoading] = useState(false);
  // const [videoData, setVideoData] = useState([]);
  // const [organizedData, setOrganizedData] = useState({});
  // const [genres, setGenres] = useState([]);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 3,
    },
    laptop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 330 },
      items: 1,
    },
    mobileSmall: {
      breakpoint: { max: 320, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  // useEffect(() => {
  //   fetchVideos();
  // }, []);

  // const fetchVideos = async () => {
  //   setLoading(true);
  //   const videos = await getAllVideos();
  //   console.log(videos);
  //   const organizedData = videos.data.reduce((acc, movie) => {
  //     const genre = movie.genre;
  //     if (!acc[genre]) {
  //       acc[genre] = [movie];
  //     } else {
  //       acc[genre].push(movie);
  //     }
  //     return acc;
  //   }, {});

  //   setOrganizedData(organizedData);
  //   setGenres(Object.keys(organizedData));
  //   setVideoData(videos.data);

  //   setLoading(false);
  // };

  // console.log("OD", organizedData);
  // console.log("Genre", genres);

  return (
    <>
      <div
        style={{
          height: "100%",
          background: "#242424",
        }}
      >
        <Banner />
        <Row1 responsive={responsive} />
        <Row2 responsive={responsive} />
        <Row3 responsive={responsive} />
        <Row4 responsive={responsive} />
        <Row5 responsive={responsive} />
        <Row6 responsive={responsive} />
      </div>
    </>
  );
}
