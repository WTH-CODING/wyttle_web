import React from 'react'
import p1 from '../Assets/p1.jpg'

function ProuctCardSmall() {
    return (
      <>
        <div className="col-md-3 mt-2" style={{ textAlign: "-webkit-center" }}>
          <div
            className="col-md-10 pb-2"
            style={{
              background: "#ffffff",
              borderRadius: "0.75rem",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            <img
              alt="pq"
              src={p1}
              style={{
                maxWidth: "100%",
                borderRadius: "0.75rem",
                maxHeight: "21.05",
              }}
            ></img>
            <p className="mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
        </div>
      </>
    );
}

export default ProuctCardSmall
