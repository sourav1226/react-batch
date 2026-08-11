import React from 'react'
import Sidebar from '../components/Sidebar'
import "./AdminStatus.css"
function AdminStatus() {
  return (
    
    <>
    <div className="container-fluid">
    <div className="row">
      
      <Sidebar />

      <div className="col-md-10 col-lg-10 ms-auto px-0 main-content">
        
        <nav className="navbar navbar-expand navbar-light navbar-top px-4 py-2">
          <div className="container-fluid">
            <button className="btn d-md-none me-2 p-1 border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebarOffcanvas" style={{color:"#1e293b",fontSize:"1.2rem"}}>
              <i className="bi bi-list"></i>
            </button>
            
            <span className="navbar-text ms-0 fw-semibold fs-5 text-dark">
              System Health & Diagnostics Status
            </span>
          </div>
        </nav>

        <div className="content-wrapper">
          
          <div className="row g-3 mb-4">
            <div className="col-sm-6 col-lg-3">
              <div className="card stat-card border-0 shadow-sm">
                <div className="card-body d-flex align-items-center gap-3">
                  <div className="stat-icon bg-primary bg-opacity-10 text-primary">
                    <i className="bi bi-database"></i>
                  </div>
                  <div>
                    <div className="fs-4 fw-bold">Completed</div>
                    <div className="text-muted small">Last Backup Sync</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="card stat-card border-0 shadow-sm">
                <div className="card-body d-flex align-items-center gap-3">
                  <div className="stat-icon bg-success bg-opacity-10 text-success">
                    <i className="bi bi-clock-history"></i>
                  </div>
                  <div>
                    <div className="fs-4 fw-bold">0</div>
                    <div className="text-muted small">Queued Jobs</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="card stat-card border-0 shadow-sm">
                <div className="card-body d-flex align-items-center gap-3">
                  <div className="stat-icon bg-danger bg-opacity-10 text-danger">
                    <i className="bi bi-exclamation-triangle"></i>
                  </div>
                  <div>
                    <div className="fs-4 fw-bold">0</div>
                    <div className="text-muted small">Failed Jobs</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="card stat-card border-0 shadow-sm">
                <div className="card-body d-flex align-items-center gap-3">
                  <div className="stat-icon bg-info bg-opacity-10 text-info">
                    <i className="bi bi-server"></i>
                  </div>
                  <div>
                    <div className="fs-4 fw-bold">8.2.12</div>
                    <div className="text-muted small">PHP Version</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row g-3 mb-4">
            <div className="col-md-6">
              <div className="card stat-card border-0 shadow-sm">
                <div className="card-header bg-white fw-semibold">
                  <i className="bi bi-calendar-check me-1"></i> Scheduled Tasks
                </div>
                <div className="card-body p-0">
                  <table className="table table-hover mb-0">
                    <thead className="table-light">
                      <tr>
                        <th>Command</th>
                        <th>Schedule</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><code>queue:work --stop-when-empty</code></td>
                        <td><span className="status-badge bg-secondary bg-opacity-10 text-secondary">* * * * *</span></td>
                        <td className="text-muted small">Process background email queues</td>
                      </tr>
                      <tr>
                        <td><code>backup:clean</code></td>
                        <td><span className="status-badge bg-secondary bg-opacity-10 text-secondary">0 1 * * *</span></td>
                        <td className="text-muted small">Clean expired database backups</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="card-footer bg-white text-muted small">
                  <i className="bi bi-info-circle me-1"></i> Cron command: <code>* * * * * php /path/to/artisan schedule:run</code>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card stat-card border-0 shadow-sm">
                <div className="card-header bg-white fw-semibold">
                  <i className="bi bi-server me-1"></i> Server Environment
                </div>
                <div className="card-body p-3">
                  <dl className="row mb-0">
                    <dt className="col-sm-4 server-label">Environment</dt>
                    <dd className="col-sm-8">Local / Production</dd>
                    <dt className="col-sm-4 server-label">Framework</dt>
                    <dd className="col-sm-8">Laravel v10.48.28</dd>
                    <dt className="col-sm-4 server-label">PHP Engine</dt>
                    <dd className="col-sm-8">v8.2.12 (Zend Engine)</dd>
                    <dt className="col-sm-4 server-label">Database Host</dt>
                    <dd className="col-sm-8 text-break">127.0.0.1 (MySQL 8.0)</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="card stat-card border-0 shadow-sm">
            <div className="card-header bg-white fw-semibold">
              <i className="bi bi-arrow-repeat me-1"></i> Backup Sync History
            </div>
            <div className="card-body p-0">
              <table className="table table-hover mb-0">
                <thead className="table-light">
                  <tr>
                    <th>Filename</th>
                    <th>Size</th>
                    <th>Status</th>
                    <th>Error</th>
                    <th>Completed At</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>pedestal_backup_2026_06_30.zip</code></td>
                    <td>14.2 MB</td>
                    <td><span className="status-badge bg-success bg-opacity-10 text-success">completed</span></td>
                    <td className="text-muted small">—</td>
                    <td className="text-muted small">Jun 30, 04:00 AM</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>

        <footer className="text-center mt-auto border-top py-3 text-muted" style={{background:"#fff"}}>
          &copy; 2026 Pedestal Classroom . All rights reserved.
        </footer>
      </div>

    </div>
  </div>
    </>
  )
}

export default AdminStatus