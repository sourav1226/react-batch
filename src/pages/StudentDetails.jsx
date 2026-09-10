import React, { useState } from "react";

function StudentDetails({ student, onBack }) {
  const [activeTab, setActiveTab] = useState("Overview");


  return (
    <div className="container-fluid p-4">

      {/* Back button */}
      <button
        className="btn btn-sm mb-3"
        onClick={onBack}
      >
        <i className="bi bi-arrow-left"></i> Back to Students
      </button>

      {/* Student Header */}
      <div
            className="card shadow-sm border-0"
            style={{ borderRadius: "12px" }}
        >
            <div className="card-body p-4">
          <div className="d-flex justify-content-between align-items-start">

            {/* Student information */}
            <div className="d-flex align-items-center gap-3">

              {/* Avatar */}
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "12px",
                  background: "#0891b2",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "28px",
                  fontWeight: "700",
                }}
              >
                {student.avatar}
              </div>

              <div>
                <div className="d-flex align-items-center gap-2">
                  <h3 className="mb-1 fw-bold">
                    {student.name}
                  </h3>

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
                    }}
                  >
                    {student.status}
                  </span>
                </div>

                <div className="text-muted">
                  {student.email}
                </div>

                <div className="text-muted">
                  {student.mobile}
                </div>

                <div className="mt-1">
                  <strong>Student ID:</strong> {student.id}
                </div>
              </div>

            </div>

            {/* Quick actions */}
            <div className="d-flex gap-2">

              <button className="btn btn-sm btn-outline-primary">
                <i className="bi bi-pencil"></i> Edit
              </button>

              <button className="btn btn-sm btn-outline-danger">
                <i className="bi bi-lock"></i> Block
              </button>

              <button className="btn btn-sm btn-outline-secondary">
                <i className="bi bi-bell"></i> Notification
              </button>

              <button className="btn btn-sm btn-outline-dark">
                <i className="bi bi-clock-history"></i> Audit Logs
              </button>

            </div>

          </div>

          {/* Additional information */}
          <hr />

          <div className="row">

            <div className="col-md-3">
              <small className="text-muted">
                Date Joined
              </small>
              <div className="fw-semibold">
                {student.joined}
              </div>
            </div>

            <div className="col-md-3">
              <small className="text-muted">
                Last Login
              </small>
              <div className="fw-semibold">
                {student.lastLogin}
              </div>
            </div>

            <div className="col-md-3">
              <small className="text-muted">
                Registration ID
              </small>
              <div className="fw-semibold">
                {student.id}
              </div>
            </div>

          </div>

        </div>


      </div>
        {/* KPI Cards */}
<div className="row g-3 mt-1">

  <div className="col-md-6 col-lg-3">
    <div className="card shadow-sm border-0 h-100">
      <div className="card-body">
        <div className="text-muted small">Enrolled Courses</div>
        <div className="fs-3 fw-bold mt-2">3</div>
        <div className="small text-muted">Total courses enrolled</div>
      </div>
    </div>
  </div>

  <div className="col-md-6 col-lg-3">
    <div className="card shadow-sm border-0 h-100">
      <div className="card-body">
        <div className="text-muted small">Active Batches</div>
        <div className="fs-3 fw-bold mt-2">2</div>
        <div className="small text-muted">Currently active batches</div>
      </div>
    </div>
  </div>

  <div className="col-md-6 col-lg-3">
    <div className="card shadow-sm border-0 h-100">
      <div className="card-body">
        <div className="text-muted small">Attendance</div>
        <div className="fs-3 fw-bold mt-2">86%</div>
        <div className="small text-muted">Overall attendance</div>
      </div>
    </div>
  </div>

  <div className="col-md-6 col-lg-3">
    <div className="card shadow-sm border-0 h-100">
      <div className="card-body">
        <div className="text-muted small">Course Progress</div>
        <div className="fs-3 fw-bold mt-2">72%</div>
        <div className="small text-muted">Average learning progress</div>
      </div>
    </div>
  </div>

  <div className="col-md-6 col-lg-3">
    <div className="card shadow-sm border-0 h-100">
      <div className="card-body">
        <div className="text-muted small">Total Purchase</div>
        <div className="fs-3 fw-bold mt-2">₹24,999</div>
        <div className="small text-muted">Lifetime purchase value</div>
      </div>
    </div>
  </div>

  <div className="col-md-6 col-lg-3">
    <div className="card shadow-sm border-0 h-100">
      <div className="card-body">
        <div className="text-muted small">Pending Amount</div>
        <div className="fs-3 fw-bold mt-2">₹2,000</div>
        <div className="small text-muted">Outstanding payment</div>
      </div>
    </div>
  </div>

  <div className="col-md-6 col-lg-3">
    <div className="card shadow-sm border-0 h-100">
      <div className="card-body">
        <div className="text-muted small">Certificates</div>
        <div className="fs-3 fw-bold mt-2">2</div>
        <div className="small text-muted">Certificates issued</div>
      </div>
    </div>
  </div>

  <div className="col-md-6 col-lg-3">
    <div className="card shadow-sm border-0 h-100">
      <div className="card-body">
        <div className="text-muted small">Last Activity</div>
        <div className="fs-5 fw-bold mt-3">Today, 10:42 AM</div>
        <div className="small text-muted">Recent student activity</div>
      </div>
    </div>
   </div>

    </div>
      {/* Tabs */}
      <div className="card shadow-sm border-0 mt-4">
        <div className="card-body p-0">

          <div
            className="d-flex flex-wrap border-bottom"
            style={{ overflowX: "auto" }}
          >

            {[
              "Overview",
              "Personal",
              "Courses",
              "Batches",
              "Purchases",
              "Attendance",
              "Performance",
              "Classes",
              "Certificates",
              "Communication",
              "Account",
              "Audit",
            ].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="btn btn-sm rounded-0 px-3 py-3"
                style={{
                  border: "none",
                  borderBottom:
                    activeTab === tab
                      ? "2px solid #4f46e5"
                      : "2px solid transparent",
                  color:
                    activeTab === tab
                      ? "#4f46e5"
                      : "#64748b",
                  fontWeight:
                    activeTab === tab
                      ? "600"
                      : "500",
                  background: "transparent",
                }}
              >
                {tab}
              </button>
            ))}

          </div>

        </div>
      </div>

  {/* Tab Content */}
  {/* Overview */}
