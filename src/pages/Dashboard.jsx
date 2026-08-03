import "./Dashboard.css";

function Dashboard()
{
    const clearAllNotifications = () => {
    console.log("clearAllNotifications");
  };

  const showToastNotification = (message) => {
    console.log(message);
  };
    return (
        <div>
            <h1>Dashboard</h1>
            {/* <p>Welcome to the Dashboard!</p> */}

        

            <div className="container-fluid">
            <div className="row">
      
                {/* <!-- 1. Left Sidebar Navigation (Desktop) --> */}
                <div className="col-md-2 col-lg-2 d-none d-md-block sidebar p-0">
                    <div className="brand">
                    <img src="https://pedestaltechnoworld.com/front-end/asset/images/header-logo.png" alt="Pedestal" />
                    </div>
                    <nav className="nav flex-column">
                    <div className="sidebar-heading">Main</div>
                    <a className="nav-link active" href="dashboard.html">
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
                    </nav>
                </div>

                {/* <!-- 2. Mobile Sidebar Offcanvas Drawer --> */}
                <div className="offcanvas offcanvas-start offcanvas-sidebar d-md-none" tabIndex= {-1} id="sidebarOffcanvas">
                    <div className="brand">
                    <img src="https://pedestaltechnoworld.com/front-end/asset/images/header-logo.png" alt="Pedestal" />
                    <button type="button" className="btn-close btn-close-white ms-auto" data-bs-dismiss="offcanvas"></button>
                    </div>
                    <nav className="nav flex-column">
                    <div className="sidebar-heading">Main</div>
                    <a className="nav-link active" href="dashboard.html" data-bs-dismiss="offcanvas">
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
                    </nav>
                </div>

                {/* <!-- 3. Right Main Content Area --> */}
                <div className="col-md-10 col-lg-10 ms-auto px-0 main-content">
                    
                    {/* <!-- Header Top navigation --> */}
                    <nav className="navbar navbar-expand navbar-light navbar-top px-4 py-2">
                    <div className="container-fluid">
                        {/* Mobile Menu Toggle */}
                        <button className="btn d-md-none me-2 p-1 border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebarOffcanvas" style={{ color: '#1e293b', fontSize: '1.2rem' }}>
                        <i className="bi bi-list"></i>
                        </button>
                        
                        <span className="navbar-text ms-0 fw-semibold fs-5 text-dark" id="nav-header-title">
                        Dashboard
                        </span>
                        
                        <ul className="navbar-nav ms-auto align-items-center gap-2">
                        {/* Bell Notification Dropdown */}
                        <li className="nav-item dropdown">
                            <a className="nav-link position-relative p-1" href="#" 
                            onClick={(e) => {
                                e.preventDefault();
                                // showToastNotification("Notifications dropdown opened");
                            }}
                            id="notifDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" >

                            <i className="bi bi-bell fs-5 text-secondary"></i>
                            <span id="header-notif-count" className="badge rounded-pill bg-danger d-none" style={{ position: 'absolute', top: '-2px', right: '-4px', fontSize: '0.55rem', minWidth: '15px' }} >
                                0 
                                </span>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end notif-dropdown-mobile p-0 shadow-lg border-0" aria-labelledby="notifDropdown">
                                <div className="p-3 border-bottom d-flex justify-content-between align-items-center">
                                    <span className="fw-bold fs-6">Recent Alerts</span>
                                <a
                                    href="#"
                                    className="text-decoration-none small text-primary"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        clearAllNotifications();
                                    }}
                                    >
                                    Mark all read
                                    </a>
                                /</div>    
                                    <div id="notif-dropdown-list" style={{ maxHeight: '320px', overflowY: 'auto' }}>
                                    <li>
                                    <a className="dropdown-item py-2" href="#" 
                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        showToastNotification("Notice details opened");
                                                        }}>
                                        <div className="d-flex align-items-start gap-2">
                                        <i className="bi bi-megaphone text-primary"></i>
                                        <div>
                                            <div className="fw-bold" style={{ fontSize: '0.8rem' }}>Notice Published: Batch Commencements</div>
                                            <small className="text-muted" style={{ fontSize: '0.7rem' }}>1 hour ago</small>
                                        </div>
                                        </div>
                                    </a>
                                    </li>
                                </div>
                            </ul>
                        </li>

                        {/* User Info Dropdown */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-dark fw-semibold" href="#"
                             onClick={(e) => {
                                e.preventDefault();
                                // showToastNotification("Notifications dropdown opened");
                            }} id="userDropdown" role="button" data-bs-toggle="dropdown">
                            <i className="bi bi-person-circle fs-5 me-1 text-secondary"></i>
                            <span id="user-display-name">Username</span>
                            <span id="user-display-badge" className="badge bg-primary ms-1">Student</span>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end border shadow-sm">
                            <li><a className="dropdown-item" href="index.html"><i className="bi bi-box-arrow-right"></i> Logout</a></li>
                            </ul>
                        </li>
                        </ul>
                    </div>
                    </nav>

                    {/* Main Inner Content Wrapper */}
                    <div className="content-wrapper">
                    
                    {/* Live Classes Banner widget */}
                    <div className="row mb-3" id="live-banner-row">
                        <div className="col-12">
                        <div className="card live-banner shadow-sm">
                            <div className="card-body py-2 px-3">
                            <div className="d-flex align-items-center flex-wrap gap-2">
                                <span className="live-pulse"><span className="dot"></span> Live</span>
                                <strong className="text-white">Classes Happening Now:</strong>
                                <a href="batch-show.html" className="live-link d-inline-flex align-items-center gap-1">
                                <i className="bi bi-camera-video-fill"></i>
                                Batch React Native
                                <small>(Trainer Sourav)</small>
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>

                    {/* Quick Action Tiles */}
                    <div className="row mb-3">
                        <div className="col-12">
                        <div className="quick-actions-wrap">
                            <a href="batches.html" className="action-tile">
                            <div className="action-icon" style={{ backgroundColor: '#050978' }}><i className="bi bi-collection"></i></div>
                            <div className="action-text">
                                <span className="title">My Batches</span>
                                <span className="count">Manage Batches</span>
                            </div>
                            <i className="bi bi-chevron-right action-arrow"></i>
                            </a>
                            <a href="attendance.html" className="action-tile">
                            <div className="action-icon" style={{ backgroundColor: '#198754' }}><i className="bi bi-clipboard-check"></i></div>
                            <div className="action-text">
                                <span className="title">Roster Marking</span>
                                <span className="count">Attendance List</span>
                            </div>
                            <i className="bi bi-chevron-right action-arrow"></i>
                            </a>
                            <a href="schedules.html" className="action-tile">
                            <div className="action-icon" style={{ backgroundColor: '#7c3aed' }}><i className="bi bi-calendar-event"></i></div>
                            <div className="action-text">
                                <span className="title">Academic Schedules</span>
                                <span className="count">Class Calendar</span>
                            </div>
                            <i className="bi bi-chevron-right action-arrow"></i>
                            </a>
                        </div>
                        </div>
                    </div>

                    {/* Grid Stats Cards */}
                    <div className="row g-2 mb-3">
                        <div className="col-xl-3 col-md-6">
                        <div className="card stat-card-modern shadow-sm" style={{ background: 'linear-gradient(135deg, #eef2ff 0%, #e0e7ff 100%)' }}>
                            <div className="card-body py-2 px-3">
                            <div className="d-flex align-items-center gap-2">
                                <div className="stat-icon-wrap" style={{ background: 'linear-gradient(135deg, #4f46e5, #6366f1)' }}>
                                <i className="bi bi-collection"></i>
                                </div>
                                <div>
                                <div className="stat-label" style={{ color: '#4338ca', fontSize: '0.75rem' }}>Total Batches</div>
                                <div className="stat-value h3 mb-0" style={{ color: '#1e1b4b' }}>12</div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>

                        <div className="col-xl-3 col-md-6">
                        <div className="card stat-card-modern shadow-sm" style={{ background: 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)' }}>
                            <div className="card-body py-2 px-3">
                            <div className="d-flex align-items-center gap-2">
                                <div className="stat-icon-wrap" style={{ background: 'linear-gradient(135deg, #059669, #10b981)' }}>
                                <i className="bi bi-play-circle"></i>
                                </div>
                                <div>
                                <div className="stat-label" style={{ color: '#065f46', fontSize: '0.75rem' }}>Active Batches</div>
                                <div className="stat-value h3 mb-0" style={{ color: '#022c22' }}>5</div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>

                        <div className="col-xl-3 col-md-6">
                        <div className="card stat-card-modern shadow-sm" style={{ background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)' }}>
                            <div className="card-body py-2 px-3">
                            <div className="d-flex align-items-center gap-2">
                                <div className="stat-icon-wrap" style={{ background: 'linear-gradient(135deg, #d97706, #f59e0b)' }}>
                                <i className="bi bi-people"></i>
                                </div>
                                <div>
                                <div className="stat-label" style={{ color: '#92400e', fontSize: '0.75rem' }}>Total Students</div>
                                <div className="stat-value h3 mb-0" style={{ color: '#451a03' }}>184</div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>

                        <div className="col-xl-3 col-md-6">
                        <div className="card stat-card-modern shadow-sm" style={{ background: 'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%)' }}>
                            <div className="card-body py-2 px-3">
                            <div className="d-flex align-items-center gap-2">
                                <div className="stat-icon-wrap" style={{ background: 'linear-gradient(135deg, #db2777, #ec4899)' }}>
                                <i className="bi bi-person-badge"></i>
                                </div>
                                <div>
                                <div className="stat-label" style={{ color: '#9d174d', fontSize: '0.75rem' }}>Total Instructors</div>
                                <div className="stat-value h3 mb-0" style={{ color: '#4c0519' }}>8</div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>

                    {/* Bottom Columns: Upcoming Classes vs Tasks */}
                    <div className="row g-3">
                        <div className="col-lg-8">
                        <div className="card content-card shadow-sm">
                            <div className="card-header-custom p-3">
                            <h6 className="text-dark fw-bold mb-0">
                                <i className="bi bi-calendar-event text-primary"></i> Upcoming Scheduled Classes
                            </h6>
                            </div>
                            <div className="card-body p-3 border-top">
                            
                            <div className="mb-2">
                                <div className="px-1 pb-1 text-uppercase text-muted fw-bold" style={{ fontSize: '0.75rem' }}>
                                <a href="batch-show.html" className="text-decoration-none text-muted"><i className="bi bi-collection me-1"></i> Batch React Native</a>
                                </div>
                                <a href="schedules.html" className="upcoming-item">
                                <div className="date-box">
                                    <div className="day-name">Wed</div>
                                    <div className="day-num">01</div>
                                    <div className="month">Jul</div>
                                </div>
                                <div className="info">
                                    <div className="trainer fw-semibold text-dark">API Integrations</div>
                                    <div className="small text-muted">Trainer Sourav</div>
                                </div>
                                <span className="time-badge">
                                    <i className="bi bi-clock me-1"></i> 10:00 AM - 12:00 PM
                                </span>
                                </a>
                                
                                <hr className="my-2" style={{ opacity: 0.1 }} />

                                <a href="schedules.html" className="upcoming-item">
                                <div className="date-box">
                                    <div className="day-name">Thu</div>
                                    <div className="day-num">02</div>
                                    <div className="month">Jul</div>
                                </div>
                                <div className="info">
                                    <div className="trainer fw-semibold text-dark">Component Lifecycle</div>
                                    <div className="small text-muted">Trainer Sourav</div>
                                </div>
                                <span className="time-badge">
                                    <i className="bi bi-clock me-1"></i> 10:00 AM - 12:00 PM
                                </span>
                                </a>
                            </div>

                            </div>
                        </div>
                        </div>

                        <div className="col-lg-4">
                        <div className="card content-card shadow-sm">
                            <div className="card-header-custom p-3">
                            <h6 className="text-dark fw-bold mb-0">
                                <i className="bi bi-check2-square text-primary"></i> Action Items Required
                            </h6>
                            </div>
                            <div className="card-body p-3 border-top">
                            <div className="list-group list-group-flush">
                                <div className="list-group-item px-0 py-2 border-0 task-check-item">
                                <div className="form-check d-flex align-items-center gap-2">
                                    <input className="form-check-input my-0" type="checkbox" id="task-1" />
                                    <label className="form-check-label task-text" htmlFor="task-1" style={{ fontSize: '0.85rem', cursor: 'pointer' }}>Mark attendance for React Native</label>
                                </div>
                                </div>
                                <div className="list-group-item px-0 py-2 border-0 task-check-item">
                                <div className="form-check d-flex align-items-center gap-2">
                                    <input className="form-check-input my-0" type="checkbox" id="task-2" />
                                    <label className="form-check-label task-text" htmlFor="task-2" style={{ fontSize: '0.85rem', cursor: 'pointer' }}>Upload REST API slides</label>
                                </div>
                                </div>
                                <div className="list-group-item px-0 py-2 border-0 task-check-item">
                                <div className="form-check d-flex align-items-center gap-2">
                                    <input className="form-check-input my-0" type="checkbox" id="task-3" />
                                    <label className="form-check-label task-text" htmlFor="task-3" style={{ fontSize: '0.85rem', cursor: 'pointer' }}>Verify Teams Sync logs</label>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>

                    </div>

                    {/* Footer */}
                    <footer className="text-center mt-auto border-top py-3 text-muted" style={{ background: '#fff' }}>
                    &copy; 2026 Pedestal Class Room. All rights reserved.
                    </footer>
                </div>

                </div>
            </div>

            {/* <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
            <script src="js/app.js"></script>
            <script> */}

                {/* // Personalize dashboard with sessionStorage role
                const currentRole = sessionStorage.getItem("userRole") || "student";
                const displayName = document.getElementById("user-display-name");
                const displayBadge = document.getElementById("user-display-badge");

                if (currentRole === "admin") {
                displayName.innerText = "Alex Admin";
                displayBadge.innerText = "Admin";
                displayBadge.className = "badge bg-danger ms-1";
                } else if (currentRole === "instructor") {
                displayName.innerText = "Trainer Sourav";
                displayBadge.innerText = "Instructor";
                displayBadge.className = "badge bg-success ms-1";
                } else {
                displayName.innerText = "Aman Student";
                displayBadge.innerText = "Student";
                displayBadge.className = "badge bg-primary ms-1";
                // Students don't see the live banner if they don't have active lectures
                }

                function clearAllNotifications() {
                $("#notif-dropdown-list").html('<div className="p-3 text-center text-muted small">No unread alerts.</div>');
                $("#header-notif-count").addClass("d-none").text("0");
                showToastNotification("Alert notifications cleared.");
                }
            </script> */}
        </div>    
    );
} 
export default Dashboard;