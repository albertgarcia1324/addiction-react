import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import Contact from "./components/modal";
import Info from "./components/Info";
import Footer from "./components/footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Contact />
        <Info />
        <Footer />
      </div>
    );
  }
}

export default App;