<div className="mt-4">
  {activeTab === "Overview" && (
    <div className="row g-3">

      {/* Student Summary */}
      <div className="col-lg-6">
        <div className="card shadow-sm border-0 h-100">
          <div className="card-body p-4">

            <h5 className="fw-bold mb-4">
              Student Summary
            </h5>

            <div className="row g-4">

              <div className="col-6">
                <small className="text-muted">
                  Student ID
                </small>
                <div className="fw-semibold mt-1">
                  {student.id}
                </div>
              </div>

              <div className="col-6">
                <small className="text-muted">
                  Account Status
                </small>
                <div className="fw-semibold mt-1">
                  {student.status}
                </div>
              </div>

              <div className="col-6">
                <small className="text-muted">
                  Enrolled Courses
                </small>
                <div className="fw-semibold mt-1">
                  3 Courses
                </div>
              </div>

              <div className="col-6">
                <small className="text-muted">
                  Active Batches
                </small>
                <div className="fw-semibold mt-1">
                  2 Batches
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>


      {/* Current Course & Batch */}
      <div className="col-lg-6">
        <div className="card shadow-sm border-0 h-100">
          <div className="card-body p-4">

            <h5 className="fw-bold mb-4">
              Current Course & Batch
            </h5>

            <div className="mb-3">
              <small className="text-muted">
                Course
              </small>

              <div className="fw-semibold mt-1">
                MERN Stack Development
              </div>
            </div>

            <div className="mb-3">
              <small className="text-muted">
                Batch
              </small>

              <div className="fw-semibold mt-1">
                MERN Batch 12
              </div>
            </div>

            <div className="d-flex justify-content-between mb-2">
              <small className="text-muted">
                Course Progress
              </small>

              <small className="fw-semibold">
                72%
              </small>
            </div>

            <div
              className="progress"
              style={{ height: "8px" }}
            >
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "72%" }}
              ></div>
            </div>

          </div>
        </div>
      </div>


      {/* Attendance */}
      <div className="col-lg-6">
        <div className="card shadow-sm border-0 h-100">
          <div className="card-body p-4">

            <h5 className="fw-bold mb-4">
              Attendance Summary
            </h5>

            <div className="d-flex justify-content-between mb-2">
              <span className="text-muted">
                Overall Attendance
              </span>

              <strong>
                86%
              </strong>
            </div>

            <div
              className="progress mb-4"
              style={{ height: "8px" }}
            >
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "86%" }}
              ></div>
            </div>

            <div className="row text-center">

              <div className="col-4">
                <div className="fw-bold fs-5">
                  43
                </div>
                <small className="text-muted">
                  Present
                </small>
              </div>

              <div className="col-4">
                <div className="fw-bold fs-5">
                  5
                </div>
                <small className="text-muted">
                  Absent
                </small>
              </div>

              <div className="col-4">
                <div className="fw-bold fs-5">
                  2
                </div>
                <small className="text-muted">
                  Late
                </small>
              </div>

            </div>

          </div>
        </div>
      </div>


      {/* Recent Activity */}
      <div className="col-lg-6">
        <div className="card shadow-sm border-0 h-100">
          <div className="card-body p-4">

            <h5 className="fw-bold mb-4">
              Recent Activity
            </h5>

            <div className="mb-3">
              <div className="fw-semibold">
                Logged in
              </div>

              <small className="text-muted">
                Today, 10:42 AM
              </small>
            </div>

            <div className="mb-3">
              <div className="fw-semibold">
                Attended MERN Stack class
              </div>

              <small className="text-muted">
                Yesterday, 11:00 AM
              </small>
            </div>

            <div>
              <div className="fw-semibold">
                Course progress updated
              </div>

              <small className="text-muted">
                22 Aug 2026
              </small>
            </div>

          </div>
        </div>
      </div>


      {/* Upcoming Classes */}
      <div className="col-lg-6">
        <div className="card shadow-sm border-0 h-100">
          <div className="card-body p-4">

            <h5 className="fw-bold mb-4">
              Upcoming Classes
            </h5>

            <div className="d-flex justify-content-between align-items-center mb-3">
              <div>
                <div className="fw-semibold">
                  React Hooks
                </div>
                <small className="text-muted">
                  MERN Batch 12
                </small>
              </div>

              <small className="fw-semibold">
                Tomorrow, 10:00 AM
              </small>
            </div>

            <div className="d-flex justify-content-between align-items-center">
              <div>
                <div className="fw-semibold">
                  MongoDB
                </div>
                <small className="text-muted">
                  MERN Batch 12
                </small>
              </div>

              <small className="fw-semibold">
                Friday, 2:00 PM
              </small>
            </div>

          </div>
        </div>
      </div>


      {/* Important Alert */}
      <div className="col-lg-6">
        <div className="card shadow-sm border-0 h-100">
          <div className="card-body p-4">

            <h5 className="fw-bold mb-4">
              Important Alerts
            </h5>

            <div className="alert alert-warning mb-0">
              <i className="bi bi-exclamation-triangle me-2"></i>
              Pending payment of ₹2,000 requires attention.
            </div>

          </div>
        </div>
      </div>

    </div>
  )}

