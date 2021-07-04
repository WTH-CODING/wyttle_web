import React from 'react'
import logo from '../Assets/Logo.jpeg'
import {Link, withRouter} from 'react-router-dom';

function NavigationBar() {
    return (
      <div
        className="row"
        style={{ background: "rgba(219, 230, 234, 0.9)", height: "6.3rem" }}
      >
        <div
          className="col-md-12"
          style={{ alignSelf: "center", paddingLeft: "10%" }}
        >
          <img
            src={logo}
            alt="Logo"
            style={{ height: "50px", width: "50px" }}
          ></img>
          <Link to="/">
            {" "}
            <button className="nbtn" style={{ marginLeft: "2.25rem" }}>
              Home
            </button>
          </Link>
          <Link to="/product/_id">
            <button className="nbtn">Shop</button>
          </Link>
          <button className="nbtn">Contact Us</button>
          <Link to="/leaderboard">
            <button className="nbtn">Feedback</button>
          </Link>
          <button className="rbtn">Login/Register</button>
          <button
            style={{
              float: "right",
              padding: "0rem 1.35rem",
              fontSize: "xx-large",
              background: "none",
              border: "none",
            }}
          >
            <i className="fas fa-shopping-cart"></i><sup style={{color:"red"}}>&nbsp;0</sup>
          </button>
        </div>
      </div>
    );
}

export default withRouter(NavigationBar)
