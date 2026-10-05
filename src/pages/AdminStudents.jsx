import "../css/style.css";
import { useEffect, useState } from "react";
import StudentDetails from "./StudentDetails";
import Sidebar from "../components/Sidebar";
import {
  getBatchStudents,
  assignStudent,
  bulkAssignStudents,
  transferStudent,
  getBatches,
  sendLoginGuide,
  removeStudent,
} from "../api/batchStudentsApi";

function AdminStudents() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [availableStudents, setAvailableStudents] = useState([]);
  const [selectedStudentId, setSelectedStudentId] = useState("");
  const [selectedStudentIds, setSelectedStudentIds] = useState([]);
  const [transferStudentId, setTransferStudentId] = useState("");
const [transferBatchId, setTransferBatchId] = useState("");
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [batches, setBatches] = useState([]);

  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [actionMessage, setActionMessage] = useState("");

  const BATCH_ID = 15;

  useEffect(() => {
  fetchStudents();
  fetchBatches();
}, []);

  const fetchStudents = async () => {
  try {
    setLoading(true);
    setError("");

    const response = await getBatchStudents(BATCH_ID);
    console.log("Students API:", response.data);

    const formattedStudents = (response.data.students || []).map(
      (student) => ({
        id: student.std_id || student.id,
        user_id: student.id,
        name: student.name,
        email: student.email,
        mobile: student.mobile_number,
        status: student.status || "Active",
        avatar: student.name?.charAt(0).toUpperCase() || "?",
      })
    );

    setStudents(formattedStudents);
    setAvailableStudents(response.data.availableStudents || []);
    setSelectedStudentIds([]);
  } catch (error) {
    console.error("Failed to fetch students:", error);
    setError(
      error.response?.data?.message || "Failed to load students."
    );
  } finally {
    setLoading(false);
  }
};

const fetchBatches = async () => {
  try {
    const response = await getBatches();

    const batchList = response.data?.batches?.data || [];

    setBatches(batchList);
  } catch (error) {
    console.error("Failed to fetch batches:", error);
  }
};

const handleAssignStudent = async () => {
  if (!selectedStudentId) {
    setActionMessage("Please select a student.");
    return;
  }

  try {
    setActionMessage("");

    await assignStudent(BATCH_ID, selectedStudentId);

    setActionMessage("Student assigned successfully!");
    setSelectedStudentId("");

    await fetchStudents();
  } catch (error) {
    console.error("Assign student failed:", error);

    setActionMessage(
      error.response?.data?.message ||
        "Failed to assign student."
    );
  }
};

const handleStudentCheckbox = (studentId) => {
  setSelectedStudentIds((prev) => {
    if (prev.includes(studentId)) {
      return prev.filter((id) => id !== studentId);
    }

    return [...prev, studentId];
  });
};

const handleBulkAssign = async () => {
  if (selectedStudentIds.length === 0) {
    return;
  }

  try {
    setActionMessage("");

    const response = await bulkAssignStudents(
      BATCH_ID,
      selectedStudentIds
    );

    setActionMessage(
      response.data?.message ||
        "Students assigned successfully!"
    );

    setSelectedStudentIds([]);

    await fetchStudents();
  } catch (error) {
    console.error("Bulk assign failed:", error);

    setActionMessage(
      error.response?.data?.message ||
        "Failed to assign students."
    );
  }
};
const handleTransferStudent = async () => {
  if (!transferStudentId || !transferBatchId) {
    return;
  }

  try {
    setActionMessage("");

    const response = await transferStudent(
      BATCH_ID,
      transferStudentId,
      BATCH_ID,
      transferBatchId
    );

    setActionMessage(
      response.data?.message ||
        "Student transferred successfully!"
    );

    setTransferStudentId("");
    setTransferBatchId("");

    await fetchStudents();
  } catch (error) {
    console.error("Transfer student failed:", error);

    setActionMessage(
      error.response?.data?.message ||
        "Failed to transfer student."
    );
  }
};

const handleSendLoginGuide = async (userId) => {
  try {
    setActionMessage("");

    const response = await sendLoginGuide(BATCH_ID, userId);

    setActionMessage(
      response.data?.message ||
        "Login guide sent successfully!"
    );
  } catch (error) {
    console.error("Send login guide failed:", error);

    setActionMessage(
      error.response?.data?.message ||
        "Failed to send login guide."
    );
  }
};

