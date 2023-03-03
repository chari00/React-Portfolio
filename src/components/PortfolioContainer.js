import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Homepage/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

class PortfolioContainer extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  render() {
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        <Home
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        <About
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        <Blog
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        <Contact
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        Based on `this.state.currentPage`, render the appropriate component
        here.
      </div>
    );
  }
}

export default PortfolioContainer;
