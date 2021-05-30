import React, { useEffect, useState } from "react";
import Carousel from "../../components/Carousel";
import Movies from "../../components/Movies";
import GeneralSkeleton from "../../skeletons/GeneralSkeleton";
import { useFetchAll } from "../../common/useFetchAll";
import { filterPosterNull } from "../../common/helper";
import GeneralTemplate from "../../templates/general";
import "../../styles/style.css";
import {
  trending_endpoint,
  movieNowPlaying_endpoint,
  discover_movie_by_date_endpoint,
} from "../../common/endpoints";

export default function Home() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [nowPlaying, setNowPlaying] = useState({
    loading: "idle",
    data: [],
    error: null,
  });

  const homepageData = useFetchAll([
    trending_endpoint,
    movieNowPlaying_endpoint,
  ]);

  useEffect(() => {
    if (homepageData.loading === "succeeded") {
      setNowPlaying({ ...nowPlaying, data: homepageData.data[1].results });
    }
  }, [homepageData.loading, homepageData.data]);

  const filterMovieByDate = async (startDate, endDate) => {
    setNowPlaying({ ...nowPlaying, loading: "loading" });
    try {
      const request = await fetch(
        discover_movie_by_date_endpoint(startDate, endDate)
      );
      const response = await request.json();
      const filteredMovie = await filterPosterNull(response.results);
      setNowPlaying({
        ...nowPlaying,
        loading: "succeeded",
        data: filteredMovie,
      });
    } catch (error) {
      setNowPlaying({ ...nowPlaying, loading: "failed", error: error });
    }
  };

  const handleFilterDateForm = (e) => {
    e.preventDefault();
    filterMovieByDate(startDate, endDate);
  };

  if (homepageData.loading === "loading") {
    return <GeneralSkeleton />;
  }

  return (
    <GeneralTemplate>
      <main>
        <Carousel trendings={homepageData.data[0]} />
        <Movies
          nowPlaying={nowPlaying}
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          handleFilterDateForm={handleFilterDateForm}
        />
      </main>
    </GeneralTemplate>
  );
}
