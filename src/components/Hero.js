import React from "react";

export default function Hero(props) {
  const { backdrop, title, genres } = props;
  return (
    <div className="hero-container-img">
      <article className="position-relative">
        <img
          src={`https://image.tmdb.org/t/p/w1280/${backdrop}`}
          alt="loki"
          className="img-fluid"
          loading="lazy"
          width="100%"
        />
        <div className="overlay-img text-left d-none d-xl-block">
          <div className="detail-container w-50 h-100 d-xl-flex flex-xl-column justify-content-xl-around">
            <div>
              <h1 className="text-white font-weight-bold">{title}</h1>
              <p className="text-secondary mt-lg-3 overview">{genres}</p>
            </div>
            <div>
              <button
                type="button"
                className="btn btn-details bg-danger btn-block text-white text-uppercase rounded-0 py-2 py-xl-1"
              >
                <i className="bx bx-heart"></i> like
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