{/* Personal Information */}
{activeTab === "Personal" && (
  <div className="card shadow-sm border-0">
    <div className="card-body p-4">

      <h5 className="fw-bold mb-4">
        Personal Information
      </h5>

      <div className="row g-4">

        <div className="col-md-6">
          <small className="text-muted">Full Name</small>
          <div className="fw-semibold mt-1">
            {student.name}
          </div>
        </div>

        <div className="col-md-6">
          <small className="text-muted">Email</small>
          <div className="fw-semibold mt-1">
            {student.email}
          </div>
        </div>

        <div className="col-md-6">
          <small className="text-muted">Mobile</small>
          <div className="fw-semibold mt-1">
            {student.mobile}
          </div>
        </div>

        <div className="col-md-6">
          <small className="text-muted">Alternate Mobile</small>
          <div className="fw-semibold mt-1">
            +91 9876543299
          </div>
        </div>

        <div className="col-md-6">
          <small className="text-muted">Date of Birth</small>
          <div className="fw-semibold mt-1">
            15 March 2004
          </div>
        </div>

        <div className="col-md-6">
          <small className="text-muted">Gender</small>
          <div className="fw-semibold mt-1">
            Male
          </div>
        </div>

        <div className="col-md-6">
          <small className="text-muted">Address</small>
          <div className="fw-semibold mt-1">
            24, Shastri Nagar
          </div>
        </div>

        <div className="col-md-6">
          <small className="text-muted">City</small>
          <div className="fw-semibold mt-1">
            Jaipur
          </div>
        </div>

        <div className="col-md-6">
          <small className="text-muted">State</small>
          <div className="fw-semibold mt-1">
            Rajasthan
          </div>
        </div>

        <div className="col-md-6">
          <small className="text-muted">PIN</small>
          <div className="fw-semibold mt-1">
            302016
          </div>
        </div>

        <div className="col-md-6">
          <small className="text-muted">
            College / Qualification
          </small>
          <div className="fw-semibold mt-1">
            B.Tech Computer Science
          </div>
        </div>

        <div className="col-md-6">
          <small className="text-muted">
            Emergency Contact
          </small>
          <div className="fw-semibold mt-1">
            +91 9876543215
          </div>
        </div>

        <div className="col-md-6">
          <small className="text-muted">
            Profile Created
          </small>
          <div className="fw-semibold mt-1">
            {student.joined}
          </div>
        </div>

        <div className="col-md-6">
          <small className="text-muted">
            Last Updated
          </small>
          <div className="fw-semibold mt-1">
            25 Aug 2026
          </div>
        </div>

      </div>

    </div>
  </div>
)}

{/* Courses & Enrollment */}
{activeTab === "Courses" && (
  <div className="card shadow-sm border-0">
    <div className="card-body p-4">

      <h5 className="fw-bold mb-4">
        Courses & Enrollment
      </h5>

      <div className="table-responsive">
        <table className="table table-hover align-middle mb-0">

          <thead style={{ background: "#f8fafc" }}>
            <tr>
              <th>Course</th>
              <th>Type</th>
              <th>Enrollment Date</th>
              <th>Status</th>
              <th>Trainer</th>
              <th>Batch</th>
              <th>Progress</th>
              <th>Completion Date</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td className="fw-semibold">
                MERN Stack Development
              </td>
              <td>Full Time</td>
              <td>12 Jan 2026</td>

              <td>
                <span
                  className="badge"
                  style={{
                    background: "#dcfce7",
                    color: "#166534",
                  }}
                >
                  Active
                </span>
              </td>

              <td>Rahul Sharma</td>
              <td>MERN Batch 12</td>

              <td style={{ minWidth: "130px" }}>
                <div className="d-flex justify-content-between mb-1">
                  <small>72%</small>
                </div>

                <div
                  className="progress"
                  style={{ height: "6px" }}
                >
                  <div
                    className="progress-bar"
                    style={{ width: "72%" }}
                  ></div>
                </div>
              </td>

              <td>—</td>
            </tr>


            <tr>
              <td className="fw-semibold">
                React Advanced
              </td>
              <td>Course</td>
              <td>15 Feb 2026</td>

              <td>
                <span
                  className="badge"
                  style={{
                    background: "#dcfce7",
                    color: "#166534",
                  }}
                >
                  Active
                </span>
              </td>

              <td>Priya Mehta</td>
              <td>React Batch 05</td>

              <td style={{ minWidth: "130px" }}>
                <div className="d-flex justify-content-between mb-1">
                  <small>64%</small>
                </div>

                <div
                  className="progress"
                  style={{ height: "6px" }}
                >
                  <div
                    className="progress-bar"
                    style={{ width: "64%" }}
                  ></div>
                </div>
              </td>

              <td>—</td>
            </tr>


            <tr>
              <td className="fw-semibold">
                Java Fundamentals
              </td>
              <td>Course</td>
              <td>10 Mar 2026</td>

              <td>
                <span
                  className="badge"
                  style={{
                    background: "#e2e8f0",
                    color: "#475569",
                  }}
                >
                  Completed
                </span>
              </td>

              <td>Amit Verma</td>
              <td>Java Batch 03</td>

              <td style={{ minWidth: "130px" }}>
                <div className="d-flex justify-content-between mb-1">
                  <small>100%</small>
                </div>

                <div
                  className="progress"
                  style={{ height: "6px" }}
                >
                  <div
                    className="progress-bar"
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </td>

              <td>20 Jul 2026</td>
            </tr>

          </tbody>

        </table>
      </div>

    </div>
  </div>
)}

{/* Batch Details */}
{activeTab === "Batches" && (
  <div className="card shadow-sm border-0">
    <div className="card-body p-4">

      <h5 className="fw-bold mb-4">
        Batch Details
      </h5>

      <div className="table-responsive">
        <table className="table table-hover align-middle mb-0">

          <thead style={{ background: "#f8fafc" }}>
            <tr>
              <th>Batch Name / Code</th>
              <th>Trainer</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Class Schedule</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            {/* Current Batch */}
            <tr>
              <td>
                <div className="fw-semibold">
                  MERN Batch 12
                </div>
                <small className="text-muted">
                  MERN-12
                </small>
              </td>

              <td>Rahul Sharma</td>

              <td>12 Jan 2026</td>

              <td>30 Sep 2026</td>

              <td>
                Mon, Wed, Fri
                <br />
                <small className="text-muted">
                  10:00 AM - 12:00 PM
                </small>
              </td>

              <td>
                <span
                  className="badge"
                  style={{
                    background: "#dcfce7",
                    color: "#166534",
                  }}
                >
                  Active
                </span>
              </td>
            </tr>

            {/* Previous Batch */}
            <tr>
              <td>
                <div className="fw-semibold">
                  Java Batch 03
                </div>
                <small className="text-muted">
                  JAVA-03
                </small>
              </td>

              <td>Amit Verma</td>

              <td>10 Mar 2026</td>

              <td>20 Jul 2026</td>

              <td>
                Tue, Thu
                <br />
                <small className="text-muted">
                  2:00 PM - 4:00 PM
                </small>
              </td>

              <td>
                <span
                  className="badge"
                  style={{
                    background: "#e2e8f0",
                    color: "#475569",
                  }}
                >
                  Completed
                </span>
              </td>
            </tr>

          </tbody>

        </table>
      </div>

    </div>
  </div>
)}

