import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import Dropdown from "react-bootstrap/Dropdown";

const AddProduct = () => {
  // const [product, setProduct] = useState({ name: "", password: "" });
  // useEffect(() => {

  //   movieApi
  //     .get(`/movie/all`)
  //     .then((res) => {
  //       console.log(res.data.data);
  //       if (res.data.data) {
  //         setMovies(res.data.data);
  //       } else if (res.data.error) {
  //         console.log(res.data.error.message);
  //       } else {
  //         console.log("Something went wrong");
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(`Error -> ${error}`);
  //     });
  // }, []);

  // const deleteAPI = (event, id) => {
  //   event.preventDefault();
  //   movieApi
  //     .delete(`/movie/${id}`)
  //     .then((res) => {
  //       if (res.data.data) {
  //         setMovies(res.data.data);
  //       } else if (res.data.error) {
  //         console.log(res.data.error.message);
  //       } else {
  //         console.log("Something went wrong");
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(`Error -> ${error}`);
  //     });
  // };
  return (
    <div>
      {/* <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Category
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Apple</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Chocolate</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Milk</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown> */}
      <div className="container mt-5">
          <div className="row">
            <div className="col-md-8 mx-auto">
      <Form>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="product name" />
        </Form.Group>
        <Form.Control type="number" placeholder="Price" />

        <Button variant="primary" type="submit">
          Add product
        </Button>
      </Form>
      </div>
      </div>
    </div>
    </div>
  );
};

export default AddProduct;
