import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import groceryApi from "../../api/grocery";


const AddCategory = () => {
  const [category, setCategory] = useState({ categoryName: "" });

  const addcategoryApi = (event) => {
    event.preventDefault();
    console.log(category);
    groceryApi
      .post("/category", { categoryName: category.categoryName })

      .then((response) => {
        if (response.data.data) {
          // alert("success");
          // handleClose();
        } else if (response.data.error) {
          console.log(response.data.error.message);
        } else {
          console.log("Something went wrong");
        }
      })
      .catch((error) => {
        console.log("Something went wrong");
      });
  };

  return (
    <div>
      {/* <Dropdown> */}
      {/* <Dropdown.Toggle variant="success" id="dropdown-basic">
        Category
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Fresh produce</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Frozen section</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Pulses</Dropdown.Item>
      </Dropdown.Menu> */}
      {/* </Dropdown> */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <Form>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="product name"
                  class="form-control"
                  onChange={(event) => {
                    console.log(event.target.value);
                    setCategory({ categoryName: event.target.value });
                  }}
                />
              </Form.Group>
              {/* <Form.Control type="number" placeholder="Price" /> */}

              <Button
                variant="primary"
                type="submit"
                onClick={(event) => {
                  addcategoryApi(event);
                }}
              >
                Add Category
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
