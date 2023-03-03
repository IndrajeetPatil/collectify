import Carousel from "react-bootstrap/Carousel";

// TODO: Figure out why this doesn't work
// import HomeCarouselItem from "./HomeCarouselItem";

import booksImg from "../../assets/images/books.jpeg";
import moviesImg from "../../assets/images/movies.jpeg";
import paintingsImg from "../../assets/images/paintings.jpeg";
import placesImg from "../../assets/images/places.jpeg";
import songsImg from "../../assets/images/songs.jpeg";
import photosImg from "../../assets/images/photos.jpeg";

function HomeCarousel() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          style={{ height: "30rem" }}
          src={booksImg}
          alt="Books"
        />
      </Carousel.Item>

      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          style={{ height: "30rem" }}
          src={moviesImg}
          alt="Movies"
        />
      </Carousel.Item>

      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          style={{ height: "30rem" }}
          src={paintingsImg}
          alt="Paintings"
        />
      </Carousel.Item>

      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          style={{ height: "30rem" }}
          src={photosImg}
          alt="Photos"
        />
      </Carousel.Item>

      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          style={{ height: "30rem" }}
          src={placesImg}
          alt="Places"
        />
      </Carousel.Item>

      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          style={{ height: "30rem" }}
          src={songsImg}
          alt="Songs"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;
