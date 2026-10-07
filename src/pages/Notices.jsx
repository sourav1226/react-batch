import "../css/style.css";
import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import {
  getBatchNotices,
  createNotice,
  updateNotice,
  deleteNotice as deleteNoticeApi,
} from "../api/batchNoticesApi";

function Notices() {
const [notices, setNotices] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");
const [batchName, setBatchName] = useState("");
const [title, setTitle] = useState("");
const [body, setBody] = useState("");
const [editingNotice, setEditingNotice] = useState(null);

const BATCH_ID = 15;

useEffect(() => {
  const fetchNotices = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await getBatchNotices(BATCH_ID);

      setNotices(response.data.notices || []);
      setBatchName(response.data.batch?.batch_name || "");
    } catch (error) {
      setError(
        error.response?.data?.message || "Failed to load notices."
      );
    } finally {
      setLoading(false);
    }
  };

  fetchNotices();
}, []);

const deleteNotice = async (noticeId) => {
  try {
    await deleteNoticeApi(BATCH_ID, noticeId);

    setNotices((prev) =>
      prev.filter((notice) => notice.id !== noticeId)
    );
  } catch (error) {
    alert(
      error.response?.data?.message || "Failed to delete notice."
    );
  }
};

const publishNotice = async () => {
  if (!title || !body) {
    alert("Please fill out notice title and body.");
    return;
  }

  try {
    if (editingNotice) {
      await updateNotice(
        BATCH_ID,
        editingNotice.id,
        title,
        body
      );
    } else {
      await createNotice(BATCH_ID, title, body);
    }

    const response = await getBatchNotices(BATCH_ID);

    setNotices(response.data.notices || []);
    setBatchName(response.data.batch?.batch_name || "");

    setTitle("");
    setBody("");
    setEditingNotice(null);
  } catch (error) {
    alert(
      error.response?.data?.message ||
        "Failed to save notice."
    );
  }
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
                {loading && (
                  <div className="text-center py-4">
                    Loading notices...
                  </div>
                )}

                {error && (
                  <div className="alert alert-danger">
                    {error}
                  </div>
                )}
          
          <div className="row g-3" id="notices-cards-container">
            
          {!loading && !error && notices.map((notice) => (
<div className="col-md-6 col-lg-4" key={notice.id}>
    <div className="card shadow-sm border-0 h-100">
      <div className="card-header bg-white py-3 border-bottom d-flex justify-content-between align-items-center">
        <span className="badge bg-primary">
            {batchName}
        </span>

        <small className="text-muted">
          {new Date(notice.created_at).toLocaleString()}        
        </small>
      </div>

      <div className="card-body">
        <h6 className="fw-bold text-dark mb-2">
          {notice.title}
        </h6>

        <p className="text-muted small mb-0">
          {notice.content}
        </p>
      </div>

      <div className="card-footer bg-white border-top text-end py-2">
        <div className="d-flex justify-content-end gap-2">
  <button
    className="btn btn-sm btn-outline-primary"
    onClick={() => {
      setEditingNotice(notice);
      setTitle(notice.title);
      setBody(notice.content);
    }}
    data-bs-toggle="modal"
    data-bs-target="#createNoticeModal"
  >
    <i className="bi bi-pencil"></i> Edit
  </button>

  <button
    className="btn btn-sm btn-outline-danger"
    onClick={() => deleteNotice(notice.id)}
  >
    <i className="bi bi-trash"></i> Delete
  </button>
</div>
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
          <h5 className="modal-title">
  {editingNotice ? "Edit Announcement" : "Publish Announcement"}
</h5>
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
  <input
  type="text"
  className="form-control"
  value={batchName || "Loading..."}
  readOnly
/>
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