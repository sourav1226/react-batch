import "./AdminLogs.css";

function AdminLogs() {
  return (
    <>
        <div>

  <div className="container-fluid">
    <div className="row">
      
      {/* <!-- Left Sidebar Navigation --> */}
      <div className="col-md-2 col-lg-2 d-none d-md-block sidebar p-0">
        <div className="brand">
          <img src="https://pedestaltechnoworld.com/front-end/asset/images/header-logo.png" alt="Pedestal" />
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
          <a className="nav-link text-white-50" href="admin-trainers.html">
            <i className="bi bi-person-badge"></i> Trainers Directory
          </a>
          <a className="nav-link text-white-50" href="admin-students.html">
            <i className="bi bi-people"></i> Students Directory
          </a>
          <a className="nav-link text-white-50" href="admin-roles.html">
            <i className="bi bi-shield-check"></i> Roles & Permissions
          </a>
          <a className="nav-link active" href="admin-logs.html">
            <i className="bi bi-journal-text"></i> Audit Logs
          </a>
          <a className="nav-link text-white-50" href="admin-status.html">
            <i className="bi bi-hdd-network"></i> System Status
          </a>
        </nav>
      </div>

      {/* <!-- Mobile Sidebar Offcanvas --> */}
      <div className="offcanvas offcanvas-start offcanvas-sidebar d-md-none" tabindex="-1" id="sidebarOffcanvas">
        <div className="brand">
          <img src="https://pedestaltechnoworld.com/front-end/asset/images/header-logo.png" alt="Pedestal" />
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
          <a className="nav-link" href="admin-trainers.html" data-bs-dismiss="offcanvas">
            <i className="bi bi-person-badge"></i> Trainers Directory
          </a>
          <a className="nav-link" href="admin-students.html" data-bs-dismiss="offcanvas">
            <i className="bi bi-people"></i> Students Directory
          </a>
          <a className="nav-link" href="admin-roles.html" data-bs-dismiss="offcanvas">
            <i className="bi bi-shield-check"></i> Roles & Permissions
          </a>
          <a className="nav-link active" href="admin-logs.html" data-bs-dismiss="offcanvas">
            <i className="bi bi-journal-text"></i> Audit Logs
          </a>
          <a className="nav-link" href="admin-status.html" data-bs-dismiss="offcanvas">
            <i className="bi bi-hdd-network"></i> System Status
          </a>
        </nav>
      </div>

      {/* <!-- Right Main Content Area --> */}
      <div className="col-md-10 col-lg-10 ms-auto px-0 main-content">
        
        {/* <!-- Header Top navigation --> */}
        <nav className="navbar navbar-expand navbar-light navbar-top px-4 py-2">
          <div className="container-fluid">
            <button className="btn d-md-none me-2 p-1 border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebarOffcanvas" style={{color:'#1e293b',fontSize:'1.2rem'}}>
              <i className="bi bi-list"></i>
            </button>
            
            <span className="navbar-text ms-0 fw-semibold fs-5 text-dark">
              Activity & Security Audit Logs
            </span>
          </div>
        </nav>

        {/* <!-- Main Inner Content Wrapper --> */}
        <div className="content-wrapper">
          
          <ul className="nav nav-tabs mb-3 px-0 border-bottom">
            <li className="nav-item">
              <a className="nav-link active" href="admin-logs.html">
                <i className="bi bi-journal-text me-1"></i>Activity Logs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onclick="alert('Viewing raw laravel.log stream...'); return false;">
                <i className="bi bi-terminal me-1"></i>System Exception Logs
              </a>
            </li>
          </ul>

          <div className="card shadow-sm border-0" style={{borderRadius:'12px'}}>
            <div className="card-header bg-white px-4 py-3 d-flex flex-wrap justify-content-between align-items-center gap-2" style={{borderBottom:'1px solid #f1f5f9'}}>
              <h6 className="m-0 fw-bold" style={{color:'#1e293b'}}>
                <i className="bi bi-journal-text me-1" style={{color:'#4f46e5'}}></i>Audit Log Entries
              </h6>
              <span className="badge" style={{background:'#eef2ff',color:'#4f46e5',fontWeight:'600'}}>142 Entries</span>
            </div>
            <div className="card-div px-4 py-3">
              
              <div className="row g-2 mb-3">
                <div className="col-md-3">
                  <input type="text" className="form-control form-control-sm" placeholder="Search description or user..." style={{borderRadius:'8px'}} />
                </div>
                <div className="col-md-2">
                  <select className="form-select form-select-sm" style={{borderRadius:'8px'}}>
                    <option value="">All Levels</option>
                    <option value="info">Info</option>
                    <option value="warning">Warning</option>
                    <option value="error">Error</option>
                  </select>
                </div>
                <div className="col-md-2">
                  <select className="form-select form-select-sm" style={{borderRadius:'8px'}}>
                    <option value="">All Log Types</option>
                    <option value="login">Login</option>
                    <option value="create">Create</option>
                    <option value="update">Update</option>
                    <option value="block">Block</option>
                  </select>
                </div>
                <div className="col-md-1">
                  <button className="btn btn-sm w-100" style={{background:'#4f46e5',color:'#fff',borderRadius:'8px',fontWeight:'600'}} onclick="showToastNotification('Log filter applied.')">
                    <i className="bi bi-search"></i>
                  </button>
                </div>
              </div>

              <div className="table-responsive">
                <table className="table align-middle mb-0" style={{fontSize:".85rem"}}>
                  <thead style={{background:'#f8fafc'}}>
                    <tr>
                      <th style={{fontWeight:'600',color:'#475569',width:'40px'}}></th>
                      <th style={{fontWeight:'600',color:'#475569'}}>User</th>
                      <th style={{fontWeight:'600',color:'#475569'}}>Level</th>
                      <th style={{fontWeight:'600',color:'#475569'}}>Type</th>
                      <th style={{fontWeight:'600',color:'#475569'}}>Description</th>
                      <th style={{fontWeight:'600',color:'#475569'}}>IP Address</th>
                      <th style={{fontWeight:'600',color:'#475569'}}>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    
                    <tr className="log-row">
                      <td>
                        <div className="log-type-icon" style={{background:'#dbeafe'}}>
                          <i className="bi bi-box-arrow-in-right" style={{color:'#1e293b'}}></i>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center gap-2">
                          <div className="user-initial" style={{background:"#4f46e5"}}>S</div>
                          <div>
                            <div style={{fontWeight:"600",color:'#1e293b'}}>Sourav Sharma</div>
                            <div className="text-muted" style={{fontSize:".75rem;"}}>Admin</div>
                          </div>
                        </div>
                      </td>
                      <td><span className="level-badge" style={{background:'#f0fdf4',color:'#166534'}}>info</span></td>
                      <td><span style={{fontWeight:"500",color:'#475569'}}>Login</span></td>
                      <td>User logged in via SSO OTP authentication</td>
                      <td><code className="text-muted" style={{fontSize:".8rem"}}>192.168.1.45</code></td>
                      <td className="text-nowrap text-muted" style={{fontSize:".8rem"}}><i className="bi bi-clock me-1"></i> Today, 10:14 AM</td>
                    </tr>

                    <tr className="log-row">
                      <td>
                        <div className="log-type-icon" style={{background:'#dcfce7'}}>
                          <i className="bi bi-plus-circle" style={{color:'#1e293b'}}></i>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center gap-2">
                          <div className="user-initial" style={{background:"#4f46e5"}}>S</div>
                          <div>
                            <div style={{fontWeight:"600",color:'#1e293b'}}>Sourav Sharma</div>
                            <div className="text-muted" style={{fontSize:".75rem;"}}>Admin</div>
                          </div>
                        </div>
                      </td>
                      <td><span className="level-badge" style={{background:'#f0fdf4',color:'#166534'}}>info</span></td>
                      <td><span style={{fontWeight:"500",color:'#475569'}}>Create</span></td>
                      <td>Created new batch "Batch React Native 2026"</td>
                      <td><code className="text-muted" style={{fontSize:".8rem"}}>192.168.1.45</code></td>
                      <td className="text-nowrap text-muted" style={{fontSize:".8rem"}}><i className="bi bi-clock me-1"></i> Today, 09:30 AM</td>
                    </tr>

                    <tr className="log-row">
                      <td>
                        <div className="log-type-icon" style={{background:'#fee2e2'}}>
                          <i className="bi bi-lock" style={{color:'#1e293b'}}></i>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center gap-2">
                          <div className="user-initial" style={{background:"#4f46e5"}}>S</div>
                          <div>
                            <div style={{fontWeight:"600",color:'#1e293b'}}>Sourav Sharma</div>
                            <div className="text-muted" style={{fontSize:".75rem;"}}>Admin</div>
                          </div>
                        </div>
                      </td>
                      <td><span className="level-badge" style={{background:"#fffbeb", color:"#92400e"}}>warning</span></td>
                      <td><span style={{fontWeight:"500",color:'#475569'}}>Block</span></td>
                      <td>Blocked user "Vikram Rathore" from system login</td>
                      <td><code className="text-muted" style={{fontSize:".8rem"}}>192.168.1.45</code></td>
                      <td className="text-nowrap text-muted" style={{fontSize:".8rem"}}><i className="bi bi-clock me-1"></i> Yesterday, 04:20 PM</td>
                    </tr>

                  </tbody>
                </table>
              </div>

            </div>
          </div>

        </div>

        {/* <!-- Footer --> */}
        <footer className="text-center mt-auto border-top py-3 text-muted" style={{background:"#fff"}}>
          &copy; 2026 Pedestal Class Room. All rights reserved.
        </footer>
      </div>

    </div>
  </div>

  {/* <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
  <script src="js/app.js"></script> */}
</div>
    </>
  );
}

export default AdminLogs;