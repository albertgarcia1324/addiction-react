import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Information from "./components/Information";
import Images from "./components/Images";
import Footer from "./components/Footer";
import Dropdown from "./components/Dropdown";
import Cards from "./components/Cards";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Information />
        <Images />
        <Cards />
        <Dropdown />
        <Footer />
      </div>
    );
  }
}

export default App;