{/* Purchase History */}
{activeTab === "Purchases" && (
  <div className="card shadow-sm border-0">
    <div className="card-body p-4">

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h5 className="fw-bold mb-0">
          Purchase History
        </h5>

        <span
          className="badge"
          style={{
            background: "#eef2ff",
            color: "#4f46e5",
          }}
        >
          3 Purchases
        </span>
      </div>

      <div className="table-responsive">
        <table className="table table-hover align-middle mb-0">

          <thead style={{ background: "#f8fafc" }}>
            <tr>
              <th>Order / Transaction ID</th>
              <th>Date & Time</th>
              <th>Course / Product</th>
              <th>Amount</th>
              <th>Discount</th>
              <th>Final Amount</th>
              <th>Payment Method</th>
              <th>Payment Status</th>
              <th>Invoice</th>
              <th>Refund / Cancellation</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>
                <div className="fw-semibold">ORD-1001</div>
                <small className="text-muted">TXN-78901</small>
              </td>

              <td>
                12 Jan 2026
                <br />
                <small className="text-muted">10:30 AM</small>
              </td>

              <td className="fw-semibold">
                MERN Stack Development
              </td>

              <td>₹25,999</td>

              <td>₹1,000</td>

              <td className="fw-semibold">
                ₹24,999
              </td>

              <td>UPI</td>

              <td>
                <span
                  className="badge"
                  style={{
                    background: "#dcfce7",
                    color: "#166534",
                  }}
                >
                  Paid
                </span>
              </td>

              <td>
                <button className="btn btn-sm btn-outline-primary">
                  <i className="bi bi-receipt"></i> View
                </button>
              </td>

              <td>
                <span className="text-muted">
                  —
                </span>
              </td>
            </tr>


            <tr>
              <td>
                <div className="fw-semibold">ORD-1002</div>
                <small className="text-muted">TXN-78945</small>
              </td>

              <td>
                15 Feb 2026
                <br />
                <small className="text-muted">02:15 PM</small>
              </td>

              <td className="fw-semibold">
                React Advanced
              </td>

              <td>₹8,000</td>

              <td>₹500</td>

              <td className="fw-semibold">
                ₹7,500
              </td>

              <td>Card</td>

              <td>
                <span
                  className="badge"
                  style={{
                    background: "#dcfce7",
                    color: "#166534",
                  }}
                >
                  Paid
                </span>
              </td>

              <td>
                <button className="btn btn-sm btn-outline-primary">
                  <i className="bi bi-receipt"></i> View
                </button>
              </td>

              <td>
                <span className="text-muted">
                  —
                </span>
              </td>
            </tr>


            <tr>
              <td>
                <div className="fw-semibold">ORD-1003</div>
                <small className="text-muted">TXN-79012</small>
              </td>

              <td>
                10 Mar 2026
                <br />
                <small className="text-muted">11:45 AM</small>
              </td>

              <td className="fw-semibold">
                Java Fundamentals
              </td>

              <td>₹5,000</td>

              <td>₹1,000</td>

              <td className="fw-semibold">
                ₹4,000
              </td>

              <td>UPI</td>

              <td>
                <span
                  className="badge"
                  style={{
                    background: "#fef3c7",
                    color: "#92400e",
                  }}
                >
                  Pending
                </span>
              </td>

              <td>
                <button className="btn btn-sm btn-outline-secondary">
                  <i className="bi bi-receipt"></i> View
                </button>
              </td>

              <td>
                <span className="text-muted">
                  —
                </span>
              </td>
            </tr>

          </tbody>

        </table>
      </div>

      {/* Payment Summary */}
      <div className="row g-3 mt-4">

        <div className="col-md-4">
          <div className="p-3 rounded" style={{ background: "#f8fafc" }}>
            <small className="text-muted">
              Total Paid
            </small>
            <div className="fw-bold fs-5 mt-1">
              ₹32,499
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="p-3 rounded" style={{ background: "#f8fafc" }}>
            <small className="text-muted">
              Pending
            </small>
            <div className="fw-bold fs-5 mt-1">
              ₹4,000
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="p-3 rounded" style={{ background: "#f8fafc" }}>
            <small className="text-muted">
              Total Discount
            </small>
            <div className="fw-bold fs-5 mt-1">
              ₹2,500
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
)}

