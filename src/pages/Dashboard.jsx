import "./Dashboard.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slices/authSlice";
import Sidebar from "../components/Sidebar";

function Dashboard()
{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);

    const getRoleString = (role) => {
        if (!role) return "student";
        if (typeof role === "string") return role;
        if (typeof role === "object") return role.name || role.title || role.role || "student";
        return String(role);
    };

    const rawRole = sessionStorage.getItem("userRole") || user?.role || "student";
    const currentRole = getRoleString(rawRole);
    const roleBadgeText = currentRole ? (currentRole.charAt(0).toUpperCase() + currentRole.slice(1)) : "Student";
    const roleLower = currentRole.toLowerCase();
    const roleBadgeClass = roleLower === "admin" ? "bg-danger" : roleLower === "instructor" ? "bg-success" : "bg-primary";
    const displayName = (typeof user?.name === 'string' && user.name) ||
                        (typeof user?.email === 'string' && user.email) ||
                        (roleLower === "admin" ? "Alex Admin" : roleLower === "instructor" ? "Trainer Sourav" : "Aman Student");

    const handleLogout = () => {
        dispatch(logout());
        navigate("/login");
    };

    const clearAllNotifications = () => {
    console.log("clearAllNotifications");
  };

  const showToastNotification = (message) => {
    console.log(message);
  };
    return (
        <div>
            <div className="container-fluid">
            <div className="row">
                <Sidebar />
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
                            <button type="button" className="nav-link position-relative p-1 btn border-0 bg-transparent" 
                            onClick={() => {
                                // showToastNotification("Notifications dropdown opened");
                            }}
                            id="notifDropdown" data-bs-toggle="dropdown" aria-expanded="false" >

                            <i className="bi bi-bell fs-5 text-secondary"></i>
                            <span id="header-notif-count" className="badge rounded-pill bg-danger d-none" style={{ position: 'absolute', top: '-2px', right: '-4px', fontSize: '0.55rem', minWidth: '15px' }} >
                                0 
                                </span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-end notif-dropdown-mobile p-0 shadow-lg border-0" aria-labelledby="notifDropdown">
                                <div className="p-3 border-bottom d-flex justify-content-between align-items-center">
                                    <span className="fw-bold fs-6">Recent Alerts</span>
                                <button
                                    type="button"
                                    className="text-decoration-none small text-primary btn btn-link p-0 border-0"
                                    onClick={() => {
                                        clearAllNotifications();
                                    }}
                                    >
                                    Mark all read
                                    </button>
                                </div>    
                                    <div id="notif-dropdown-list" style={{ maxHeight: '320px', overflowY: 'auto' }}>
                                    <button type="button" className="dropdown-item py-2 text-start"
                                    onClick={() => {
                                                        showToastNotification("Notice details opened");
                                                        }}>
                                        <div className="d-flex align-items-start gap-2">
                                        <i className="bi bi-megaphone text-primary"></i>
                                        <div>
                                            <div className="fw-bold" style={{ fontSize: '0.8rem' }}>Notice Published: Batch Commencements</div>
                                            <small className="text-muted" style={{ fontSize: '0.7rem' }}>1 hour ago</small>
                                        </div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </li>

                        {/* User Info Dropdown */}
                        <li className="nav-item dropdown">
                            <button type="button" className="nav-link dropdown-toggle text-dark fw-semibold btn border-0 bg-transparent"
                             id="userDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="bi bi-person-circle fs-5 me-1 text-secondary"></i>
                            <span id="user-display-name">{displayName}</span>
                            <span id="user-display-badge" className={`badge ms-1 ${roleBadgeClass}`}>{roleBadgeText}</span>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end border shadow-sm">
                            <li>
                                <button type="button" className="dropdown-item text-danger d-flex align-items-center gap-2" onClick={handleLogout}>
                                    <i className="bi bi-box-arrow-right"></i> Logout
                                </button>
                            </li>
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
                                <Link to="/batches/1" className="live-link d-inline-flex align-items-center gap-1">
                                <i className="bi bi-camera-video-fill"></i>
                                Batch React Native
                                <small>(Trainer Sourav)</small>
                                </Link>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>

                    {/* Quick Action Tiles */}
                    <div className="row mb-3">
                        <div className="col-12">
                        <div className="quick-actions-wrap">
                            <Link to="/batches" className="action-tile">
                            <div className="action-icon" style={{ backgroundColor: '#050978' }}><i className="bi bi-collection"></i></div>
                            <div className="action-text">
                                <span className="title">My Batches</span>
                                <span className="count">Manage Batches</span>
                            </div>
                            <i className="bi bi-chevron-right action-arrow"></i>
                            </Link>
                            <Link to="/attendance" className="action-tile">
                            <div className="action-icon" style={{ backgroundColor: '#198754' }}><i className="bi bi-clipboard-check"></i></div>
                            <div className="action-text">
                                <span className="title">Roster Marking</span>
                                <span className="count">Attendance List</span>
                            </div>
                            <i className="bi bi-chevron-right action-arrow"></i>
                            </Link>
                            <Link to="/schedules" className="action-tile">
                            <div className="action-icon" style={{ backgroundColor: '#7c3aed' }}><i className="bi bi-calendar-event"></i></div>
                            <div className="action-text">
                                <span className="title">Academic Schedules</span>
                                <span className="count">Class Calendar</span>
                            </div>
                            <i className="bi bi-chevron-right action-arrow"></i>
                            </Link>
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
                                <Link to="/batches/1" className="text-decoration-none text-muted"><i className="bi bi-collection me-1"></i> Batch React Native</Link>
                                </div>
                                <Link to="/schedules" className="upcoming-item">
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
                                </Link>
                                
                                <hr className="my-2" style={{ opacity: 0.1 }} />

                                <Link to="/schedules" className="upcoming-item">
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
                                </Link>
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