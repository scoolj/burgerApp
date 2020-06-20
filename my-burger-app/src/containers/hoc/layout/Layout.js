import React, { Component } from "react";

import Auxx from "../Auxx/Auxx";
import classes from "./Layout.module.css";
import Toolbar from "../../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../../components/Navigation/SideDrawer/SideDrawer";
import { connect } from "react-redux";

class Layout extends Component {
  state = {
    showSideDrawer: true,
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };
  render() {
    return (
      <Auxx>
        <Toolbar
        isAuth ={this.props.isAuthenticated} 
        drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer
          isAuth ={this.props.isAuthenticated} 
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Auxx>
    );
  }
}

const mapStateToProps = state =>{
  return{
    isAuthenticated: state.auth.token !== null,
  }
}

export default connect(mapStateToProps) (Layout);
