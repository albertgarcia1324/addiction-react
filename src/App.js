import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Information from "./components/Information";
import Images from "./components/Images";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Information />
        <Images />
        <Footer />
      </div>
    );
  }
}

export default App;
