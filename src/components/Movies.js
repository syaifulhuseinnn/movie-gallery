import React from "react";
import "../styles/movies.css";

export default function Movies() {
  return (
    <div>
      <div className="px-5 py-4">
        <h6 className="text-featured">FEATURED</h6>
        <h3 className="text-now-showing">
          <strong>Now</strong> Showing
        </h3>
      </div>
      <div className="d-lg-flex justify-content-lg-between movie-grid">
        <div className="text-center">
          <img
            src="https://image.tmdb.org/t/p/w154/cKuyVBEhwcgQjz1jHKZzKLmf8Yg.jpg"
            alt=""
            className="img-fluid"
          />
        </div>
        <div className="text-center">
          <img
            src="https://image.tmdb.org/t/p/w154/cKuyVBEhwcgQjz1jHKZzKLmf8Yg.jpg"
            alt=""
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
}
