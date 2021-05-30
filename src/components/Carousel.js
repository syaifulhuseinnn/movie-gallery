import React from "react";
import Slider from "react-slick";
import CarouselItem from "./CarouselItem";

export default function Carousel({ trendings }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    lazyLoad: true,
  };

  return (
    <div className="position-relative" id="hero">
      <Slider {...settings}>
        {trendings &&
          trendings.results
            .slice(0, 6)
            .map((value, index) => (
              <CarouselItem trending={value} key={index} />
            ))}
      </Slider>
      <div className="overlay"></div>
    </div>
  );
}
