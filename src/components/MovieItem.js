import React from "react";
import { Link } from "react-router-dom";

export default function MovieItem({ nowPlaying }) {
  return (
    <article>
      <img
        src={`https://image.tmdb.org/t/p/w300${nowPlaying.poster_path}`}
        alt={nowPlaying.original_title}
        className="img-fluid"
        loading="lazy"
      />
      <h1 className="movie-title">{nowPlaying.original_title}</h1>
      <h2 className="movie-duration text-secondary">
        Rating {nowPlaying.vote_average}
      </h2>
      <h2 className="movie-release text-secondary">
        Released {nowPlaying.release_date}
      </h2>
      <Link to={`/movie/${nowPlaying.id}`}>
        <button
          type="button"
          className="btn btn-details border border-danger btn-block text-white text-uppercase rounded-0 py-2 py-xl-1"
        >
          Details
        </button>
      </Link>
    </article>
  );
}
