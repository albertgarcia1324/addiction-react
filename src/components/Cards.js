import React, { Component } from "react";
import { Card, CardGroup, CardBody, CardTitle, CardText } from "reactstrap";

export default class Cards extends Component {
  render() {
    return (
      <div>
        <CardGroup id="contacts" className="card text-center">
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
