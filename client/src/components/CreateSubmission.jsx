import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";

import { Link } from "react-router-dom";

function CreateSubmission(props) {
  return (
    <Container
      fluid
      className="d-flex flex-row align-content-center justify-content-around fs-5"
    >
      <Link to={`/collections/${props.collection}`}>
        <Button
          variant="secondary"
          className="mb-0"
        >
          Cancel
        </Button>
      </Link>

      <Button
        variant="primary"
        type="submit"
        className="mb-0"
      >
        Submit
      </Button>
    </Container>
  );
}

export default CreateSubmission;
