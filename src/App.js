import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
// import Contact from "./components/Contact";
import Info from "./components/Info";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Info />
        <Footer />
      </div>
    );
  }
}

export default App;
