import Carousel from "react-bootstrap/Carousel";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";

function HomeCarouselItem(props) {
  return (
    <Carousel.Item interval={1000}>
      <img
        className="d-block w-100"
        style={{ height: "25rem" }}
        src={props.image}
        alt={capitalizeFirstLetter(props.collection)}
      />
      <Carousel.Caption>
        <h3>{props.title}</h3>
        <p>Collect your favourite {props.collection}!</p>
      </Carousel.Caption>
    </Carousel.Item>
  );
}

export default HomeCarouselItem;
