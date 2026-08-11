import "../css/style.css";
import { useState } from "react";
import Sidebar from "../components/Sidebar";

function Notices() {
    const [notices, setNotices] = useState([
  {
    batch: "Batch React Native",
    title: "API Integration Lecture Rescheduled",
    body: "Please note that today's REST API integration session has been moved to 2:00 PM due to system maintenance.",
    time: "Today, 10:30 AM",
    badge: "primary",
  },
  {
    batch: "Batch Node.js Gateway",
    title: "Project Submission Deadline",
    body: "The final microservices architecture assignment repository links must be submitted by Friday end of day.",
    time: "Yesterday, 4:15 PM",
    badge: "info",
  },
]);
const [title, setTitle] = useState("");
const [batch, setBatch] = useState("Batch React Native");
const [body, setBody] = useState("");

const deleteNotice = (index) => {
  setNotices((prev) => prev.filter((_, i) => i !== index));
};

const publishNotice = () => {

  if (!title || !body) {
    alert("Please fill out notice title and body.");
    return;
  }

  const newNotice = {
    batch,
    title,
    body,
    time: "Just now",
    badge: "primary",
  };

  setNotices((prev) => [newNotice, ...prev]);

  setTitle("");
  setBody("");
};

    return (
        <>
            <div className="container-fluid">
    <div className="row">
      
     
      <Sidebar />

      
      <div className="col-md-10 col-lg-10 ms-auto px-0 main-content">
        
        
        <nav className="navbar navbar-expand navbar-light navbar-top px-4 py-2">
          <div className="container-fluid">
            <button className="btn d-md-none me-2 p-1 border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebarOffcanvas" style={{ color: "#1e293b", fontSize: "1.2rem"}}>
              <i className="bi bi-list"></i>
            </button>
            
            <span className="navbar-text ms-0 fw-semibold fs-5 text-dark">
              Batch Announcements & Notice Board
            </span>
            
            <ul className="navbar-nav ms-auto align-items-center gap-2">
              <button className="btn btn-primary btn-sm d-flex align-items-center gap-1" data-bs-toggle="modal" data-bs-target="#createNoticeModal">
                <i className="bi bi-plus-lg"></i> Post Announcement
              </button>
            </ul>
          </div>
        </nav>

        <div className="content-wrapper">
          
          <div className="row g-3" id="notices-cards-container">
            
           {notices.map((notice, index) => (
  <div className="col-md-6 col-lg-4" key={index}>
    <div className="card shadow-sm border-0 h-100">
      <div className="card-header bg-white py-3 border-bottom d-flex justify-content-between align-items-center">
        <span className={`badge bg-${notice.badge}`}>
          {notice.batch}
        </span>

        <small className="text-muted">
          {notice.time}
        </small>
      </div>

      <div className="card-body">
        <h6 className="fw-bold text-dark mb-2">
          {notice.title}
        </h6>

        <p className="text-muted small mb-0">
          {notice.body}
        </p>
      </div>

      <div className="card-footer bg-white border-top text-end py-2">
        <button
          className="btn btn-sm btn-outline-danger"
          onClick={() => deleteNotice(index)}
        >
          <i className="bi bi-trash"></i> Delete
        </button>
      </div>
    </div>
  </div>
))}

          </div>

        </div>

        <footer className="text-center mt-auto border-top py-3 text-muted" style={{ background: "#fff" }} >
          &copy; 2026 Pedestal Classroom. All rights reserved.
        </footer>
      </div>

    </div>
  </div>

  <div className="modal fade" id="createNoticeModal" tabIndex="-1" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header" style={{ backgroundColor: "#050978", color: "#fff" }}>
          <h5 className="modal-title">Publish Announcement</h5>
          <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
        </div>
        <div className="modal-body">
          <div className="mb-3">
            <label htmlFor="notice_title" className="form-label fw-semibold text-muted small">Headline Title</label>
            <input
  className="form-control"
  value={title}
  onChange={(e) => setTitle(e.target.value)}
/>
          </div>
          <div className="mb-3">
            <label htmlFor="notice_batch" className="form-label fw-semibold text-muted small">Target Batch</label>
                                <select
  className="form-select"
  value={batch}
  onChange={(e) => setBatch(e.target.value)}
>
  <option>Batch React Native</option>
  <option>Batch Node.js Gateway</option>
  <option>Batch Full Stack Java</option>
</select>
          </div>
          <div className="mb-3">
            <label htmlFor="notice_body" className="form-label fw-semibold text-muted small">Notice Body</label>
            <textarea
  className="form-control"
  rows="4"
  value={body}
  onChange={(e) => setBody(e.target.value)}
/>
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary btn-sm" data-bs-dismiss="modal">Cancel</button>
          <button type="button" className="btn btn-primary btn-sm" onClick={publishNotice}>Publish & Email Students</button>
        </div>
      </div>
    </div>
  </div>

  
        </>
    );

}

export default Notices;