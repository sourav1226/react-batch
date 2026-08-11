import "../css/style.css";
import { useState } from "react";
import Sidebar from "../components/Sidebar";

function AdminStudents() {
    const [students, setStudents] = useState([
  {
    name: "Aman Sharma",
    email: "aman.s@pedestal.com",
    status: "Active",
    avatar: "A",
  },
  {
    name: "Divya Kapoor",
    email: "divya.k@pedestal.com",
    status: "Active",
    avatar: "D",
  },
  {
    name: "Karan Mehta",
    email: "karan.m@pedestal.com",
    status: "Blocked",
    avatar: "K",
  },
]);
const [search, setSearch] = useState("");
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
          
          <div className="card shadow-sm border-0" style={{ borderRadius: "12px"}}>
            <div className="card-header bg-white px-4 py-3 d-flex justify-content-between align-items-center" style={{ borderBottom: "1px solid #f1f5f9" }}>
              <h6 className="m-0 fw-bold text-dark">All Enrolled Students</h6>
              <span className="badge" style={{ background: "#eef2ff", color: "#4f46e5", fontWeight: "600"}}>184 Total</span>
            </div>
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
                    
                    {filteredStudents.map((student, index) => (
  <tr key={index}>
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

    <td className="text-muted">
      {student.email}
    </td>

    <td>
      <span
        className="badge"
        style={{
          background:
            student.status === "Active"
              ? "#dcfce7"
              : "#fee2e2",
          color:
            student.status === "Active"
              ? "#166534"
              : "#991b1b",
          fontWeight: "600",
        }}
      >
        {student.status}
      </span>
    </td>

    <td className="text-end pe-3">
      <button
        className="btn btn-sm"
        style={{
          background:
            student.status === "Active"
              ? "#fee2e2"
              : "#dcfce7",
          color:
            student.status === "Active"
              ? "#991b1b"
              : "#166534",
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
        {student.status === "Active"
          ? "Block"
          : "Unblock"}
      </button>
    </td>
  </tr>
))}
                  </tbody>
                </table>
              </div>

            </div>
          </div>

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