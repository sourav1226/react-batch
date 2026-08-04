import React, { useState } from 'react'
import "./Notifications.css"
function Notifications() {
    const [allRead,setAllRead]=useState(false);
    const [showToast, setShowToast] = useState(false);
  function markAllNotificationsRead() {
    setAllRead(true);
    setShowToast(true);

    setTimeout(() => {
        setShowToast(false);
    }, 3500);
}


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
          <a className="nav-link" href="notices.html">
            <i className="bi bi-megaphone"></i> Notice Board
          </a>
          <a className="nav-link" href="study-materials.html">
            <i className="bi bi-file-earmark-text"></i> Study Materials
          </a>
          <a className="nav-link active" href="notifications.html">
            <i className="bi bi-bell"></i> Notifications
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
          <a className="nav-link" href="notices.html" data-bs-dismiss="offcanvas">
            <i className="bi bi-megaphone"></i> Notice Board
          </a>
          <a className="nav-link" href="study-materials.html" data-bs-dismiss="offcanvas">
            <i className="bi bi-file-earmark-text"></i> Study Materials
          </a>
          <a className="nav-link active" href="notifications.html" data-bs-dismiss="offcanvas">
            <i className="bi bi-bell"></i> Notifications
          </a>
        </nav>
      </div>

      <div className="col-md-10 col-lg-10 ms-auto px-0 main-content">
        
        <nav className="navbar navbar-expand navbar-light navbar-top px-4 py-2">
          <div className="container-fluid">
            <button className="btn d-md-none me-2 p-1 border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebarOffcanvas" style={{color:"#1e293b",fontSize:"1.2rem"}}>
              <i className="bi bi-list"></i>
            </button>
            
            <span className="navbar-text ms-0 fw-semibold fs-5 text-dark">
              Notification Center
            </span>
          </div>
        </nav>

        <div className="content-wrapper">
          
          <div className="card shadow-sm border-0" style={{borderRadius:"12px"}}>
            <div className="card-header bg-white px-4 py-3 d-flex justify-content-between align-items-center" style={{borderBottom:"1px solid #f1f5f9"}}>
              <h6 className="m-0 fw-bold" style={{color:"#1e293b"}}>
                <i className="bi bi-bell me-2" style={{color:"#4f46e5"}}></i>Notification Feed
              </h6>
              <button className="btn btn-sm" style={{background:"#f1f5f9"  ,color:"#475569" ,borderRadius:"8px",fontWeight:"600"}} onClick={markAllNotificationsRead}>
                <i className="bi bi-check2-all me-1"></i>Mark All Read
              </button>
            </div>
            <div className="card-body px-3 py-3" id="notif-list-container">
              
              <div className={`notif-item ${allRead ? "" : "unread"} mb-1`}>
                <div className="d-flex align-items-start gap-3">
                  <div className="notif-icon" style={{background:"#4f46e5"}}>
                    <i className="bi bi-collection"></i>
                  </div>
                  <div className="flex-grow-1 min-width-0">
                    <div className="d-flex justify-content-between align-items-start gap-2">
                      <div className="flex-grow-1 min-width-0">
                        <div className="fw-semibold text-dark">Assigned to Batch React Native</div>
                        <div className="text-muted small mt-1">
                          You have been assigned as the primary instructor for Batch React Native starting June 2026.
                        </div>
                      </div>
                      <div className="notif-time">10 minutes ago</div>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="my-1 mx-2" style={{opacity:".3"}}/>

              <div className={`notif-item ${allRead ? "" : "unread"} mb-1`}>
                <div className="d-flex align-items-start gap-3">
                  <div className="notif-icon" style={{background:"#ea580c"}}>
                    <i className="bi bi-megaphone"></i>
                  </div>
                  <div className="flex-grow-1 min-width-0">
                    <div className="d-flex justify-content-between align-items-start gap-2">
                      <div className="flex-grow-1 min-width-0">
                        <div className="fw-semibold text-dark">Notice Published: Schedule Rescheduled</div>
                        <div className="text-muted small mt-1">
                          API Integration lecture today has been moved to 2:00 PM.
                        </div>
                      </div>
                      <div className="notif-time">1 hour ago</div>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="my-1 mx-2" style={{opacity:".3"}}/>

              <div className="notif-item mb-1">
                <div className="d-flex align-items-start gap-3">
                  <div className="notif-icon" style={{background:"#16a34a"}}>
                    <i className="bi bi-camera-video"></i>
                  </div>
                  <div className="flex-grow-1 min-width-0">
                    <div className="d-flex justify-content-between align-items-start gap-2">
                      <div className="flex-grow-1 min-width-0">
                        <div className="fw-semibold text-dark">Class Reminder: React Native State</div>
                        <div className="text-muted small mt-1">
                          Your live Teams meeting begins in 15 minutes. Join now.
                        </div>
                      </div>
                      <div className="notif-time">Yesterday</div>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="my-1 mx-2" style={{opacity:".3"}}/>

              <div className="notif-item mb-1">
                <div className="d-flex align-items-start gap-3">
                  <div className="notif-icon" style={{background:"#475569"}}>
                    <i className="bi bi-file-earmark-arrow-up"></i>
                  </div>
                  <div className="flex-grow-1 min-width-0">
                    <div className="d-flex justify-content-between align-items-start gap-2">
                      <div className="flex-grow-1 min-width-0">
                        <div className="fw-semibold text-dark">Study Material Uploaded</div>
                        <div className="text-muted small mt-1">
                          React Native State Management & Redux.pdf uploaded to materials repository.
                        </div>
                      </div>
                      <div className="notif-time">2 days ago</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        <footer className="text-center mt-auto border-top py-3 text-muted" style={{background:"#fff"}}>
          &copy; 2026 Pedestal Classroom. All rights reserved.
        </footer>
      </div>

    </div>
  </div>
  {showToast && (
  <div
    className="toast-container position-fixed bottom-0 end-0 p-3"
    style={{ zIndex: 1100 }}
  >
    <div
      className="toast show align-items-center border-0"
      style={{
        backgroundColor: "#fff",
        borderLeft: "4px solid #050978",
        boxShadow: "0 0.5rem 1.5rem rgba(0,0,0,0.15)",
      }}
    >
      <div className="d-flex">
        <div
          className="toast-body d-flex align-items-center gap-2"
          style={{
            fontWeight: 600,
            color: "#1e293b",
            fontSize: "0.88rem",
          }}
        >
          <i
            className="bi bi-info-circle-fill"
            style={{ color: "#050978" }}
          ></i>

          <span>All notifications marked as read.</span>
        </div>

        <button
          type="button"
          className="btn-close me-2 m-auto"
          onClick={() => setShowToast(false)}
        ></button>
      </div>
    </div>
  </div>
  )}
  </>
  )
}

export default Notifications