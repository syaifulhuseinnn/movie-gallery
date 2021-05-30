import React from "react";

export default function MovieDetails(props) {
  const {
    overview,
    budget,
    genres,
    companies,
    countries,
    release,
    poster,
    runtime,
    videos,
  } = props;

  return (
    <div className="p-5 featured">
      <small className="text-featured">FEATURED</small>
      <h3 className="text-white">
        <strong>Overview</strong>
      </h3>
      <div className="details-container py-5">
        <p className="overview text-light">{overview}</p>
        <div className="d-lg-flex justify-content-evenly my-5">
          <div className="text-center text-lg-left">
            <img src={`https://image.tmdb.org/t/p/w300${poster}`} alt="" />
          </div>
          <div className="border px-5 py-4 details my-5 my-lg-0">
            <div>
              <h5 className="font-weight-bold">Budget</h5>
              <small className="mt-3 text-purple text-uppercase font-weight-bold">
                {budget.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </small>
            </div>
            <div className="mt-3">
              <h5 className="font-weight-bold">Genres</h5>
              <small className="mt-3 text-purple text-uppercase font-weight-bold">
                {genres}
              </small>
            </div>
            <div className="mt-3">
              <h5 className="font-weight-bold">Production Companies</h5>
              <small className="mt-3 text-purple text-uppercase font-weight-bold">
                {companies}
              </small>
            </div>
            <div className="mt-3">
              <h5 className="font-weight-bold">Production Countries</h5>
              <small className="mt-3 text-purple text-uppercase font-weight-bold">
                {countries}
              </small>
            </div>
            <div className="mt-3">
              <h5 className="font-weight-bold">Release</h5>
              <small className="mt-3 text-purple text-uppercase font-weight-bold">
                {release}
              </small>
            </div>
            <div className="mt-3">
              <h5 className="font-weight-bold">Runtime</h5>
              <small className="mt-3 text-purple text-uppercase font-weight-bold">
                {runtime} minutes
              </small>
            </div>
          </div>
        </div>
        {videos && (
          <div class="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              src={`https://www.youtube.com/embed/${videos.key}`}
              allowfullscreen
              title={videos.name}
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
}
