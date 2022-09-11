import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Dropdown from 'react-bootstrap/Dropdown';

const AddCategory = () => {
  return (
    <div>
          <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Category
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Fresh produce</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Frozen section</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Pulses</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
         <Form>
      <Form.Group className="mb-3">  
        <Form.Control type="text" placeholder="product name" />
      </Form.Group>
        <Form.Control type="number" placeholder="Price" />
        
      <Button variant="primary" type="submit">
        Add Category
      </Button>
    </Form>
    </div>
  )
}

export default AddCategory