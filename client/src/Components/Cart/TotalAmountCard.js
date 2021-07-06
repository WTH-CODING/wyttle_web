import React from "react";

const TotalAmountCard = (props) => {
  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <p style={{ color: "#555555" }}>Subtotal</p>
        </div>
        <div className="col-md-6">
          <p
            style={{
              margin: "0px",
              fontFamily: "Poppins",
              color: "#555555",
              fontWeight: "400",
              fontSize: "1.2rem",
            }}
          >
            Rs. {props.totalPrice}
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-10">
          <hr></hr>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <span style={{ color: "#555555" }}>Shipping</span>
        </div>
        <div className="col-md-6">
          <p style={{ color: "#555555" }}>Shipping to : Africa</p>
          <p style={{ color: "#555555" }}>Shipping Charges : 500</p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-6">
          <span style={{ color: "#555555" }}>Total</span>
        </div>
        <div className="col-md-6">
          <p
            style={{
              margin: "0px",
              fontFamily: "Poppins",
              color: "#555555",
              fontWeight: "500",
              fontSize: "1.5rem",
            }}
          >
            {props.totalPrice}
          </p>
        </div>
      </div>
    </>
  );
};

export default TotalAmountCard;
