import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";
const AdminProducts = () => {
  return (
    
    <div>
       
        <div className='container nt=5'>
          <div className='row'>
            <div className='col-md-8 mx-auto'>
            <h1>Products</h1><Link to={"/addproducts"}><Button variant="info">Add</Button></Link>
            {/* </div>
          </div>
        </div> */}
        <Table striped>

      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th>Button</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <Button variant="info">Edit</Button>
      <Button variant="light">Delete</Button>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <Button variant="info">Edit</Button>
      <Button variant="light">Delete</Button>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
          <Button variant="info">Edit</Button>
      <Button variant="light">Delete</Button>
        </tr>
        
      </tbody>
      
    </Table>
    </div>
          </div>
        </div>
    
    </div>
    
  )
}

export default AdminProducts