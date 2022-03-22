// import React from "react";
import React, { Component } from "react";
import { Accordion } from "react-bootstrap";
import { Table } from "reactstrap";

class Dropdown extends Component {
  render() {
    return (
      <div className="accordion">
        <Accordion
          className="container-fluid text-center"
          defaultActiveKey="0"
          flush
        >
          <Accordion.Item eventKey="0" className="accordion-1">
            <Accordion.Header>Emergency Contacts</Accordion.Header>
            <Accordion.Body className="accordion-1">
              <Table hover className="text-dark">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Organization</th>
                    <th>Address</th>
                    <th>Phone Number</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Crisis Center</td>
                    <td>41 Community Pl, Crownsville, MD</td>
                    <td>
                      <a href="tel:+1-410-768-5522">(410) 768-5522</a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Well Mobile Unit</td>
                    <td>Anne Arundel County</td>
                    <td>
                      <a href="tel:+1-410-823-9355">(410) 823-9355</a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>National Hotline</td>
                    <td>United States</td>
                    <td>
                      <a href="tel:+1-800-662-4357">(800) 662-4357</a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Suicide Lifeline</td>
                    <td>United States</td>
                    <td>
                      <a href="tel:+1-800-273-8255">(800) 273-8255</a>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="accordion-2">
            <Accordion.Header className="text-center">
              Contact List
            </Accordion.Header>
            <Accordion.Body>
              <Table hover className="text-dark">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Organization</th>
                    <th>Location</th>
                    <th>Phone Number</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Crisis Warmline</td>
                    <td>41 Community Pl, Crownsville, MD</td>
                    <td>
                      <a href="tel:+1-410-768-5522">(410) 768-5522</a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Youth Crisis</td>
                    <td>Anne Arundel County</td>
                    <td>
                      <a href="tel:+1-800-422-0009">(800) 422-0009</a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Well-Mobile</td>
                    <td>Anne Arundel County</td>
                    <td>
                      <a href="tel:+1-410-823-9355">(410) 823-9355</a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Hospital Outreach</td>
                    <td>Anne Arundel County</td>
                    <td>
                      <a href="tel:+1-410-222-6187">(410) 222-6187</a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Peer Support</td>
                    <td>Anne Arundel County</td>
                    <td>
                      <a href="tel:+1-410-222-7076">(410) 222-7076</a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Arundel Lodge</td>
                    <td>2600 Solomons Island Rd, Annapolis, MD </td>
                    <td>
                      <a href="tel:+1-443-433-5900">(443) 433-5900</a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Brightwell Healthcare</td>
                    <td>7310 Ritchie Hwy # 516, Glen Burnie, MD </td>
                    <td>
                      <a href="tel:+1-443-221-2222">(443) 221-2222</a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Project Chesapeake</td>
                    <td>
                      108 Old Solomons Island Road, Suite A, Annapolis, MD
                    </td>
                    <td>
                      <a href="tel:+1-443-214-5097">(443) 214-5097</a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>New Life</td>
                    <td>Anne Arundel County</td>
                    <td>
                      <a href="tel:+1-844-348-2666">(844) 348-2666</a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>MAT Clinic</td>
                    <td>107 MD-436 #12, Annapolis, MD</td>
                    <td>
                      <a href="tel:+1-410-505-7691">(410) 505-7691</a>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    );
  }
}

export default Dropdown;
