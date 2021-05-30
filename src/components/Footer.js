import React from "react";

export default function Footer() {
  return (
    <footer className="pt-5 pb-3 px-4 footer position-relative">
      <div className="overlay-footer position-absolute"></div>
      <div className="position-absolute" style={{ bottom: 50 }}>
        <h3 className="text-white mb-2 font-weight-light">Movie</h3>
        <h3 className="text-white font-weight-bold mb-2">Gallery</h3>
        <small className="text-danger font-weight-bold text-uppercase">
          copyright syaifulhusein | 2021
        </small>
      </div>
    </footer>
  );
}
