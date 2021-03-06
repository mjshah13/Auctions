import React from 'react';

import {FormControl,Col,FormGroup,Form ,validated,InputGroup,Button} from 'react-bootstrap';

class Signin extends React.Component{

    render(){
       
        return(
       <div>
             <Form  id='form' >
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Keep me logged in" />
  </Form.Group>
  <Button variant="light" type="submit">
    Sign in
  </Button>
</Form>
       </div>
        )
    }

}
export default Signin;