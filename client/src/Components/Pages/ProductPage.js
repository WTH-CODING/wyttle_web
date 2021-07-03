import React from 'react'
import p1 from '../../Assets/p1.jpg'
import ProductTopReviewCard from '../ProductTopReviewCard'
import ProuctCardSmall from '../ProuctCardSmall'
import ProductFeedbackCard from '../ProductFeedbackCard'
import ProgressBar from '../ProgressBar'

function ProductPage() {
    return (
      <>

        <div className="row mt-3" style={{ justifyContent: "center" }}>
          {/*=========================================================== PRODUCT IMAGES ============================================ */}

          <div className="col-md-6 p-3">
            <div className="row">
              <div className="col-md-6 p-3">
                <img
                  alt="p1"
                  src={p1}
                  style={{ width: "100%", maxWidth: "300px" }}
                ></img>
              </div>
              <div className="col-md-6 p-3">
                <img
                  alt="p1"
                  src={p1}
                  style={{ width: "100%", maxWidth: "300px" }}
                ></img>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 p-3">
                <img
                  alt="p1"
                  src={p1}
                  style={{ width: "100%", maxWidth: "300px" }}
                ></img>
              </div>
              <div className="col-md-6 p-3">
                <img
                  alt="p1"
                  src={p1}
                  style={{ width: "100%", maxWidth: "300px" }}
                ></img>
              </div>
            </div>
          </div>
          {/*====================================================== END PRODUCT IMAGES ========================================= */}

          {/*======================================================== PRODUCT DETAILS =========================================*/}
          <div className="col-md-6 p-3" style={{ alignSelf: "center" }}>
            <div className="row">
              <h1
                style={{
                  fontFamily: "Nunito",
                  fontSize: "4.8rem",
                  fontWeight: "400",
                }}
              >
                Product
              </h1>
              <p
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  fontSize: "1.2rem",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="row">
              <div className="col-md-3">
                <h3
                  style={{
                    fontFamily: "Nunito",
                    fontSize: "3.2rem",
                    fontWeight: "400",
                  }}
                >
                  ₹ 200
                </h3>
              </div>
              <div className="col-md-1">
                <h3
                  style={{
                    fontFamily: "Nunito",
                    fontSize: "3.2rem",
                    fontWeight: "400",
                  }}
                >
                  |
                </h3>
              </div>
              <div className="col-md-2" style={{ alignSelf: "center" }}>
                <h3
                  style={{
                    fontFamily: "Nunito",
                    fontSize: "2.4rem",
                    fontWeight: "400",
                  }}
                >
                  Size
                </h3>
              </div>
              <div className="col-md-3" style={{ alignSelf: "center" }}>
                <h3>
                  <select
                    style={{
                      background: "#fbfbfb",
                      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                      borderRadius: "0.3rem",
                      border: "none",
                      fontSize: "1.8rem",
                      fontFamily: "Nunito",
                    }}
                  >
                    <option>Large</option>
                    <option>Small</option>
                    <option>Medium</option>
                    <option></option>
                  </select>
                </h3>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 mt-3">
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  style={{
                    width: "100%",
                    background: "#566fd2",
                    borderRadius: "2rem",
                    maxWidth: "14.15rem",
                  }}
                >
                  {" "}
                  <i className="fas fa-cart-plus"></i> Add to cart
                </button>
              </div>
              <div className="col-md-4 mt-3">
                <button
                  type="button"
                  className="btn btn-danger btn-lg"
                  style={{
                    width: "100%",
                    background: "#ff4545",
                    borderRadius: "2rem",
                    maxWidth: "14.15rem",
                  }}
                >
                  {" "}
                  <i className="fas fa-cart-arrow-down"></i> Buy Now
                </button>
              </div>
            </div>
            <ProductTopReviewCard />
          </div>
        </div>
        {/*===================================================== END PRODUCT DETAILS ==================================================*/}

        {/*=================================================== RELATED PRODUCT SECTION =========================================*/}

        <hr style={{ fontWeight: "700" }} />

        <div className="row mb-5">
          <div className="row">
            <h1
              style={{
                color: "#818181",
                fontWeight: "700",
                fontSize: "2.5rem",
              }}
            >
              Related Products
            </h1>
          </div>
          <div className="row">
            <ProuctCardSmall />
            <ProuctCardSmall />
            <ProuctCardSmall />
            <ProuctCardSmall />
          </div>
        </div>
        {/*========================================= END RELATED PRODUCT SECTION =========================================*/}

        {/*========================================= FEEDBACK SECTION =========================================*/}
                        {/*========================= CONSUMER FEEDBACK ============================*/}
        <hr style={{ fontWeight: "700" }} />
        <div className="row">
          <div className="row">
            <div className="col-md-6 p-5">
              <h1>Customer Feedback</h1>
              <ProductFeedbackCard />
              <ProductFeedbackCard />
            </div>

            {/* VERTICAL RULE */}
            <div className="col-md-1">
              <div
                style={{
                  height: "80%",
                  background: "#7a7a7a",
                  width: "3px",
                  alignSelf: "center",
                  transform: "translateY(100px )",
                }}
              ></div>
            </div>

                            {/*========================= FEEDBACK STATS ============================*/}
            <div className="col-md-5 p-5">
              <h1>Feedback Stats</h1>
              <div className="row mt-5">
                <div className="col-md-3" style={{ alignSelf: "center" }}>
                  <h4
                    style={{
                      transform: "translateY(0.4rem)",
                      fontFamily: "Poppins",
                      fontWeight: "400",
                      fontSize: "1.8rem",
                      color: "#6a6a6a",
                    }}
                  >
                    5 Star
                  </h4>
                </div>
                <ProgressBar />
                <div className="col-md-2">
                  <h4
                    style={{
                      transform: "translateY(0.4rem)",
                      fontFamily: "Poppins",
                      fontWeight: "400",
                      fontSize: "1.8rem",
                      color: "#6a6a6a",
                    }}
                  >
                    59%
                  </h4>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-md-3" style={{ alignSelf: "center" }}>
                  <h4
                    style={{
                      transform: "translateY(0.4rem)",
                      fontFamily: "Poppins",
                      fontWeight: "400",
                      fontSize: "1.8rem",
                      color: "#6a6a6a",
                    }}
                  >
                    4 Star
                  </h4>
                </div>
                <ProgressBar />
                <div className="col-md-2">
                  <h4
                    style={{
                      transform: "translateY(0.4rem)",
                      fontFamily: "Poppins",
                      fontWeight: "400",
                      fontSize: "1.8rem",
                      color: "#6a6a6a",
                    }}
                  >
                    59%
                  </h4>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-md-3" style={{ alignSelf: "center" }}>
                  <h4
                    style={{
                      transform: "translateY(0.4rem)",
                      fontFamily: "Poppins",
                      fontWeight: "400",
                      fontSize: "1.8rem",
                      color: "#6a6a6a",
                    }}
                  >
                    3 Star
                  </h4>
                </div>
                <ProgressBar />
                <div className="col-md-2">
                  <h4
                    style={{
                      transform: "translateY(0.4rem)",
                      fontFamily: "Poppins",
                      fontWeight: "400",
                      fontSize: "1.8rem",
                      color: "#6a6a6a",
                    }}
                  >
                    59%
                  </h4>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-md-3" style={{ alignSelf: "center" }}>
                  <h4
                    style={{
                      transform: "translateY(0.4rem)",
                      fontFamily: "Poppins",
                      fontWeight: "400",
                      fontSize: "1.8rem",
                      color: "#6a6a6a",
                    }}
                  >
                    2 Star
                  </h4>
                </div>
                <ProgressBar />
                <div className="col-md-2">
                  <h4
                    style={{
                      transform: "translateY(0.4rem)",
                      fontFamily: "Poppins",
                      fontWeight: "400",
                      fontSize: "1.8rem",
                      color: "#6a6a6a",
                    }}
                  >
                    59%
                  </h4>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-md-3" style={{ alignSelf: "center" }}>
                  <h4
                    style={{
                      transform: "translateY(0.4rem)",
                      fontFamily: "Poppins",
                      fontWeight: "400",
                      fontSize: "1.8rem",
                      color: "#6a6a6a",
                    }}
                  >
                    1 Star
                  </h4>
                </div>
                <ProgressBar />
                <div className="col-md-2">
                  <h4
                    style={{
                      transform: "translateY(0.4rem)",
                      fontFamily: "Poppins",
                      fontWeight: "400",
                      fontSize: "1.8rem",
                      color: "#6a6a6a",
                    }}
                  >
                    59%
                  </h4>
                </div>
              </div>

              <div className="col-md-5 mt-5">
                <button
                  type="button"
                  className="btn btn-success btn-lg"
                  style={{
                    width: "100%",
                    background: "#659F1B",
                    border: "none",
                    borderRadius: "2rem",
                    maxWidth: "14.15rem",
                    fontFamily: "Roboto",
                    fontWeight: "700",
                  }}
                >
                  {" "}
                  <i className="fas fa-plus"></i> &nbsp;&nbsp;Add Feedback
                </button>
              </div>
            </div>
          </div>
        </div>
        {/*=========================================  END FEEDBACK SECTION =========================================*/}
      </>
    );
}

export default ProductPage
