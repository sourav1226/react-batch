import "../css/style.css";
import { useState } from "react";

function AdminTrainers() {
    const [trainers, setTrainers] = useState([
  {
    name: "Sourav Sharma",
    email: "sourav@pedestal.com",
    status: "Active",
    avatar: "S",
  },
  {
    name: "Rajesh Verma",
    email: "rajesh.v@pedestal.com",
    status: "Active",
    avatar: "R",
  },
  {
    name: "Vikram Rathore",
    email: "vikram.r@pedestal.com",
    status: "Blocked",
    avatar: "V",
  },
]);
const toggleTrainerBlock = (index) => {
  const updatedTrainers = [...trainers];

  updatedTrainers[index].status =
    updatedTrainers[index].status === "Active"
      ? "Blocked"
      : "Active";

  setTrainers(updatedTrainers);
};
  return (
    <>
        <div className="container-fluid">
    <div className="row">
      
      <div className="col-md-2 col-lg-2 d-none d-md-block sidebar p-0">
        <div className="brand">
          <img src="https://pedestaltechnoworld.com/front-end/asset/images/header-logo.png" alt="Pedestal"/>
        </div>
        <nav className="nav flex-column">
          <div className="sidebar-heading">Main</div>
          <a className="nav-link" href="dashboard.html">
            <i className="bi bi-speedometer2"></i> Dashboard
          </a>
          <a className="nav-link" href="migration-hub.html">
            <i className="bi bi-git"></i> Migration Hub
          </a>

          <div className="sidebar-heading">Academic</div>
          <a className="nav-link" href="batches.html">
            <i className="bi bi-collection"></i> Batches
          </a>
          <a className="nav-link" href="attendance.html">
            <i className="bi bi-clipboard-check"></i> Attendance
          </a>
          <a className="nav-link" href="schedules.html">
            <i className="bi bi-calendar-event"></i> Schedules
          </a>

          <div className="sidebar-heading">Administration</div>
          <a className="nav-link active" href="admin-trainers.html">
            <i className="bi bi-person-badge"></i> Trainers Directory
          </a>
          <a className="nav-link text-white-50" href="admin-students.html">
            <i className="bi bi-people"></i> Students Directory
          </a>
        </nav>
      </div>

      <div className="offcanvas offcanvas-start offcanvas-sidebar d-md-none" tabIndex="-1" id="sidebarOffcanvas">
        <div className="brand">
          <img src="https://pedestaltechnoworld.com/front-end/asset/images/header-logo.png" alt="Pedestal"/>
          <button type="button" className="btn-close btn-close-white ms-auto" data-bs-dismiss="offcanvas"></button>
        </div>
        <nav className="nav flex-column">
          <div className="sidebar-heading">Main</div>
          <a className="nav-link" href="dashboard.html" data-bs-dismiss="offcanvas">
            <i className="bi bi-speedometer2"></i> Dashboard
          </a>
          <a className="nav-link" href="migration-hub.html" data-bs-dismiss="offcanvas">
            <i className="bi bi-git"></i> Migration Hub
          </a>

          <div className="sidebar-heading">Academic</div>
          <a className="nav-link" href="batches.html" data-bs-dismiss="offcanvas">
            <i className="bi bi-collection"></i> Batches
          </a>
          <a className="nav-link" href="attendance.html" data-bs-dismiss="offcanvas">
            <i className="bi bi-clipboard-check"></i> Attendance
          </a>
          <a className="nav-link" href="schedules.html" data-bs-dismiss="offcanvas">
            <i className="bi bi-calendar-event"></i> Schedules
          </a>

          <div className="sidebar-heading">Administration</div>
          <a className="nav-link active" href="admin-trainers.html" data-bs-dismiss="offcanvas">
            <i className="bi bi-person-badge"></i> Trainers Directory
          </a>
          <a className="nav-link" href="admin-students.html" data-bs-dismiss="offcanvas">
            <i className="bi bi-people"></i> Students Directory
          </a>
        </nav>
      </div>

      <div className="col-md-10 col-lg-10 ms-auto px-0 main-content">
        
        <nav className="navbar navbar-expand navbar-light navbar-top px-4 py-2">
          <div className="container-fluid">
            <button className="btn d-md-none me-2 p-1 border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebarOffcanvas" style={{ color:"#1e293b", fontSize: "1.2rem"}}>
              <i className="bi bi-list"></i>
            </button>
            
            <span className="navbar-text ms-0 fw-semibold fs-5 text-dark">
              Manage Trainers Directory
            </span>
          </div>
        </nav>

        <div className="content-wrapper">
          
          <div className="card shadow-sm border-0" style={{ borderRadius:"12px"}}>
            <div className="card-header bg-white px-4 py-3 d-flex justify-content-between align-items-center" style={{ borderBottom:"1px solid #f1f5f9"}}>
              <h6 className="m-0 fw-bold text-dark">All System Trainers</h6>
              <span className="badge" style={{ background:"#eef2ff", color:"#4f46e5", fontWeight:"600"}}>8 Total</span>
            </div>
            <div className="card-body px-4 py-3">
              
              <div className="row g-2 mb-3">
                <div className="col-md-4">
                  <input type="text" className="form-control form-control-sm" id="trainer-admin-search" placeholder="Search by name or email..." style={{ borderRadius:"8px"}} />
                </div>
                <div className="col-md-2">
                  <button className="btn btn-sm w-100" style={{ background:"#4f46e5", color:" #fff", borderRadius:"8px", fontWeight:"600"}} onClick={() => {}}>
                    <i className="bi bi-search"></i> Search
                  </button>
                </div>
              </div>

              <div className="table-responsive">
                <table className="table table-hover align-middle mb-0" style={{ fontSize:".9rem"}}>
                  <thead style={{ background:"#f8fafc"}}>
                    <tr>
                      <th style={{ fontWeight:"600", color:"#475569"}}>Name</th>
                      <th style={{ fontWeight:"600", color:"#475569"}}>Email</th>
                      <th style={{ fontWeight:"600", color:"#475569"}}>Status</th>
                      <th className="text-end pe-3" style={{fontWeight:"600", color:"#475569"}}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    
                    {trainers.map((trainer, index) => (
  <tr key={index}>
    <td>
      <div className="d-flex align-items-center gap-2">
        <div
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "8px",
            background: "#4f46e5",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "700",
          }}
        >
          {trainer.avatar}
        </div>

        <span style={{ fontWeight: "600" }}>
          {trainer.name}
        </span>
      </div>
    </td>

    <td className="text-muted">
      {trainer.email}
    </td>

    <td>
      <span
        className="badge"
        style={{
          background:
            trainer.status === "Active"
              ? "#dcfce7"
              : "#fee2e2",
          color:
            trainer.status === "Active"
              ? "#166534"
              : "#991b1b",
          fontWeight: "600",
        }}
      >
        {trainer.status}
      </span>
    </td>

    <td className="text-end pe-3">
      <button
        className="btn btn-sm"
        style={{
          background:
            trainer.status === "Active"
              ? "#fee2e2"
              : "#dcfce7",
          color:
            trainer.status === "Active"
              ? "#991b1b"
              : "#166534",
          border: "none",
          borderRadius: "8px",
          fontWeight: "600",
        }}
        onClick={() => toggleTrainerBlock(index)}
      >
        <i
          className={
            trainer.status === "Active"
              ? "bi bi-lock"
              : "bi bi-unlock"
          }
        ></i>{" "}
        {trainer.status === "Active"
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

        <footer className="text-center mt-auto border-top py-3 text-muted" style={{ background:"#fff"}}>
          &copy; 2026 Pedestal Classroom. All rights reserved.
        </footer>
      </div>

    </div>
  </div>
    </>
  );
}

export default AdminTrainers;