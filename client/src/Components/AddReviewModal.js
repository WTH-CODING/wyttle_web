import React from 'react'
import p1 from '../Assets/p1.jpg'

const AddReviewModal = () => {
    return (
      <>
        <div
          className="modal fade"
          id="reviewModal"
          tabIndex="-1"
          aria-labelledby="reviewModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="reviewModalLabel">
                  <i className="far fa-clipboard"></i> Add Feedback
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-3">
                    <img
                      src={p1}
                      style={{ maxHeight: "5rem", borderRadius: "1rem" }}
                      alt="..."
                    />
                  </div>
                  <div className="col-md-9" style={{ alignSelf: "center" }}>
                    <p style={{ margin: "0" }}>Product Name</p>
                    <span style={{color: "#ffe600"}}>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </span>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <form>
                    Review Title
                    <div className="input-group input-group-sm">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter  Title"
                        aria-label="Review Title"
                        aria-describedby="Review Title"
                      />
                    </div>
                    Description
                    <div className="input-group">
                      <textarea
                        className="form-control"
                        rows="5"
                        placeholder="Enter Description"
                        aria-label="Textarea"
                      ></textarea>
                    </div>
                  </form>
                </div>
              </div>
              <div className="modal-footer" style={{ alignSelf: "center" }}>
                <button type="button" className="btn btn-success">
                  Submit Feedback
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default AddReviewModal
