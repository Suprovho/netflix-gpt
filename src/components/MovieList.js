import React from "react";
import Movicard from "./Movicard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const MovieList = ({ title, movies }) => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className="px-2">
        <h1 className="text-3xl py-4 text-white">{title}</h1>
        <Carousel responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            keyBoardControl={true}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            centerMode={true}
            partialVisbile={false}
            slidesToSlide={4}
        >
          {movies.map((movie) => (
            <Movicard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </Carousel>
    </div>
  );
};

export default MovieList;
