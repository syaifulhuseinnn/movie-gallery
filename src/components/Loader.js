import React from "react";

export default function Loader() {
  return (
    <div className="d-flex justify-content-center align-items-center loader">
      <div className="spinner-border text-danger" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  );
}