{/* Attendance */}
{activeTab === "Attendance" && (
  <div>

    {/* Attendance Summary Cards */}
    <div className="row g-3 mb-4">

      <div className="col-md-3">
        <div className="card shadow-sm border-0 h-100">
          <div className="card-body">
            <small className="text-muted">
              Overall Attendance
            </small>
            <div className="fs-3 fw-bold mt-2">
              86%
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-3">
        <div className="card shadow-sm border-0 h-100">
          <div className="card-body">
            <small className="text-muted">
              Present
            </small>
            <div className="fs-3 fw-bold mt-2">
              43
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-3">
        <div className="card shadow-sm border-0 h-100">
          <div className="card-body">
            <small className="text-muted">
              Absent
            </small>
            <div className="fs-3 fw-bold mt-2">
              5
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-3">
        <div className="card shadow-sm border-0 h-100">
          <div className="card-body">
            <small className="text-muted">
              Late / Leave
            </small>
            <div className="fs-3 fw-bold mt-2">
              2 / 1
            </div>
          </div>
        </div>
      </div>

    </div>


    {/* Attendance Warning */}
    <div className="alert alert-success d-flex align-items-center mb-4">
      <i className="bi bi-check-circle me-2"></i>

      <div>
        <strong>Good Attendance</strong>
        <div className="small">
          Overall attendance is above the 75% recommended threshold.
        </div>
      </div>
    </div>


    {/* Date-wise Attendance */}
    <div className="card shadow-sm border-0">

      <div className="card-body p-4">

        <div className="d-flex justify-content-between align-items-center mb-4">
          <h5 className="fw-bold mb-0">
            Date-wise Attendance
          </h5>

          <select
            className="form-select form-select-sm"
            style={{ width: "150px" }}
          >
            <option>August 2026</option>
            <option>July 2026</option>
            <option>June 2026</option>
          </select>
        </div>


        <div className="table-responsive">

          <table className="table table-hover align-middle mb-0">

            <thead style={{ background: "#f8fafc" }}>
              <tr>
                <th>Date</th>
                <th>Course</th>
                <th>Batch</th>
                <th>Trainer</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>28 Aug 2026</td>
                <td>MERN Stack</td>
                <td>MERN-12</td>
                <td>Rahul Sharma</td>
                <td>
                  <span
                    className="badge"
                    style={{
                      background: "#dcfce7",
                      color: "#166534",
                    }}
                  >
                    Present
                  </span>
                </td>
              </tr>

              <tr>
                <td>27 Aug 2026</td>
                <td>React Advanced</td>
                <td>React-05</td>
                <td>Priya Mehta</td>
                <td>
                  <span
                    className="badge"
                    style={{
                      background: "#dcfce7",
                      color: "#166534",
                    }}
                  >
                    Present
                  </span>
                </td>
              </tr>

              <tr>
                <td>26 Aug 2026</td>
                <td>MERN Stack</td>
                <td>MERN-12</td>
                <td>Rahul Sharma</td>
                <td>
                  <span
                    className="badge"
                    style={{
                      background: "#fee2e2",
                      color: "#991b1b",
                    }}
                  >
                    Absent
                  </span>
                </td>
              </tr>

              <tr>
                <td>25 Aug 2026</td>
                <td>React Advanced</td>
                <td>React-05</td>
                <td>Priya Mehta</td>
                <td>
                  <span
                    className="badge"
                    style={{
                      background: "#fef3c7",
                      color: "#92400e",
                    }}
                  >
                    Late
                  </span>
                </td>
              </tr>

              <tr>
                <td>22 Aug 2026</td>
                <td>MERN Stack</td>
                <td>MERN-12</td>
                <td>Rahul Sharma</td>
                <td>
                  <span
                    className="badge"
                    style={{
                      background: "#dcfce7",
                      color: "#166534",
                    }}
                  >
                    Present
                  </span>
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>
    </div>

  </div>
)}

{/* Academic / Performance */}
{activeTab === "Performance" && (
  <div>

    {/* Performance Summary */}
    <div className="row g-3 mb-4">

      <div className="col-md-3">
        <div className="card shadow-sm border-0 h-100">
          <div className="card-body">
            <small className="text-muted">
              Assignments Submitted
            </small>
            <div className="fs-3 fw-bold mt-2">
              18
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-3">
        <div className="card shadow-sm border-0 h-100">
          <div className="card-body">
            <small className="text-muted">
              Assignments Pending
            </small>
            <div className="fs-3 fw-bold mt-2">
              2
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-3">
        <div className="card shadow-sm border-0 h-100">
          <div className="card-body">
            <small className="text-muted">
              Average Score
            </small>
            <div className="fs-3 fw-bold mt-2">
              82%
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-3">
        <div className="card shadow-sm border-0 h-100">
          <div className="card-body">
            <small className="text-muted">
              Highest Score
            </small>
            <div className="fs-3 fw-bold mt-2">
              96%
            </div>
          </div>
        </div>
      </div>

    </div>


    {/* Test / Quiz Scores */}
    <div className="card shadow-sm border-0 mb-4">

      <div className="card-body p-4">

        <h5 className="fw-bold mb-4">
          Quiz & Test Scores
        </h5>

        <div className="table-responsive">

          <table className="table table-hover align-middle mb-0">

            <thead style={{ background: "#f8fafc" }}>
              <tr>
                <th>Test / Quiz</th>
                <th>Course</th>
                <th>Date</th>
                <th>Score</th>
                <th>Result</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td className="fw-semibold">
                  React Fundamentals Quiz
                </td>
                <td>MERN Stack</td>
                <td>20 Aug 2026</td>
                <td>92%</td>
                <td>
                  <span
                    className="badge"
                    style={{
                      background: "#dcfce7",
                      color: "#166534",
                    }}
                  >
                    Passed
                  </span>
                </td>
              </tr>

              <tr>
                <td className="fw-semibold">
                  JavaScript Assessment
                </td>
                <td>MERN Stack</td>
                <td>12 Aug 2026</td>
                <td>78%</td>
                <td>
                  <span
                    className="badge"
                    style={{
                      background: "#dcfce7",
                      color: "#166534",
                    }}
                  >
                    Passed
                  </span>
                </td>
              </tr>

              <tr>
                <td className="fw-semibold">
                  MongoDB Test
                </td>
                <td>MERN Stack</td>
                <td>05 Aug 2026</td>
                <td>68%</td>
                <td>
                  <span
                    className="badge"
                    style={{
                      background: "#fef3c7",
                      color: "#92400e",
                    }}
                  >
                    Needs Improvement
                  </span>
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>
    </div>


    <div className="row g-3">

      {/* Course / Module Completion */}
      <div className="col-lg-7">

        <div className="card shadow-sm border-0 h-100">

          <div className="card-body p-4">

            <h5 className="fw-bold mb-4">
              Course & Module Completion
            </h5>

            <div className="mb-4">

              <div className="d-flex justify-content-between mb-2">
                <span className="fw-semibold">
                  MERN Stack Development
                </span>

                <span className="text-muted">
                  72%
                </span>
              </div>

              <div
                className="progress"
                style={{ height: "8px" }}
              >
                <div
                  className="progress-bar"
                  style={{ width: "72%" }}
                ></div>
              </div>

            </div>


            <div className="mb-4">

              <div className="d-flex justify-content-between mb-2">
                <span className="fw-semibold">
                  React Advanced
                </span>

                <span className="text-muted">
                  64%
                </span>
              </div>

              <div
                className="progress"
                style={{ height: "8px" }}
              >
                <div
                  className="progress-bar"
                  style={{ width: "64%" }}
                ></div>
              </div>

            </div>


            <div>

              <div className="d-flex justify-content-between mb-2">
                <span className="fw-semibold">
                  Java Fundamentals
                </span>

                <span className="text-muted">
                  100%
                </span>
              </div>

              <div
                className="progress"
                style={{ height: "8px" }}
              >
                <div
                  className="progress-bar"
                  style={{ width: "100%" }}
                ></div>
              </div>

            </div>

          </div>
        </div>

      </div>


      {/* Trainer Remarks */}
      <div className="col-lg-5">

        <div className="card shadow-sm border-0 h-100">

          <div className="card-body p-4">

            <h5 className="fw-bold mb-4">
              Trainer Remarks
            </h5>

            <div
              className="p-3 rounded"
              style={{ background: "#f8fafc" }}
            >
              <p className="mb-2">
                Aman is performing well and consistently
                participates in class discussions.
              </p>

              <small className="text-muted">
                — Rahul Sharma, Trainer
              </small>
            </div>

          </div>
        </div>

      </div>

    </div>

  </div>
)}

