import React from "react";
import Slider from "react-slick";

export default function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <div>
            <img
              src="https://image.tmdb.org/t/p/w1280/bZGAX8oMDm3Mo5i0ZPKh9G2OcaO.jpg"
              alt="loki"
              className="img-fluid"
            />
          </div>
        </div>
      </Slider>
    </div>
  );
}
