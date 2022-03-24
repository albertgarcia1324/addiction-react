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
        <CardGroup className="card text-center info-card">
          <Card className="border-0">
            <CardBody>
              <CardTitle id="form" tag="h5">
                Information Request
              </CardTitle>
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
                Complete Form
              </Button>
              <Modal
                id="formModal"
                isOpen={this.state.isModalOpen}
                toggle={this.toggleModal}
              >
                <ModalHeader
                  toggle={this.toggleModal}
                  className="text-light bg-primary"
                >
                  Information Request
                </ModalHeader>
                <ModalBody className="text-dark bg-light">
                  <Form onSubmit={this.handleLogin}>
                    <Form onSubmit={this.handleLogin}>
                      <FormGroup>
                        <Label htmlFor="name">Name</Label>
                        <Input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Your name"
                          innerRef={(input) => (this.name = input)}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="1234@example.com"
                          innerRef={(input) => (this.email = input)}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label htmlFor="password">Email</Label>
                        <Input
                          type="email"
                          id="email"
                          name="email"
                          innerRef={(input) => (this.email = input)}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label htmlFor="address">Address</Label>
                        <Input
                          type="text"
                          id="address"
                          name="address"
                          placeholder="1234 Main St."
                          innerRef={(input) => (this.address = input)}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label htmlFor="">City</Label>
                        <Input
                          type="city"
                          id="city"
                          name="city"
                          innerRef={(input) => (this.city = input)}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label htmlFor="state">State</Label>
                        <Input
                          type="state"
                          id="state"
                          name="state"
                          innerRef={(input) => (this.state = input)}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label htmlFor="areacode">Area Code</Label>
                        <Input
                          type="areacode"
                          id="areacode"
                          name="areacode"
                          innerRef={(input) => (this.areacode = input)}
                        />
                      </FormGroup>
                      <FormGroup check>
                        <Label check>
                          <Input
                            type="checkbox"
                            name="remember"
                            innerRef={(input) => (this.remember = input)}
                          />
                          Subscribe To Newsletter
                        </Label>
                      </FormGroup>
                      <Button
                        onClick={this.toggleModal}
                        type="submit"
                        value="submit"
                        color="primary"
                      >
                        Submit
                      </Button>
                    </Form>
                  </Form>
                </ModalBody>
              </Modal>
            </CardBody>
          </Card>
        </CardGroup>
      </div>
    );
  }
}

export default Information;
