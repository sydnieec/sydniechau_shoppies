import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

//component in charge of handling new items being added to the cart
class MainPage extends Component {
  state = {
    productslist: [],
    urls: [],
  };

  render() {
    return (
      // form to add item
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label> Movie Title</Form.Label>
          <Form.Control type="" placeholder="Search for movie..." />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Search
        </Button>
      </Form>
    );
  }
}

export default MainPage;
