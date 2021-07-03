import React from 'react'
import p1 from '../Assets/p1.jpg'

function ProductFeedbackCard() {
    return (
      <>
        <div className="row">
          <div className="col-md-10 ml-2">
            <div
              className="row mt-5 p-2"
              style={{
                background: "white",
                boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: "2.85rem",
              }}
            >
              <div className="row p-2">
                <p
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "700",
                    fontFamily: "Poppins",
                    color: "#606060",
                  }}
                >
                  &nbsp;&nbsp;Name
                </p>
              </div>
              <div
                className="col-md-2 text-center"
                style={{ fontSize: "small" }}
              >
                <img
                  alt="p1"
                  src={p1}
                  style={{
                    width: "100%",
                    borderRadius: "50%",
                    maxWidth: "5.05rem",
                  }}
                ></img>
                <br />
                <span style={{ fontSize: "0.7rem", color: "#ffe600" }}>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </span>
              </div>
              <div className="col-md-10">
                <p
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "0.9rem",
                    fontWeight: "400",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi
                </p>
                <p>
                  <i className="fas fa-arrow-circle-up"></i> 47{" "}
                  <i
                    className="fas fa-exclamation-triangle"
                    style={{
                      float: "right",
                      paddingRight: "1rem",
                      paddingTop: "0.5rem",
                    }}
                  ></i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default ProductFeedbackCard