{/* Classes & Schedule */}
{activeTab === "Classes" && (
  <div>

    {/* Class Summary */}
    <div className="row g-3 mb-4">

      <div className="col-md-4">
        <div className="card shadow-sm border-0 h-100">
          <div className="card-body">
            <small className="text-muted">
              Upcoming Classes
            </small>
            <div className="fs-3 fw-bold mt-2">
              4
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card shadow-sm border-0 h-100">
          <div className="card-body">
            <small className="text-muted">
              Completed Classes
            </small>
            <div className="fs-3 fw-bold mt-2">
              38
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card shadow-sm border-0 h-100">
          <div className="card-body">
            <small className="text-muted">
              Missed Classes
            </small>
            <div className="fs-3 fw-bold mt-2">
              3
            </div>
          </div>
        </div>
      </div>

    </div>


    {/* Classes Table */}
    <div className="card shadow-sm border-0">

      <div className="card-body p-4">

        <h5 className="fw-bold mb-4">
          Class Schedule
        </h5>

        <div className="table-responsive">

          <table className="table table-hover align-middle mb-0">

            <thead style={{ background: "#f8fafc" }}>
              <tr>
                <th>Date & Time</th>
                <th>Subject / Module</th>
                <th>Course</th>
                <th>Trainer</th>
                <th>Status</th>
                <th>Meeting</th>
                <th>Recording</th>
              </tr>
            </thead>

            <tbody>

              {/* Upcoming */}
              <tr>
                <td>
                  Tomorrow
                  <br />
                  <small className="text-muted">
                    10:00 AM
                  </small>
                </td>

                <td className="fw-semibold">
                  React Hooks
                </td>

                <td>MERN Stack</td>

                <td>Rahul Sharma</td>

                <td>
                  <span
                    className="badge"
                    style={{
                      background: "#dbeafe",
                      color: "#1d4ed8",
                    }}
                  >
                    Upcoming
                  </span>
                </td>

                <td>
                  <button className="btn btn-sm btn-outline-primary">
                    <i className="bi bi-camera-video"></i> Join
                  </button>
                </td>

                <td>
                  <span className="text-muted">
                    —
                  </span>
                </td>
              </tr>


              {/* Upcoming */}
              <tr>
                <td>
                  02 Sep 2026
                  <br />
                  <small className="text-muted">
                    02:00 PM
                  </small>
                </td>

                <td className="fw-semibold">
                  MongoDB
                </td>

                <td>MERN Stack</td>

                <td>Rahul Sharma</td>

                <td>
                  <span
                    className="badge"
                    style={{
                      background: "#dbeafe",
                      color: "#1d4ed8",
                    }}
                  >
                    Upcoming
                  </span>
                </td>

                <td>
                  <button className="btn btn-sm btn-outline-primary">
                    <i className="bi bi-camera-video"></i> Join
                  </button>
                </td>

                <td>
                  <span className="text-muted">
                    —
                  </span>
                </td>
              </tr>


              {/* Completed */}
              <tr>
                <td>
                  28 Aug 2026
                  <br />
                  <small className="text-muted">
                    11:00 AM
                  </small>
                </td>

                <td className="fw-semibold">
                  Express.js
                </td>

                <td>MERN Stack</td>

                <td>Rahul Sharma</td>

                <td>
                  <span
                    className="badge"
                    style={{
                      background: "#dcfce7",
                      color: "#166534",
                    }}
                  >
                    Completed
                  </span>
                </td>

                <td>
                  <span className="text-muted">
                    Ended
                  </span>
                </td>

                <td>
                  <button className="btn btn-sm btn-outline-secondary">
                    <i className="bi bi-play-circle"></i> View
                  </button>
                </td>
              </tr>


              {/* Missed */}
              <tr>
                <td>
                  26 Aug 2026
                  <br />
                  <small className="text-muted">
                    10:00 AM
                  </small>
                </td>

                <td className="fw-semibold">
                  Node.js
                </td>

                <td>MERN Stack</td>

                <td>Rahul Sharma</td>

                <td>
                  <span
                    className="badge"
                    style={{
                      background: "#fee2e2",
                      color: "#991b1b",
                    }}
                  >
                    Missed
                  </span>
                </td>

                <td>
                  <span className="text-muted">
                    —
                  </span>
                </td>

                <td>
                  <span className="text-muted">
                    —
                  </span>
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>
    </div>

  </div>
)}

