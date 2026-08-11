import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function BatchCreate() {
  const navigate = useNavigate();
  const [batchName, setBatchName] = useState("");
  const [courses, setCourses] = useState([]);
  const [internships, setInternships] = useState([]);
  const [capacity, setCapacity] = useState(30);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [status, setStatus] = useState("active");
  const [description, setDescription] = useState("");
  const [meetingType, setMeetingType] = useState("online");
  const [meetingLink, setMeetingLink] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/batches");
  };

  return (
    <div>
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
              Create New Batch
            </span>
          </div>
        </nav>

        <div className="content-wrapper">
          
          <div className="card shadow-sm border-0">
            <div className="card-header bg-white py-3 border-bottom d-flex justify-content-between align-items-center">
              <h6 className="m-0 fw-bold text-dark fs-6">Batch Configuration Form</h6>
              <Link to="/batches" className="btn btn-light btn-sm border">
                <i className="bi bi-arrow-left"></i> Back to Batches
              </Link>
            </div>
            <div className="card-body p-4">
              <form id="create-batch-page-form" onSubmit={handleSubmit}>
                
                <div className="row">
                  <div className="col-md-12 mb-3">
                    <label htmlFor="batch_name" className="form-label fw-semibold text-muted small">Batch Name <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" id="batch_name" placeholder="e.g. Batch Full Stack Java 2026" value={batchName} onChange={(e) => setBatchName(e.target.value)} required />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="course_ids" className="form-label fw-semibold text-muted small">Courses Program</label>
                    <select className="form-select" id="course_ids" multiple size="6" value={courses} onChange={(e) => setCourses(Array.from(e.target.selectedOptions, (o) => o.value))}>
                      <option value="1">Full Stack Web Development</option>
                      <option value="2">React Native Mobile Engineering</option>
                      <option value="3">Node.js Microservices Architecture</option>
                      <option value="4">Python Data Science & ML</option>
                      <option value="5">DevOps & Cloud Deployment</option>
                    </select>
                    <small className="text-muted" style={{ fontSize: "0.75rem" }}>Hold Ctrl (Windows) or Cmd (Mac) to select multiple courses.</small>
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor="internship_ids" className="form-label fw-semibold text-muted small">Internship Tracks</label>
                    <select className="form-select" id="internship_ids" multiple size="6" value={internships} onChange={(e) => setInternships(Array.from(e.target.selectedOptions, (o) => o.value))}>
                      <option value="1">Pedestal Corporate Track</option>
                      <option value="2">AI Research Internship</option>
                      <option value="3">Cloud Architecture Lab</option>
                    </select>
                    <small className="text-muted" style={{ fontSize: "0.75rem" }}>Hold Ctrl (Windows) or Cmd (Mac) to select multiple internships.</small>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-4 mb-3">
                    <label htmlFor="capacity" className="form-label fw-semibold text-muted small">Capacity <span className="text-danger">*</span></label>
                    <input type="number" className="form-control" id="capacity" value={capacity} min="1" onChange={(e) => setCapacity(e.target.value)} required />
                  </div>

                  <div className="col-md-4 mb-3">
                    <label htmlFor="start_date" className="form-label fw-semibold text-muted small">Start Date <span className="text-danger">*</span></label>
                    <input type="date" className="form-control" id="start_date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
                  </div>

                  <div className="col-md-4 mb-3">
                    <label htmlFor="end_date" className="form-label fw-semibold text-muted small">End Date <span className="text-danger">*</span></label>
                    <input type="date" className="form-control" id="end_date" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-4 mb-3">
                    <label htmlFor="status" className="form-label fw-semibold text-muted small">Initial Status <span className="text-danger">*</span></label>
                    <select className="form-select" id="status" value={status} onChange={(e) => setStatus(e.target.value)} required>
                      <option value="pending">Pending</option>
                      <option value="active">Active</option>
                      <option value="completed">Completed</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="description" className="form-label fw-semibold text-muted small">Description / Curriculum Syllabus</label>
                  <textarea className="form-control" id="description" rows="3" placeholder="Overview of topics, assignments, and prerequisites..." value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>

                <div className="row">
                  <div className="col-md-4 mb-3">
                    <label htmlFor="meeting_type" className="form-label fw-semibold text-muted small">Meeting Type <span className="text-danger">*</span></label>
                    <select className="form-select" id="meeting_type" value={meetingType} onChange={(e) => setMeetingType(e.target.value)} required>
                      <option value="offline">Offline (In-Person)</option>
                      <option value="online">Online (Microsoft Teams)</option>
                    </select>
                  </div>

                  <div className="col-md-8 mb-3" id="meeting_link_wrapper" style={{ display: meetingType === "online" ? "block" : "none" }}>
                    <label htmlFor="meeting_link" className="form-label fw-semibold text-muted small">Teams Meeting Link</label>
                    <input type="url" className="form-control" id="meeting_link" placeholder="https://teams.microsoft.com/l/meetup-join/..." value={meetingLink} onChange={(e) => setMeetingLink(e.target.value)} />
                    <small className="text-muted" style={{ fontSize: "0.75rem" }}>Leave blank to auto-create via Microsoft Graph API.</small>
                  </div>
                </div>

                <div className="d-flex justify-content-end gap-2 border-top pt-3 mt-3">
                  <Link to="/batches" className="btn btn-secondary btn-sm">
                    <i className="bi bi-x-lg"></i> Cancel
                  </Link>
                  <button type="submit" className="btn btn-primary btn-sm">
                    <i className="bi bi-check-lg"></i> Create Batch
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>

        <footer className="text-center mt-auto border-top py-3 text-muted" style={{ background: "#fff" }}>
          &copy; 2026 Pedestal Classroom. All rights reserved.
        </footer>
      </div>

    </div>
  </div>
</div>
  );
}
export default BatchCreate;
