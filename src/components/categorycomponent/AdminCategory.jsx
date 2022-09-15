import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

import { Link } from "react-router-dom";
import groceryApi from "../../api/grocery";

const AdminCategory = () => {
  const [categories, setCategories] = useState([]);
  const [showAddForm, setshowAddForm] = useState(false);

  const deleteAPI = (event, id) => {
    event.preventDefault();
    groceryApi
      .delete(`/category/${id}`)
      .then((response) => {
        if (response.data.data) {
          setCategories(response.data.data);
        } else if (response.data.error) {
          console.log(response.data.error.message);
        } else {
          console.log("Something went wrong");
        }
      })
      .catch((error) => {
        console.log(`Error -> ${error}`);
      });
  };
  // const CategoryPage = () => {
  //   const [categories, setCategories] = useState([]);
  //   useEffect(() => {
  //     addCategoryApi
  //       .add(`/categorypage`)
  //       .then((response) => {
  //         let data = response.data;
  //         if (data.data) {
  //           console.log(data.data);
  //           setCategories(data.data);
  //         } else if (data.error) {
  //           console.log(data.error.message);
  //         } else {
  //           console.log("Something went wrong");
  //         }
  //       })
  //       .catch((err) => console.log(err));
  //   },
  //    []);

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8 mx-auto">
          
            <h1>Category</h1>
            <Link to={"/addcategories"}>
              <Button
                variant="info onClick={() => {
          setshowAddForm(true);
        }}"
              >
                Add
              </Button>
            </Link>
            <Table striped>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Category Name</th>
                </tr>
              </thead>
              <tbody>
                {/* {categories.map((category,index)=>{
          return(
          <>

          <tr key={index}>
          <td>{category.categoryName}</td>
          <button type="button" className="btn-btn-primary">Edit</button>
          <button className="btn btn-secondary"
          onClick={(event)=>addCategoriesApi(event,category.categoryId)}>
          Delete</button>

          </tr>
          </>
           ) 
      } } */}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCategory;
