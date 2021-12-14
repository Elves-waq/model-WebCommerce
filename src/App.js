import React from "react";
import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import { Template } from "./Components/MainComponents";
import Header from "./Components/Partials/Header";
import Footer from "./Components/Partials/Footer";
import './App.css'

const AppPage = (props) => {
    return (
      <BrowserRouter>
        <Template>
          <Header />
            <Routes/>
          <Footer />
        </Template>           
      </BrowserRouter>
    );

}

const mapStateToProps= (state) => {
    return {
      user:state.user
    }
}
const mapDispatchToProps =() => {
  return {

  };
}

export default connect(mapStateToProps,mapDispatchToProps)(AppPage);