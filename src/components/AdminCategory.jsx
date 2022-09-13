import React from 'react'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

import{Link} from "react-router-dom";

const AdminCategory = () => {
  return (
    <div>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-8 mx-auto'>
{/* 
          </div>
        </div>
      </div> */}
        <h1>Category</h1><Link to={"/addcategories"}><Button variant="info">Add</Button></Link>
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
          <Button variant="info">Edit</Button>{' '}
      <Button variant="light">Delete</Button>{' '}
        </tr>
      </tbody>
      
    </Table>
    </div>
        </div>
      </div>
    </div>
  )
}

export default AdminCategory