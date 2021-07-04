import React from "react";
import p1 from "../Assets/p1.jpg";
import TopReview from "../TopReview";

function ProductHeader() {
  return (
    <>
      <div className="row mt-5">
        <div className="col-md-6 text-center" style={{ padding: "0" }}>
          <img
            alt="product"
            src={p1}
            style={{ width: "20.85rem", height: "20.85rem", padding: "0.5rem" }}
          ></img>
          <img
            alt="product"
            src={p1}
            style={{ width: "20.85rem", height: "20.85rem", padding: "0.5rem" }}
          ></img>
          <img
            alt="product"
            src={p1}
            style={{ width: "20.85rem", height: "20.85rem", padding: "0.5rem" }}
          ></img>
          <img
            alt="product"
            src={p1}
            style={{ width: "20.85rem", height: "20.85rem", padding: "0.5rem" }}
          ></img>
        </div>
        <div className="col-md-6">
          <h1>Product</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="row">
            <h3>
              ₹ 200&nbsp;<span style={{ fontWeight: "300" }}>|</span>{" "}
              Size&nbsp;&nbsp;{" "}
              <select style={{ width: "9.375rem", background: "#FBFBFB" }}>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
              </select>
            </h3>
          </div>
          <div className="row mt-2 cbrow">
            <div className="col-md-4">
              <button
                style={{
                  width: "14.15rem",
                  height: "3.9312rem",
                  borderRadius: "2rem",
                  fontSize: "1.5rem",
                  border: "none",
                  background: "#566FD2",
                  padding: " 0.9rem 1rem",
                  fontFamily: "Roboto",
                  fontWeight: "700",
                  color: "white",
                }}
              >
                <i className="fas fa-cart-plus"></i> Add to Cart
              </button>
            </div>
            <div className="col-md-4 mr-5 mt-3">
              <button
                style={{
                  width: "14.15rem",
                  height: "3.9312rem",
                  borderRadius: "2rem",
                  fontSize: "1.5rem",
                  border: "none",
                  background: "#FF4545",
                  padding: " 0.9rem 1rem",
                  fontFamily: "Roboto",
                  fontWeight: "700",
                  color: "white",
                }}
              >
                <i className="fas fa-cart-arrow-down"></i> Buy Now
              </button>
            </div>
            <div className="col-md-3"></div>
            <div className="col-md-3"></div>
          </div>
          <TopReview />
        </div>
      </div>
    </>
  );
}

export default ProductHeader;
