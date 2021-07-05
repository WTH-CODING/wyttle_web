import React from 'react'
import p1 from '../Assets/p1.jpg'

const AddReviewModal = () => {
    return (
      <>
        <div
          class="modal fade"
          id="reviewModal"
          tabindex="-1"
          aria-labelledby="reviewModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="reviewModalLabel">
                  <i class="far fa-clipboard"></i> Add Feedback
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
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
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </span>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <form>
                    Review Title
                    <div class="input-group input-group-sm">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter  Title"
                        aria-label="Review Title"
                        aria-describedby="Review Title"
                      />
                    </div>
                    Description
                    <div class="input-group">
                      <textarea
                        class="form-control"
                        rows="5"
                        placeholder="Enter Description"
                        aria-label="Textarea"
                      ></textarea>
                    </div>
                  </form>
                </div>
              </div>
              <div class="modal-footer" style={{ alignSelf: "center" }}>
                <button type="button" class="btn btn-success">
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
