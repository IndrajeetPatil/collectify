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
          style={{ height: "25rem" }}
          src={booksImg}
          alt="Books"
        />
        <Carousel.Caption>
          <h3>Reading</h3>
          <p>Collect your favourite books!</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          style={{ height: "25rem" }}
          src={moviesImg}
          alt="Movies"
        />
        <Carousel.Caption>
          <h3>Cinema</h3>
          <p>Collect your favourite movies!</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          style={{ height: "25rem" }}
          src={paintingsImg}
          alt="Paintings"
        />
        <Carousel.Caption>
          <h3>Art</h3>
          <p>Collect your favourite paintings!</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          style={{ height: "25rem" }}
          src={photosImg}
          alt="Photos"
        />
        <Carousel.Caption>
          <h3>Photography</h3>
          <p>Collect your favourite photos!</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          style={{ height: "25rem" }}
          src={placesImg}
          alt="Places"
        />
        <Carousel.Caption>
          <h3>Travel</h3>
          <p>Collect your favourite locations!</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          style={{ height: "25rem" }}
          src={songsImg}
          alt="Songs"
        />
        <Carousel.Caption>
          <h3>Music</h3>
          <p>Collect your favourite songs!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;