const handleRemoveStudent = async (userId) => {
  const confirmed = window.confirm(
    "Are you sure you want to remove this student from the batch?"
  );

  if (!confirmed) {
    return;
  }

  try {
    setActionMessage("");

    const response = await removeStudent(BATCH_ID, userId);

    setActionMessage(
      response.data?.message ||
        "Student removed successfully!"
    );

    await fetchStudents();
  } catch (error) {
    console.error("Remove student failed:", error);

    setActionMessage(
      error.response?.data?.message ||
        "Failed to remove student."
    );
  }
};

const toggleStudentBlock = (name) => {
  setStudents((prev) =>
    prev.map((student) =>
      student.name === name
        ? { ...student, status: student.status === "Active" ? "Blocked" : "Active" }
        : student
    )
  );
};
const filteredStudents = students.filter(
  (student) =>
    student.name.toLowerCase().includes(search.toLowerCase()) ||
    student.email.toLowerCase().includes(search.toLowerCase())
);
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
              Manage Students Directory
            </span>
          </div>
        </nav>

        <div className="content-wrapper">

           {selectedStudent ? (
    
    <StudentDetails
      student={selectedStudent}
      onBack={() => setSelectedStudent(null)}
    />

  ) : (
          
          <div className="card shadow-sm border-0" style={{ borderRadius: "12px"}}>
            <div className="card-header bg-white px-4 py-3 d-flex justify-content-between align-items-center" style={{ borderBottom: "1px solid #f1f5f9" }}>
              <h6 className="m-0 fw-bold text-dark">All Enrolled Students</h6>
                      <span
                        className="badge"
                        style={{
                          background: "#eef2ff",
                          color: "#4f46e5",
                          fontWeight: "600",
                        }}
                      >
                        {students.length} Total
                      </span>
            </div>
            {actionMessage && (
  <div
    className="alert alert-info py-2 mb-3"
    style={{ fontSize: "0.9rem" }}
  >
    {actionMessage}
  </div>
)}
            <div className="card-body px-4 py-3">
              
              <div className="row g-2 mb-3">
                <div className="col-md-4">
                  <input type="text" className="form-control form-control-sm" id="student-admin-search" placeholder="Search by name or email..." style={{ borderRadius: "8px"}} value={search} onChange={(e) => setSearch(e.target.value)} />
                </div>
                <div className="col-md-2">
                  <button className="btn btn-sm w-100" style={{ background: "#4f46e5" , color: "#fff" , borderRadius: "8px" , fontWeight: "600"}} onClick={() => {}}>
                    <i className="bi bi-search"></i> Search
                  </button>
                </div>
              </div>
              <div className="d-flex align-items-center gap-2 mt-3 mb-3">
  <select
    className="form-select"
    style={{ maxWidth: "300px" }}
    value={selectedStudentId}
    onChange={(e) => setSelectedStudentId(e.target.value)}
  >
    <option value="">Select student to assign</option>

    {availableStudents.map((student) => (
      <option key={student.id} value={student.id}>
        {student.name} - {student.email}
      </option>
    ))}
  </select>

  <button
    className="btn btn-primary"
    onClick={handleAssignStudent}
    disabled={!selectedStudentId}
  >
    Assign Student
  </button>
</div>

{availableStudents.length > 0 && (
  <div className="mb-4">
    <h6 className="fw-semibold mb-2">Available Students</h6>

    {availableStudents.map((student) => (
      <div
        key={student.id}
        className="d-flex align-items-center gap-2 mb-2"
      >
        <input
          type="checkbox"
          checked={selectedStudentIds.includes(student.id)}
          onChange={() => handleStudentCheckbox(student.id)}
        />

        <span>
          {student.name} - {student.email}
        </span>
      </div>
    ))}

    <button
      className="btn btn-primary mt-2"
      disabled={selectedStudentIds.length === 0}
        onClick={handleBulkAssign}

    >
      Bulk Assign Selected
    </button>
  </div>
)}
<div className="d-flex align-items-center gap-2 mb-3">
  <select
    className="form-select"
    style={{ maxWidth: "250px" }}
    value={transferStudentId}
    onChange={(e) => setTransferStudentId(e.target.value)}
  >
    <option value="">Select student to transfer</option>

    {students.map((student) => (
      <option key={student.user_id} value={student.user_id}>
        {student.name}
      </option>
    ))}
  </select>

  <select
    className="form-select"
    style={{ maxWidth: "250px" }}
    value={transferBatchId}
    onChange={(e) => setTransferBatchId(e.target.value)}
  >
    <option value="">Select destination batch</option>

    {batches
      .filter((batch) => batch.id !== BATCH_ID)
      .map((batch) => (
        <option key={batch.id} value={batch.id}>
          {batch.batch_name}
        </option>
      ))}
  </select>

  <button
    className="btn btn-warning"
    disabled={!transferStudentId || !transferBatchId}
      onClick={handleTransferStudent}

  >
    Transfer Student
  </button>
</div>

              <div className="table-responsive">
                <table className="table table-hover align-middle mb-0" style={{ fontSize: ".9rem"}}>
                  <thead style={{ background: "#f8fafc" }}>
                    <tr>
                      <th style={{ fontWeight: "600" , color: "#475569" }}>Name</th>
                      <th style={{ fontWeight: "600", color: "#475569"}}>Email</th>
                      <th style={{ fontWeight: "600" , color: "#475569" }}>Status</th>
                      <th className="text-end pe-3" style={{ fontWeight: "600", color: "#475569"}}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
  {loading ? (
    <tr>
      <td colSpan="4" className="text-center py-4">
        Loading students...
      </td>
    </tr>
  ) : error ? (
    <tr>
      <td colSpan="4" className="text-center text-danger py-4">
        {error}
        <br />
        <button
          className="btn btn-sm btn-outline-primary mt-2"
          onClick={fetchStudents}
        >
          Retry
        </button>
      </td>
    </tr>
  ) : filteredStudents.length === 0 ? (
    <tr>
      <td colSpan="4" className="text-center text-muted py-4">
        No students found.
      </td>
    </tr>
  ) : (
    filteredStudents.map((student) => (
      <tr key={student.user_id}>
        <td>
          <div className="d-flex align-items-center gap-2">
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "8px",
                background: "#0891b2",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "700",
              }}
            >
              {student.avatar}
            </div>
            <span style={{ fontWeight: "600" }}>
              {student.name}
            </span>
          </div>
        </td>

        <td className="text-muted">{student.email}</td>

        <td>
          <span
            className="badge"
            style={{
              background:
                student.status === "Active" ? "#dcfce7" : "#fee2e2",
              color:
                student.status === "Active" ? "#166534" : "#991b1b",
              fontWeight: "600",
            }}
          >
            {student.status}
          </span>
        </td>

        <td className="text-end pe-3">
          <button
            className="btn btn-sm me-2"
            style={{
              background: "#e0e7ff",
              color: "#3730a3",
              border: "none",
              borderRadius: "8px",
              fontWeight: "600",
            }}
            onClick={() => setSelectedStudent(student)}
          >
            <i className="bi bi-eye"></i> View
          </button>

          <button
            className="btn btn-sm"
            style={{
              background:
                student.status === "Active" ? "#fee2e2" : "#dcfce7",
              color:
                student.status === "Active" ? "#991b1b" : "#166534",
              border: "none",
              borderRadius: "8px",
              fontWeight: "600",
            }}
            onClick={() => toggleStudentBlock(student.name)}
          >
            <i
              className={
                student.status === "Active"
                  ? "bi bi-lock"
                  : "bi bi-unlock"
              }
            ></i>{" "}
            {student.status === "Active" ? "Block" : "Unblock"}
          </button>
          <button
  className="btn btn-sm me-2"
  style={{
    background: "#fef3c7",
    color: "#92400e",
    border: "none",
    borderRadius: "8px",
    fontWeight: "600",
  }}
  onClick={() => handleSendLoginGuide(student.user_id)}
>
  <i className="bi bi-envelope"></i> Send Guide
</button>
<button
  className="btn btn-sm me-2"
  style={{
    background: "#fee2e2",
    color: "#991b1b",
    border: "none",
    borderRadius: "8px",
    fontWeight: "600",
  }}
  onClick={() => handleRemoveStudent(student.user_id)}
>
  <i className="bi bi-trash"></i> Remove
</button>
        </td>
      </tr>
    ))
  )}
</tbody>
                </table>
              </div>

            </div>
          </div> 
        )}

        </div>  

        <footer className="text-center mt-auto border-top py-3 text-muted" style={{background:"#fff"}}>
          &copy; 2026 Pedestal class Room. All rights reserved.
        </footer>
      </div>

    </div>
  </div>
    </>
  );
}

export default AdminStudents;