import React, { Component } from "react";
import {
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  Row,
  Col,
} from "reactstrap";

class Header extends Component {
  render() {
    return (
      <div className="bg-nav">
        <Navbar className="bg-nav" expand="xs" light full>
          <NavbarBrand href="/"></NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="#">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Resources</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Contact</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
        <Container className="jumbotron" fluid>
          <Row className="justify-content-center">
            <Col md="auto">
              <h1 className="display-1">Defeat Addiction</h1>
              {/* <h3>Get the help you need today.</h3> */}
            </Col>
            <Row className="justify-content-md-center">
              <Col md="auto">
                <h2>
                  “If you can quit for a day, you can quit for a lifetime.”
                </h2>
              </Col>
            </Row>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Header;