{/* Certificates */}
{activeTab === "Certificates" && (
  <div className="card shadow-sm border-0">

    <div className="card-body p-4">

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h5 className="fw-bold mb-0">
          Certificates
        </h5>

        <span
          className="badge"
          style={{
            background: "#eef2ff",
            color: "#4f46e5",
          }}
        >
          2 Certificates
        </span>
      </div>

      <div className="table-responsive">

        <table className="table table-hover align-middle mb-0">

          <thead style={{ background: "#f8fafc" }}>
            <tr>
              <th>Certificate Name</th>
              <th>Course</th>
              <th>Issue Date</th>
              <th>Certificate ID</th>
              <th>Verification Status</th>
              <th>Certificate</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td className="fw-semibold">
                MERN Stack Development
              </td>

              <td>
                MERN Stack Development
              </td>

              <td>
                20 Aug 2026
              </td>

              <td>
                CERT-MERN-001
              </td>

              <td>
                <span
                  className="badge"
                  style={{
                    background: "#dcfce7",
                    color: "#166534",
                  }}
                >
                  Verified
                </span>
              </td>

              <td>
                <button className="btn btn-sm btn-outline-primary">
                  <i className="bi bi-eye"></i> View
                </button>

                <button className="btn btn-sm btn-outline-secondary ms-2">
                  <i className="bi bi-download"></i> Download
                </button>
              </td>
            </tr>


            <tr>
              <td className="fw-semibold">
                Java Fundamentals
              </td>

              <td>
                Java Fundamentals
              </td>

              <td>
                20 Jul 2026
              </td>

              <td>
                CERT-JAVA-001
              </td>

              <td>
                <span
                  className="badge"
                  style={{
                    background: "#dcfce7",
                    color: "#166534",
                  }}
                >
                  Verified
                </span>
              </td>

              <td>
                <button className="btn btn-sm btn-outline-primary">
                  <i className="bi bi-eye"></i> View
                </button>

                <button className="btn btn-sm btn-outline-secondary ms-2">
                  <i className="bi bi-download"></i> Download
                </button>
              </td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  </div>
)}

{/* Communication */}
{activeTab === "Communication" && (
  <div>

    {/* Communication Summary */}
    <div className="row g-3 mb-4">

      <div className="col-md-4">
        <div className="card shadow-sm border-0 h-100">
          <div className="card-body">
            <small className="text-muted">
              Notifications Sent
            </small>
            <div className="fs-3 fw-bold mt-2">
              12
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card shadow-sm border-0 h-100">
          <div className="card-body">
            <small className="text-muted">
              Announcements Received
            </small>
            <div className="fs-3 fw-bold mt-2">
              8
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card shadow-sm border-0 h-100">
          <div className="card-body">
            <small className="text-muted">
              Last Communication
            </small>
            <div className="fs-5 fw-bold mt-3">
              28 Aug 2026
            </div>
          </div>
        </div>
      </div>

    </div>


    {/* Communication History */}
    <div className="card shadow-sm border-0 mb-4">

      <div className="card-body p-4">

        <h5 className="fw-bold mb-4">
          Communication History
        </h5>

        <div className="table-responsive">

          <table className="table table-hover align-middle mb-0">

            <thead style={{ background: "#f8fafc" }}>
              <tr>
                <th>Date</th>
                <th>Type</th>
                <th>Subject / Message</th>
                <th>Channel</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>28 Aug 2026</td>

                <td className="fw-semibold">
                  Notification
                </td>

                <td>
                  Upcoming React class reminder
                </td>

                <td>
                  In-App
                </td>

                <td>
                  <span
                    className="badge"
                    style={{
                      background: "#dcfce7",
                      color: "#166534",
                    }}
                  >
                    Delivered
                  </span>
                </td>
              </tr>

              <tr>
                <td>25 Aug 2026</td>

                <td className="fw-semibold">
                  Email
                </td>

                <td>
                  Course progress update
                </td>

                <td>
                  Email
                </td>

                <td>
                  <span
                    className="badge"
                    style={{
                      background: "#dcfce7",
                      color: "#166534",
                    }}
                  >
                    Sent
                  </span>
                </td>
              </tr>

              <tr>
                <td>20 Aug 2026</td>

                <td className="fw-semibold">
                  Announcement
                </td>

                <td>
                  Independence Day holiday schedule
                </td>

                <td>
                  In-App
                </td>

                <td>
                  <span
                    className="badge"
                    style={{
                      background: "#dbeafe",
                      color: "#1d4ed8",
                    }}
                  >
                    Received
                  </span>
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>
    </div>


    {/* Counselling / Follow-up Notes */}
    <div className="card shadow-sm border-0">

      <div className="card-body p-4">

        <h5 className="fw-bold mb-4">
          Counselling / Follow-up Notes
        </h5>

        <div
          className="p-3 rounded"
          style={{ background: "#f8fafc" }}
        >

          <div className="fw-semibold mb-1">
            22 Aug 2026
          </div>

          <p className="mb-1">
            Discussed course progress and upcoming
            assessment. Student is progressing well.
          </p>

          <small className="text-muted">
            Added by: Rahul Sharma
          </small>

        </div>

      </div>
    </div>

  </div>
)}

