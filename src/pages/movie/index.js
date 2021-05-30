import React from "react";
import { useParams } from "react-router-dom";
import GeneralTemplate from "../../templates/general";
import { useFetch } from "../../common/useFetch";
import { movieDetails_endpoint } from "../../common/endpoints";
import Hero from "../../components/Hero";
import MovieDetails from "../../components/MovieDetails";

export default function MovieSingle() {
  const { id } = useParams();
  const movieDetails = useFetch(movieDetails_endpoint(id));

  const nameExtractor = (datas) => datas.map((data) => data.name).join(", ");

  return (
    <GeneralTemplate>
      {movieDetails.loading === "succeeded" && (
        <main>
          <Hero
            backdrop={movieDetails.data.backdrop_path}
            title={movieDetails.data.original_title}
            genres={movieDetails.data.genres
              .map((genre) => genre.name)
              .join(" . ")}
          />
          <MovieDetails
            overview={movieDetails.data.overview}
            budget={movieDetails.data.budget}
            genres={nameExtractor(movieDetails.data.genres)}
            companies={nameExtractor(movieDetails.data.production_companies)}
            countries={nameExtractor(movieDetails.data.production_countries)}
            release={movieDetails.data.release_date}
            poster={movieDetails.data.poster_path}
            runtime={movieDetails.data.runtime}
            videos={movieDetails.data.videos.results[0]}
          />
        </main>
      )}
    </GeneralTemplate>
  );
}
