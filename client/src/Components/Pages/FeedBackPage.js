import React from 'react'
import TopRankCard from '../TopRankCard'
import FeaturedFeedbackCard from '../FeaturedFeedbackCard'


function FeedBack() {
    return (
      <>
        <div className="row mt-5">
          <div className="col-md-4 text-center" style={{ alignSelf: "center" }}>
            <div className="row">
              <p
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "700",
                  fontSize: "1.8rem",
                  color: "#3d3d3d",
                }}
              >
                Current Points : 12
              </p>
              <p
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "700",
                  fontSize: "1.8rem",
                  color: "#3d3d3d",
                }}
              >
                <i className="fas fa-arrow-circle-up"></i> Upvotes: 7
              </p>
            </div>
          </div>
          <div className="col-md-4 text-center" style={{ alignSelf: "center" }}>
            <p
              style={{
                fontFamily: "Poppins",
                fontWeight: "700",
                fontSize: "2.5rem",
                color: "#6a6a6a",
              }}
            >
              Featured Feedback
            </p>
          </div>
          <div className="col-md-4 text-center" style={{ alignSelf: "center" }}>
            <i
              className="fas fa-list"
              style={{ fontSize: "3.9rem", color: "#6a6a6a" }}
            ></i>
          </div>
        </div>
        <TopRankCard />

        <div className="row mt-4">
          <div className="col-md-6">
            <FeaturedFeedbackCard />
          </div>
          <div className="col-md-6">
            <FeaturedFeedbackCard />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <FeaturedFeedbackCard />
          </div>
          <div className="col-md-6">
            <FeaturedFeedbackCard />
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-6">
            <FeaturedFeedbackCard />
          </div>
          <div className="col-md-6">
            <FeaturedFeedbackCard />
          </div>
        </div>
      </>
    );
}

export default FeedBack
