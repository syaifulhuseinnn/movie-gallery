import React from "react";

export default function Header() {
  return (
    <header>
      <nav className="d-flex justify-content-lg-between justify-content-end align-items-center bg-dark px-2 py-3">
        <div className="d-none">
          <span className="mx-1 text-white">Home</span>
          <span className="mx-1 text-white">TV Shows</span>
          <span className="mx-1 text-white">Movies</span>
        </div>
        <div>
          <i className="bx bx-search text-white h4 m-0"></i>
        </div>
      </nav>
    </header>
  );
}
