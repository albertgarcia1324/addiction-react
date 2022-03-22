import React from "react";
import { UncontrolledCarousel, Row, Col } from "reactstrap";

const items = [
  {
    src: "wellmobile.jpg",
    altText: "Slide 1",
    key: "1",
  },
  {
    src: "odsos.jpg",
    altText: "Slide 2",
    key: "2",
  },
  {
    src: "struggle.jpg",
    altText: "Slide 3",
    key: "3",
  },
  {
    src: "support1.jpg",
    altText: "Slide 4",
    key: "3",
  },
];

const Images = () => (
  <div className="carousel-div">
    <Row id="resources" className="carousel-row">
      <Col md="12" className="mx-auto d-block w-100 carousel-col mt-1 mb-1">
        <UncontrolledCarousel
          className="carousel mx-auto d-block"
          items={items}
        />
      </Col>
    </Row>
  </div>
);

export default Images;
// import React, { Component } from "react";
// import { CardImg } from "reactstrap";
// class Images extends Component {
//   render() {
//     return (
//       <div className="container-fluid">
//         <div className="row">
//           <div className="card-img">
//             <CardImg src="wellmobile.jpg" />
//             <CardImg src="odsos.jpg" />
//             <CardImg src="struggle.jpg" />
//             <CardImg src="support.jpg" />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
// export default Images;
