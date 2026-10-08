import "../css/style.css";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function BatchShow() {

    const { id } = useParams();
    const [status, setStatus] = useState("Active");

    const markCompletedSuccess = () => {
    setStatus("Completed");
};

    return (
        <>
            <div className="container-fluid">
    <div className="row">
      
      <Sidebar />

      <div className="col-md-10 col-lg-10 ms-auto px-0 main-content">
        
        <nav className="navbar navbar-expand navbar-light navbar-top px-4 py-2">
          <div className="container-fluid">
            <button className="btn d-md-none me-2 p-1 border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebarOffcanvas" style={{ color: "#1e293b", fontSize: "1.2rem" }}>
              <i className="bi bi-list"></i>
            </button>
            
            <span className="navbar-text ms-0 fw-semibold fs-5 text-dark">
              Batch Details: Batch React Native {id ? `(#${id})` : ""}
            </span>
            
                  <div className="ms-auto">
                    <button
                      className="btn btn-outline-success btn-sm"
                      data-bs-toggle="modal"
                      data-bs-target="#completeBatchModal"
                    >
                      <i className="bi bi-check2-all"></i> Mark Completed
                    </button>
                  </div>
          </div>
        </nav>

        <div className="content-wrapper">
          
          <div className="row mb-3">
            <div className="col-12">
              <div className="quick-actions-wrap">
                <Link to="/attendance" className="action-tile">
                  <div className="action-icon" style={{ backgroundColor: "#198754" }}><i className="bi bi-clipboard-check"></i></div>
                  <div className="action-text">
                    <span className="title">Mark Attendance</span>
                    <span className="count">Commit roster</span>
                  </div>
                </Link>
                <Link to={`/schedules?batch_id=${id}`} className="action-tile">                   <div className="action-icon" style={{ backgroundColor: "#7c3aed" }}><i className="bi bi-calendar-plus"></i></div>
                  <div className="action-text">
                    <span className="title">Add Schedule</span>
                    <span className="count">New calendar class</span>
                  </div>
                </Link>
                <button
                    type="button"
                    className="action-tile btn border-0 text-start bg-transparent"
                    onClick={() => {
                    alert("Teams recordings list is offline.");
                    }}
                >
                <div
                className="action-icon"
                style={{ backgroundColor: "#0d6efd" }}
                >
                <i className="bi bi-camera-video"></i>
                </div>

                <div className="action-text">
                <span className="title">Recordings</span>
                <span className="count">3 Classes synchronized</span>
                </div>
                </button>
              </div>
            </div>
          </div>

          <div className="row">
            
            <div className="col-md-8">
              <div className="card shadow-sm border-0 mb-4">
                <div className="card-header py-3 d-flex justify-content-between align-items-center bg-white border-bottom">
                  <h6 className="m-0 fw-bold text-dark fs-6">Batch Details</h6>
                  <Link to="/batches" className="btn btn-light btn-sm border">
                    <i className="bi bi-arrow-left"></i> Back
                  </Link>
                </div>
                <div className="card-body">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <strong className="text-muted small d-block">Batch Designation:</strong>
                      <span className="text-dark fw-semibold">Batch React Native</span>
                    </div>
                    <div className="col-md-6">
                      <strong className="text-muted small d-block">Course Program:</strong>
                      <span className="badge bg-primary">React Native Mobile Apps</span>
                    </div>
                    <div className="col-md-6">
                      <strong className="text-muted small d-block">Capacity limit:</strong>
                      <span>24 Students</span>
                    </div>
                    <div className="col-md-6">
                      <strong className="text-muted small d-block">Status:</strong>
                            <span
                              className={`badge ${status === "Active"
                                  ? "bg-success"
                                  : "bg-secondary"
                                }`}
                            >
                              {status}
                            </span>
                    </div>
                    <div className="col-md-6">
                      <strong className="text-muted small d-block">Commencement:</strong>
                      <span>01 Jun 2026</span>
                    </div>
                    <div className="col-md-6">
                      <strong className="text-muted small d-block">Graduation:</strong>
                      <span>31 Aug 2026</span>
                    </div>
                    <div className="col-12">
                      <strong className="text-muted small d-block">Course Syllabus / Description:</strong>
                      <p className="mb-0 text-muted" style={{ fontSize: "0.85rem" }}>
                        This program covers stateful elements, redux toolkit integrations, navigation setups, MS Graph APIs, and native module bridge syncing.
                      </p>
                    </div>
                    
                    <div className="col-12 border-top pt-3">
                      <strong className="text-muted small d-block mb-2">Meeting Details:</strong>
                      <span className="badge bg-primary mb-2">Online (Microsoft Teams)</span>
                      <div>
                        <a href="https://teams.microsoft.com" target="_blank" rel="noopener noreferrer" className="btn btn-danger btn-sm">
                          <i className="bi bi-camera-video-fill"></i> Join Teams Live Class Meeting
                          <span className="badge bg-light text-danger ms-1" style={{ animation: "live-dot 1.2s infinite ease-in-out" }}> LIVE </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              
              <div className="card shadow-sm border-0 mb-4">
                <div className="card-header bg-white py-3 border-bottom">
                  <h6 className="m-0 fw-bold text-dark fs-6">Enrolled Students</h6>
                </div>
                <div className="card-body p-0">
                  <div className="list-group list-group-flush" style={{ maxHeight: "240px", overflowY: "auto" }}>
                    <div className="list-group-item d-flex justify-content-between align-items-center py-2 px-3">
                      <span className="fw-semibold text-dark" style={{ fontSize: "0.85rem" }}>Aman Sharma</span>
                      <small className="text-muted" style={{ fontSize: "0.75rem" }}>aman.s@pedestal.com</small>
                    </div>
                    <div className="list-group-item d-flex justify-content-between align-items-center py-2 px-3">
                      <span className="fw-semibold text-dark" style={{ fontSize: "0.85rem" }}>Divya Kapoor</span>
                      <small className="text-muted" style={{ fontSize: "0.75rem" }}>divya.k@pedestal.com</small>
                    </div>
                    <div className="list-group-item d-flex justify-content-between align-items-center py-2 px-3">
                      <span className="fw-semibold text-dark" style={{ fontSize: "0.85rem" }}>Karan Mehta</span>
                      <small className="text-muted" style={{ fontSize: "0.75rem" }}>karan.m@pedestal.com</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card shadow-sm border-0 mb-4">
                <div className="card-header bg-white py-3 border-bottom">
                  <h6 className="m-0 fw-bold text-dark fs-6">Capacity Utilization</h6>
                </div>
                <div className="card-body">
                  <div className="mb-3">
                    <small className="text-muted d-block mb-1">Roster Limit: 24 Students</small>
                    <div className="progress" style={{ height: "18px" }}>
                            <div
                              className="progress-bar bg-success"
                              role="progressbar"
                              style={{
                                width: "75%",
                                fontSize: "0.75rem",
                                fontWeight: "bold",
                              }}
                              aria-valuenow={75}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            >
                              75% Full
                            </div>
                    </div>
                  </div>
                  <div className="row text-center border-top pt-2 mt-2">
                    <div className="col-6 border-end">
                      <div className="h6 mb-0 fw-bold">8</div>
                      <small className="text-muted" style={{ fontSize: "0.75rem" }}>Schedules</small>
                    </div>
                    <div className="col-6">
                      <div className="h6 mb-0 fw-bold">14</div>
                      <small className="text-muted" style={{ fontSize: "0.75rem" }}>Materials</small>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

        <footer className="text-center mt-auto border-top py-3 text-muted" style={{ background: "#fff" }}>
          &copy; 2026 Pedestal Class Room. All rights reserved.
        </footer>
      </div>

    </div>
  </div>

  <div className="modal fade" id="completeBatchModal" tabIndex="-1" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header bg-success text-white">
          <h5 className="modal-title">Mark Batch Completed</h5>
          <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <p>Are you sure you want to mark <strong>Batch React Native</strong> as completed?</p>
          <p className="text-muted mb-0 small">This sets its status to inactive. Students and trainers will no longer see this batch as active.</p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary btn-sm" data-bs-dismiss="modal">Cancel</button>
                <button
  type="button"
  className="btn btn-success btn-sm"
  onClick={markCompletedSuccess}
  data-bs-dismiss="modal"
>
  Confirm Completed
</button>
        </div>
      </div>
    </div>
  </div>


    </>
    );
}

export default BatchShow;