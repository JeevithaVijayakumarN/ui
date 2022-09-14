import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
const AdminProducts = () => {
  return (
    <div>
      <div className="container nt=5">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h1>Products</h1>
            <Link to={"/addproducts"}>
              <Button variant="info">Add</Button>
            </Link>
            {/* </div>
          </div>
        </div> */}
            <Table striped>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Category id</th>
                  <th>Products</th>
                  <th>Price</th>
                  
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <Button variant="info">Edit</Button>
                  <Button variant="light">Delete</Button>
                </tr>
                <tr>
                  <td>2</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <Button variant="info">Edit</Button>
                  <Button variant="light">Delete</Button>
                </tr>
                <tr>
                  <td>3</td>
                  <td colSpan={2}></td>
                  <td></td>
                  <Button variant="info">Edit</Button>
                  <Button variant="light">Delete</Button>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProducts;
