import React, { useState } from "react";
import p1 from "../../Assets/p1.jpg";

function CartItemCard(props) {
  //   const [qty, setQty] = useState(props.cartItem.qty);

  //   const { _id, name, price, img } = props.cartItem;

  //   const onQuantityIncrement = () => {
  //     setQty(qty + 1);
  //     props.onQuantityInc(_id, qty + 1);
  //   };

  //   const onQuantityDecrement = () => {
  //     if (qty <= 1) return;
  //     setQty(qty - 1);
  //     props.onQuantityDec(_id, qty - 1);
  //   };

  return (
    <div>
      <div className="row mt-2">
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-4" style={{ alignSelf: "center" }}>
              <img
                alt="p1"
                src={p1}
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: "1.15rem",
                }}
              />
            </div>
            <div className="col-md-8" style={{ alignSelf: "center" }}>
              <p
                style={{
                  margin: "0px",
                  fontFamily: "Poppins",
                  color: "#000000",
                }}
              >
                Product
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-2" style={{ alignSelf: "center" }}>
          <p
            style={{
              margin: "0px",
              fontFamily: "Poppins",
              color: "#000000",
              fontWeight: "400",
              fontSize: "1.2rem",
            }}
          >
            ₹ 100
          </p>
        </div>
        <div className="col-md-2" style={{ alignSelf: "center" }}>
          <div className="row" style={{ background: "#dddddd" }}>
            <div
              className="col-md-2 text-center"
              style={{ alignSelf: "center" }}
            >
              <span style={{ fontFamily: "Poppins", fontWeight: "500" }}>
                +
              </span>
            </div>
            <div className="col-md-7">
              <input
                style={{
                  width: "100%",
                  alignSelf: "center",
                  textAlign: "center",
                }}
                value="1"
              ></input>
            </div>
            <div
              className="col-md-2 text-center"
              style={{ alignSelf: "center", padding: "0" }}
            >
              <span style={{ fontFamily: "Poppins", fontWeight: "700" }}>
                -
              </span>
            </div>
          </div>
        </div>
        <div className="col-md-2" style={{ alignSelf: "center" }}>
          <p
            style={{
              margin: "0px",
              fontFamily: "Poppins",
              color: "#000000",
              fontWeight: "400",
              fontSize: "1.2rem",
            }}
          >
            ₹ 100
          </p>
        </div>
      </div>
    </div>
  );
}

export default CartItemCard;
