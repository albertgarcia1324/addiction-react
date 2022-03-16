import React, { Component } from "react";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardGroup,
} from "reactstrap";
class Information extends Component {
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
                This card has supporting text below as a natural lead-in to
                additional content.
              </CardText>
              <Button color="primary">Submit Form</Button>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              {/* <CardSubtitle className="mb-2 text-muted" tag="h6">
                Card subtitle
              </CardSubtitle> */}
              <CardText>
                This card has supporting text below as a natural lead-in to
                additional content.
              </CardText>
              <Button color="danger">Emergency Contact</Button>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              {/* <CardSubtitle className="mb-2 text-muted" tag="h6">
                Card subtitle
              </CardSubtitle> */}
              <CardText>
                This card has supporting text below as a natural lead-in to
                additional content.
              </CardText>
              <Button color="info">Contact List</Button>
            </CardBody>
          </Card>
        </CardGroup>
      </div>
    );
  }
}

export default Information;
