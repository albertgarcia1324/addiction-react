import React from "react";
import { UncontrolledCarousel, Row, Col } from "reactstrap";

const items = [
  {
    src: "wellmobile.jpg",
    altText: "Slide 1",
    caption: "",
    header: "",
    key: "1",
  },
  {
    src: "odsos.jpg",
    altText: "Slide 2",
    caption: "",
    header: "",
    key: "2",
  },
  {
    src: "struggle.jpg",
    altText: "Slide 3",
    caption: "",
    header: "",
    key: "3",
  },
  {
    src: "support1.jpg",
    altText: "Slide 4",
    caption: "",
    header: "",
    key: "3",
  },
];

const Images = () => (
  <Row>
    <Col md="8" className="mx-auto carousel-img">
      <UncontrolledCarousel items={items} />
    </Col>
  </Row>
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