{/* Account & Security */}
{activeTab === "Account" && (
  <div>

    {/* Account Overview */}
    <div className="card shadow-sm border-0 mb-4">
      <div className="card-body p-4">

        <h5 className="fw-bold mb-4">
          Account & Security
        </h5>

        <div className="row g-4">

          <div className="col-md-4">
            <small className="text-muted">
              Account Status
            </small>
            <div className="mt-1">
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
                }}
              >
                {student.status}
              </span>
            </div>
          </div>

          <div className="col-md-4">
            <small className="text-muted">
              Account Created
            </small>
            <div className="fw-semibold mt-1">
              {student.joined}
            </div>
          </div>

          <div className="col-md-4">
            <small className="text-muted">
              Last Login
            </small>
            <div className="fw-semibold mt-1">
              {student.lastLogin}
            </div>
          </div>

          <div className="col-md-4">
            <small className="text-muted">
              Password Reset
            </small>
            <div className="fw-semibold mt-1">
              No recent reset
            </div>
          </div>

          <div className="col-md-4">
            <small className="text-muted">
              Last Password Reset
            </small>
            <div className="fw-semibold mt-1">
              10 Jul 2026
            </div>
          </div>

          <div className="col-md-4">
            <small className="text-muted">
              Registration ID
            </small>
            <div className="fw-semibold mt-1">
              {student.id}
            </div>
          </div>

        </div>

      </div>
    </div>


    {/* Login / Device History */}
    <div className="card shadow-sm border-0 mb-4">
      <div className="card-body p-4">

        <h5 className="fw-bold mb-4">
          Login / Device History
        </h5>

        <div className="table-responsive">

          <table className="table table-hover align-middle mb-0">

            <thead style={{ background: "#f8fafc" }}>
              <tr>
                <th>Date & Time</th>
                <th>Device</th>
                <th>Browser</th>
                <th>Location</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>
                  31 Aug 2026
                  <br />
                  <small className="text-muted">
                    10:42 AM
                  </small>
                </td>

                <td>
                  Windows PC
                </td>

                <td>
                  Chrome
                </td>

                <td>
                  Jaipur
                </td>

                <td>
                  <span
                    className="badge"
                    style={{
                      background: "#dcfce7",
                      color: "#166534",
                    }}
                  >
                    Successful
                  </span>
                </td>
              </tr>

              <tr>
                <td>
                  29 Aug 2026
                  <br />
                  <small className="text-muted">
                    09:15 AM
                  </small>
                </td>

                <td>
                  Android
                </td>

                <td>
                  Chrome Mobile
                </td>

                <td>
                  Jaipur
                </td>

                <td>
                  <span
                    className="badge"
                    style={{
                      background: "#dcfce7",
                      color: "#166534",
                    }}
                  >
                    Successful
                  </span>
                </td>
              </tr>

              <tr>
                <td>
                  25 Aug 2026
                  <br />
                  <small className="text-muted">
                    08:40 PM
                  </small>
                </td>

                <td>
                  Windows PC
                </td>

                <td>
                  Edge
                </td>

                <td>
                  Jaipur
                </td>

                <td>
                  <span
                    className="badge"
                    style={{
                      background: "#fee2e2",
                      color: "#991b1b",
                    }}
                  >
                    Failed
                  </span>
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>
    </div>


    {/* Block Information */}
    <div className="card shadow-sm border-0">
      <div className="card-body p-4">

        <h5 className="fw-bold mb-4">
          Block Information
        </h5>

        {student.status === "Blocked" ? (
          <div className="row g-4">

            <div className="col-md-4">
              <small className="text-muted">
                Blocked By
              </small>
              <div className="fw-semibold mt-1">
                Admin
              </div>
            </div>

            <div className="col-md-4">
              <small className="text-muted">
                Blocked Date
              </small>
              <div className="fw-semibold mt-1">
                20 Aug 2026
              </div>
            </div>

            <div className="col-md-4">
              <small className="text-muted">
                Reason
              </small>
              <div className="fw-semibold mt-1">
                Administrative action
              </div>
            </div>

          </div>
        ) : (
          <div className="text-muted">
            This account is currently active and has not been blocked.
          </div>
        )}

      </div>
    </div>

  </div>
)}

{/* Audit / Activity */}
{activeTab === "Audit" && (
  <div className="card shadow-sm border-0">

    <div className="card-body p-4">

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h5 className="fw-bold mb-0">
          Audit / Activity
        </h5>

        <span
          className="badge"
          style={{
            background: "#eef2ff",
            color: "#4f46e5",
          }}
        >
          Recent Activity
        </span>
      </div>

      <div className="table-responsive">

        <table className="table table-hover align-middle mb-0">

          <thead style={{ background: "#f8fafc" }}>
            <tr>
              <th>Date & Time</th>
              <th>Activity</th>
              <th>Details</th>
              <th>Performed By</th>
              <th>Type</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>
                31 Aug 2026
                <br />
                <small className="text-muted">
                  10:42 AM
                </small>
              </td>

              <td className="fw-semibold">
                Profile Update
              </td>

              <td>
                Student mobile number updated
              </td>

              <td>
                Admin
              </td>

              <td>
                <span
                  className="badge"
                  style={{
                    background: "#dbeafe",
                    color: "#1d4ed8",
                  }}
                >
                  Admin Action
                </span>
              </td>
            </tr>


            <tr>
              <td>
                28 Aug 2026
                <br />
                <small className="text-muted">
                  02:15 PM
                </small>
              </td>

              <td className="fw-semibold">
                Payment Event
              </td>

              <td>
                Payment of ₹7,500 received
              </td>

              <td>
                System
              </td>

              <td>
                <span
                  className="badge"
                  style={{
                    background: "#dcfce7",
                    color: "#166534",
                  }}
                >
                  Payment
                </span>
              </td>
            </tr>


            <tr>
              <td>
                26 Aug 2026
                <br />
                <small className="text-muted">
                  10:05 AM
                </small>
              </td>

              <td className="fw-semibold">
                Attendance Change
              </td>

              <td>
                Attendance marked as Absent
              </td>

              <td>
                Rahul Sharma
              </td>

              <td>
                <span
                  className="badge"
                  style={{
                    background: "#fef3c7",
                    color: "#92400e",
                  }}
                >
                  Attendance
                </span>
              </td>
            </tr>


            <tr>
              <td>
                20 Aug 2026
                <br />
                <small className="text-muted">
                  04:30 PM
                </small>
              </td>

              <td className="fw-semibold">
                Batch Change
              </td>

              <td>
                Student assigned to MERN Batch 12
              </td>

              <td>
                Admin
              </td>

              <td>
                <span
                  className="badge"
                  style={{
                    background: "#e0e7ff",
                    color: "#4338ca",
                  }}
                >
                  Enrollment
                </span>
              </td>
            </tr>


            <tr>
              <td>
                18 Aug 2026
                <br />
                <small className="text-muted">
                  11:20 AM
                </small>
              </td>

              <td className="fw-semibold">
                Course Enrollment
              </td>

              <td>
                Student enrolled in React Advanced
              </td>

              <td>
                Admin
              </td>

              <td>
                <span
                  className="badge"
                  style={{
                    background: "#e0e7ff",
                    color: "#4338ca",
                  }}
                >
                  Enrollment
                </span>
              </td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  </div>
)}
</div>
    </div>
  );
}

export default StudentDetails;