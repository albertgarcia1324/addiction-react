import React, { Component } from "react";
import { Modal, Button } from "reactstrap";

class Contact extends Component {
  render() {
    return (
      <div className="container">
        <Modal>
          <Button className="btn-large">Contacts</Button>
        </Modal>
      </div>
    );
  }
}
export default Contact;
