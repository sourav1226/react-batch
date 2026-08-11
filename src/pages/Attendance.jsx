import "../css/style.css";
import { useState } from "react";
import Sidebar from "../components/Sidebar";

function Attendance() {
    const [students, setStudents] = useState([
  {
    initials: "AS",
    avatar: "bg-primary",
    name: "Aman Sharma",
    email: "aman.sharma@pedestaltechnoworld.com",
    phone: "+91 98765 43210",
    status: "",
  },
  {
    initials: "DK",
    avatar: "bg-purple",
    name: "Divya Kapoor",
    email: "divya.k@pedestaltechnoworld.com",
    phone: "+91 87654 32109",
    status: "",
  },
  {
    initials: "KM",
    avatar: "bg-success",
    name: "Karan Mehta",
    email: "karan.m@pedestaltechnoworld.com",
    phone: "+91 76543 21098",
    status: "",
  },
  {
    initials: "NP",
    avatar: "bg-warning",
    name: "Neha Patel",
    email: "neha.p@pedestaltechnoworld.com",
    phone: "+91 65432 10987",
    status: "",
  },
  {
    initials: "RV",
    avatar: "bg-danger",
    name: "Rohan Verma",
    email: "rohan.v@pedestaltechnoworld.com",
    phone: "+91 54321 09876",
    status: "",
  },
]);

    const present = students.filter(s => s.status === "P").length;

const absent = students.filter(s => s.status === "A").length;

const late = students.filter(s => s.status === "L").length;

const rate =
students.length === 0
? 0
: Math.round(((present + late * 0.5) / students.length) * 100);

    const handleAttendance = (index, status) => {
  const updated = [...students];
  updated[index].status = status;
  setStudents(updated);
};

    const submitMarks = () => {
    alert("Attendance Saved");
};

const resetRoster = () => {

    setStudents(prev =>
prev.map(student=>({
...student,
status:""
}))
);
};

    return (
        <>
            <div className="container-fluid">
    <div className="row">
      
      
      <Sidebar />

      <div className="col-md-10 col-lg-10 ms-auto px-0 main-content">
        
       
        <nav className="navbar navbar-expand navbar-light navbar-top px-4 py-2">
          <div className="container-fluid">
            <button className="btn d-md-none me-2 p-1 border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebarOffcanvas" style={{ color: "#1e293b", fontSize: "1.2rem"}} >
              <i className="bi bi-list"></i>
            </button>
            
            <span className="navbar-text ms-0 fw-semibold fs-5 text-dark">
              Mark Attendance
            </span>
            
            <ul className="navbar-nav ms-auto align-items-center gap-2">
              <button className="btn btn-primary btn-sm d-flex align-items-center gap-1" onClick={submitMarks}>
                <i className="bi bi-check-lg"></i> Save Attendance
              </button>
            </ul>
          </div>
        </nav>

        <div className="content-wrapper">
          
          <div className="card p-3 mb-3 shadow-sm border-0">
            <div className="row g-2">
              <div className="col-md-5">
                <label className="form-label text-muted small fw-bold">Select Active Batch</label>
                <select className="form-select" id="batch-sel">
                  <option value="react">Batch React Native (Trainer Sourav)</option>
                  <option value="node">Batch Node.js Gateway (Trainer Alex)</option>
                  <option value="laravel">Batch Laravel Framework (Trainer Sarah)</option>
                </select>
              </div>
              <div className="col-md-5">
                <label className="form-label text-muted small fw-bold">Select Session class Date</label>
                <select className="form-select" id="date-sel">
                  <option value="1">01 Jul 2026 - API Integrations (10:00 AM)</option>
                  <option value="2">29 Jun 2026 - Component State (10:00 AM)</option>
                  <option value="3">26 Jun 2026 - Routing (10:00 AM)</option>
                </select>
              </div>
              <div className="col-md-2 d-flex align-items-end">
                <button className="btn btn-light w-100 border text-muted fw-bold" onClick={resetRoster}>
                  Load Roster
                </button>
              </div>
            </div>
          </div>

          <div className="row g-2 mb-3">
            <div className="col-6 col-md-3">
              <div className="card p-2 text-center border-0 shadow-sm" style={{ borderLeft: "4px solid #050978" }}>
                <div className="text-muted small fw-bold">TOTAL STUDENTS</div>
                <div className="fs-4 fw-bold text-dark">{students.length}</div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="card p-2 text-center border-0 shadow-sm" style={{ borderLeft: "4px solid #198754" }}>
                <div className="text-muted small fw-bold">PRESENT</div>
                <div className="fs-4 fw-bold text-success" id="lbl-present">{present}</div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="card p-2 text-center border-0 shadow-sm" style={{ borderLeft: "4px solid #dc3545" }} >
                <div className="text-muted small fw-bold">ABSENT</div>
                <div className="fs-4 fw-bold text-danger" id="lbl-absent">{absent}</div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="card p-2 text-center border-0 shadow-sm" style={{ borderLeft: "4px solid #ffc107" }} >
                <div className="text-muted small fw-bold">ATTENDANCE RATE</div>
                <div className="fs-4 fw-bold text-warning" id="lbl-rate">{rate}%</div>
              </div>
            </div>
          </div>

          <div className="card border-0 shadow-sm">
            <div className="table-responsive-stack">
              <table className="table table-hover mb-0 align-middle">
                <thead className="table-light">
                  <tr>
                    <th className="ps-4" style={{ width: "80px" }}>Roster</th>
                    <th>Student Name</th>
                    <th>Email Address</th>
                    <th>Phone Contact</th>
                    <th className="pe-4 text-center" style={{ width: "220px"}}>Mark Status</th>
                  </tr>
                </thead>
                <tbody className="attendance-table-body">

{students.map((student,index)=>(

<tr className="attendance-row" key={index}>

<td className="ps-4">

<div
className={`rounded-circle d-flex align-items-center justify-content-center fw-bold text-white ${student.avatar}`}
style={{
width:"32px",
height:"32px",
fontSize:"0.75rem"
}}
>

{student.initials}

</div>

</td>

<td className="student-name fw-bold">

{student.name}

</td>

<td>

{student.email}

</td>

<td>

{student.phone}

</td>

<td className="pe-4 text-center">

<div className="d-flex gap-2 justify-content-center">

<button
className={`attendance-circle-btn btn-p ${
student.status==="P"?"active":""
}`}
onClick={()=>handleAttendance(index,"P")}
>
P
</button>

<button
className={`attendance-circle-btn btn-a ${
student.status==="A"?"active":""
}`}
onClick={()=>handleAttendance(index,"A")}
>
A
</button>

<button
className={`attendance-circle-btn btn-l ${
student.status==="L"?"active":""
}`}
onClick={()=>handleAttendance(index,"L")}
>
L
</button>

</div>

</td>

</tr>

))}

</tbody>
              </table>
            </div>
          </div>

        </div>

        <footer className="text-center mt-auto border-top py-3 text-muted" style={{ background: "#fff" }}>
          &copy; 2026 Pedestal Classroom. All rights reserved.
        </footer>
      </div>

    </div>
  </div>

        </>
    );

}

export default Attendance;