import React from 'react'

function Sidebar() {
  return (
    <>
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
          <a className="nav-link active" href="batches.html">
            <i className="bi bi-collection"></i> Batches
          </a>
          <a className="nav-link" href="attendance.html">
            <i className="bi bi-clipboard-check"></i> Attendance
          </a>
          <a className="nav-link" href="schedules.html">
            <i className="bi bi-calendar-event"></i> Schedules
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
          <a className="nav-link active" href="batches.html" data-bs-dismiss="offcanvas">
            <i className="bi bi-collection"></i> Batches
          </a>
          <a className="nav-link" href="attendance.html" data-bs-dismiss="offcanvas">
            <i className="bi bi-clipboard-check"></i> Attendance
          </a>
          <a className="nav-link" href="schedules.html" data-bs-dismiss="offcanvas">
            <i className="bi bi-calendar-event"></i> Schedules
          </a>
        </nav>
      </div>


    </>
    
  )
}

export default Sidebar