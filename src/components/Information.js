import React, { Component } from "react";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardGroup,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";

class Information extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  render() {
    return (
      <div>
        <CardGroup className="card text-center">
          <Card>
            <CardBody>
              <CardTitle tag="h5">Information Request</CardTitle>
              {/* <CardSubtitle className="mb-2 text-muted" tag="h6">
                Form
              </CardSubtitle> */}
              <CardText>
                Please submit this form to request additional information to
                assist in defeating your addiction.
              </CardText>
              <Button
                outline
                id="formModal"
                onClick={this.toggleModal}
                color="primary"
              >
                Submit Form
              </Button>
              <Modal
                id="formModal"
                isOpen={this.state.isModalOpen}
                toggle={this.toggleModal}
              >
                <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                <ModalBody>
                  <Form onSubmit={this.handleLogin}>
                    <Form onSubmit={this.handleLogin}>
                      <FormGroup>
                        <Label htmlFor="username">Username</Label>
                        <Input
                          type="text"
                          id="username"
                          name="username"
                          innerRef={(input) => (this.username = input)}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label htmlFor="password">Password</Label>
                        <Input
                          type="password"
                          id="password"
                          name="password"
                          innerRef={(input) => (this.password = input)}
                        />
                      </FormGroup>
                      <FormGroup check>
                        <Label check>
                          <Input
                            type="checkbox"
                            name="remember"
                            innerRef={(input) => (this.remember = input)}
                          />
                          Remember me
                        </Label>
                      </FormGroup>
                      <Button type="submit" value="submit" color="primary">
                        Submit
                      </Button>
                    </Form>
                  </Form>
                </ModalBody>
              </Modal>
            </CardBody>
          </Card>
        </CardGroup>
        <CardGroup className="card text-center">
          <Card>
            <CardBody>
              <CardTitle tag="h5">Emergency Contact</CardTitle>
              <CardText>
                Find below a list of emergency contact numbers for providers to
                get immediate assistance through available government programs.
                These resources are available 24/7.
              </CardText>
              {/* <Button outline onClick={this.toggleModal} color="danger">
                Emergency Contact
              </Button> */}
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle tag="h5">Contact List</CardTitle>
              <CardText>
                Find below a full list of contact numbers for providers
                throughout Anne Arundel County. This list includes both public
                and private healthcare contacts to get you the help you need.
              </CardText>
              {/* <Button outline color="info">
                Contact List
              </Button> */}
            </CardBody>
          </Card>
        </CardGroup>
      </div>
    );
  }
}

export default Information;
