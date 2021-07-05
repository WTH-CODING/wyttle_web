import React from "react";
import { withRouter } from "react-router-dom";
function footer() {
  const renderer = () => {
    if (
      window.location.pathname !== "/login" &&
      window.location.pathname !== "/signup"
    ) {
      return (
        <div
          id="footer"
          className="row mt-5 "
          style={{ background: "#A586DD" }}
        >
          <div className="col-md-2 pt-5 text-center">
            <p
              style={{
                fontSize: "2.4rem",
                color: "#b9b9b9",
                fontWeight: "700",
              }}
            >
              About
            </p>
            <p
              style={{
                fontSize: "1.2rem",
                color: "white",
                fontWeight: "700",
              }}
            >
              Contact us
            </p>
            <p
              style={{
                fontSize: "1.2rem",
                color: "white",
                fontWeight: "700",
              }}
            >
              About us
            </p>
          </div>
          <div className="col-md-2 pt-5 text-center">
            <p
              style={{
                fontSize: "2.4rem",
                color: "#b9b9b9",
                fontWeight: "700",
              }}
            >
              Help
            </p>
            <p
              style={{
                fontSize: "1.2rem",
                color: "white",
                fontWeight: "700",
              }}
            >
              Payment
            </p>
            <p
              style={{
                fontSize: "1.2rem",
                color: "white",
                fontWeight: "700",
              }}
            >
              Shipping
            </p>
          </div>
          <div className="col-md-2 pt-5 text-center">
            <p
              style={{
                fontSize: "2.4rem",
                color: "#b9b9b9",
                fontWeight: "700",
              }}
            >
              Policy
            </p>
            <p
              style={{
                fontSize: "1.2rem",
                color: "white",
                fontWeight: "700",
              }}
            >
              Terms of use
            </p>
            <p
              style={{
                fontSize: "1.2rem",
                color: "white",
                fontWeight: "700",
              }}
            >
              Privacy
            </p>
          </div>
          <div className="col-md-1 text-center" style={{ alignSelf: "center" }}>
            <div
              style={{
                height: "200px",
                width: "1px",
                background: "#404040",
                alignSelf: "center",
                paddingTop: "-3px",
              }}
            ></div>
          </div>
          <div className="col-md-3 pt-5 ">
            <p
              style={{
                fontSize: "2.4rem",
                color: "#b9b9b9",
                fontWeight: "700",
              }}
            >
              Mail us
            </p>
            <p
              style={{
                fontSize: "0.9rem",
                color: "white",
                fontWeight: "700",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut
            </p>
          </div>
          <div className="col-md-2 pt-5 text-center">
            <p style={{ fontSize: "3.5rem", color: "green" }}>
              <i className="fab fa-whatsapp"></i>
            </p>
            <p style={{ fontSize: "3.5rem", color: "blue" }}>
              <i className="fab fa-facebook-square"></i>
            </p>
            <p style={{ fontSize: "3.5rem", color: "#55acee" }}>
              <i className="fab fa-twitter"></i>
            </p>
          </div>
        </div>
      );
    } else {
      return null;
    }
  };
  return renderer();
}

export default withRouter(footer);
