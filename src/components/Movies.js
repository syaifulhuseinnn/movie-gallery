import React from "react";
import Loader from "./Loader";
import MovieItem from "./MovieItem";

export default function Movies(props) {
  const {
    nowPlaying,
    startDate,
    endDate,
    setStartDate,
    setEndDate,
    handleFilterDateForm,
  } = props;
  return (
    <div id="content">
      <div className="p-5 featured">
        <small className="text-featured">FEATURED</small>
        <h3 className="text-white">
          <strong>Now</strong>{" "}
          <span className="font-weight-light">Showing</span>
        </h3>
      </div>
      <div className="d-lg-flex justify-content-lg-between my-lg-5">
        <div className="movie-grid">
          {nowPlaying.loading === "loading" ? (
            <Loader />
          ) : (
            nowPlaying.data.map((value, index) => (
              <MovieItem nowPlaying={value} key={index} />
            ))
          )}
        </div>
        <aside
          className="flex-grow-1 d-none d-lg-block mr-4 my-2 position-sticky h-100"
          style={{ top: "5%" }}
        >
          <h6 className="text-white font-weight-bold">Filter by date</h6>
          <form onSubmit={(e) => handleFilterDateForm(e)}>
            <div className="form-group my-3">
              <label htmlFor="startDate">Start Date</label>
              <input
                type="date"
                className="form-control"
                id="start-date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                required
              />
            </div>
            <div className="form-group my-3">
              <label htmlFor="endDate">End Date</label>
              <input
                type="date"
                className="form-control"
                id="end-date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-block btn-purple text-white"
            >
              Filter
            </button>
          </form>
        </aside>
      </div>
      <div className="text-center py-5 load-more">
        <button type="button" className="btn btn-purple text-white">
          Load more
        </button>
      </div>
    </div>
  );
}
