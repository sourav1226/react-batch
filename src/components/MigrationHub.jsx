import React from "react";
import "./MigrationHub.css";

function MigrationHub() {
  return (
    <div className="migration-dashboard-body" data-theme="dark">

  <div className="container-fluid">
    <div className="row">
      
      {/* <!-- Left Sidebar Navigation --> */}
      <div className="col-md-2 col-lg-2 d-none d-md-block sidebar p-0 migration-sidebar">
        <div className="brand" style={{borderBottom:"1px solid var(--border-color)"}}>
          <div className="d-flex align-items-center gap-2">
            <div className="logo-icon">P</div>
            <div className="logo-text">
              <h1 className="mb-0 text-white">Pedestal</h1>
              <span>Academy</span>
            </div>
          </div>
        </div>
        <nav className="nav flex-column">
          <div className="sidebar-heading" style={{color:"var(--text-muted)"}}>Main</div>
          <a className="nav-link text-white-50" href="dashboard.html">
            <i className="bi bi-speedometer2"></i> Dashboard
          </a>
          <a className="nav-link active" href="migration-hub.html" style={{background:"linear-gradient(90deg, rgba(0, 130, 243, 0.12), transparent)", borderLeft:"3px solid var(--color-blue)", color:"var(--color-blue) !important"}}>
            <i className="bi bi-git"></i> Migration Hub
          </a>

          <div className="sidebar-heading" style={{color:"var(--text-muted)"}}>Academic</div>
          <a className="nav-link text-white-50" href="batches.html">
            <i className="bi bi-collection"></i> Batches
          </a>
          <a className="nav-link text-white-50" href="attendance.html">
            <i className="bi bi-clipboard-check"></i> Attendance
          </a>
          <a className="nav-link text-white-50" href="schedules.html">
            <i className="bi bi-calendar-event"></i> Schedules
          </a>
          <a className="nav-link text-white-50" href="tasks.md" target="_blank">
            <i className="bi bi-journal-check"></i> Frontend Tracker
          </a>
        </nav>
      </div>

      {/* <!-- Mobile Sidebar Offcanvas --> */}
      <div className="offcanvas offcanvas-start offcanvas-sidebar d-md-none" tabIndex="-1" id="sidebarOffcanvas">
        <div className="brand">
          <img src="https://pedestaltechnoworld.com/front-end/asset/images/header-logo.png" alt="Pedestal"/>
          <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas"></button>
        </div>
        <nav className="nav flex-column">
          <div className="sidebar-heading">Main</div>
          <a className="nav-link" href="dashboard.html" data-bs-dismiss="offcanvas">
            <i className="bi bi-speedometer2"></i> Dashboard
          </a>
          <a className="nav-link active" href="migration-hub.html" data-bs-dismiss="offcanvas">
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
          <a className="nav-link" href="tasks.md" target="_blank" data-bs-dismiss="offcanvas">
            <i className="bi bi-journal-check"></i> Frontend Tracker
          </a>
        </nav>
      </div>

      {/* <!-- Right Main Content Area --> */}
      <div className="col-md-10 col-lg-10 ms-auto px-0 main-content" style={{backgroundColor: "var(--bg-dark)"}}>
        
        {/* <!-- Header Top navigation --> */}
        <nav className="navbar navbar-expand navbar-top px-4 py-2" style={{backgroundColor: "var(--bg-sidebar)", borderBottom: "1px solid var(--border-color)"}}>
          <div className="container-fluid">
            <button className="btn d-md-none me-2 p-1 border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebarOffcanvas" style={{color: "var(--text-primary)", fontSize: "1.2rem"}}>
              <i className="bi bi-list"></i>
            </button>
            
            <span className="navbar-text ms-0 fw-semibold fs-5 text-white">
              Migration Hub (Laravel &rarr; React + Node)
            </span>
            
            <ul className="navbar-nav ms-auto align-items-center gap-2">
              {/* <!-- Global Progress bar capsule --> */}
              <div className="global-progress-capsule">
              <span
                className="text-secondary"
                style={{ fontSize: "0.75rem" }}
              >
                Progress
              </span>
                <div className="progress-bar-bg">
                <div
                  className="progress-bar-fill"
                  style={{ width: "78%" }}
                ></div>
                </div>
                <span id="global-progress-label">78%</span>
              </div>
            </ul>
          </div>
        </nav>

        {/* <!-- Main Inner Content Wrapper --> */}
        <div className="content-wrapper" style={{backgroundColor: "var(--bg-dark)"}}>
          
          {/* <!-- Statistics Cards Grid Dark --> */}
          <div className="stats-grid-dark">
            
            <div className="stat-card-dark card-glow-blue">
              <div className="stat-icon" style={{color: "var(--color-blue)"}}><i className="bi bi-code-slash"></i></div>
              <div className="stat-details-dark">
                <h3>Total Endpoints</h3>
                <div className="stat-number-dark text-white">42</div>
              </div>
            </div>

            <div className="stat-card-dark card-glow-green">
              <div className="stat-icon" style={{color: "var(--color-green)"}}><i className="bi bi-shield-check"></i></div>
              <div className="stat-details-dark">
                <h3>APIs Ready</h3>
                <div className="stat-number-dark text-white">33</div>
              </div>
            </div>

            <div className="stat-card-dark card-glow-yellow">
              <div className="stat-icon" style={{color: "var(--color-yellow)"}}><i className="bi bi-hourglass-split"></i></div>
              <div className="stat-details-dark">
                <h3>In Progress</h3>
                <div className="stat-number-dark text-white">6</div>
              </div>
            </div>

            <div className="stat-card-dark card-glow-purple">
              <div className="stat-icon" style={{color: "var(--color-purple)"}}><i className="bi bi-exclamation-triangle"></i></div>
              <div className="stat-details-dark">
                <h3>Pending</h3>
                <div className="stat-number-dark text-white">3</div>
              </div>
            </div>

          </div>

          {/* <!-- Bottom Splits: Routes list and Feature Progress --> */}
          <div className="row g-3">
            <div className="col-lg-8">
              <div className="glass-panel p-0 overflow-hidden">
                <div className="p-3 border-bottom border-secondary d-flex justify-content-between align-items-center" style={{borderColor: "var(--border-color) !important" }}>
                  <h6 className="mb-0 text-white fw-bold"><i className="bi bi-bezier2 me-1 text-primary"></i> API Route Mapping</h6>
                </div>
                
                <table className="routes-table">
                  <thead>
                    <tr style={{borderBottom: "1px solid var(--border-color)"}}>
                      <th className="ps-4" style={{backgroundColor: "var(--bg-sidebar)", borderBottom: "1px solid var(--border-color)", color: "var(--text-secondary)"}}>Method</th>
                      <th style={{backgroundColor: "var(--bg-sidebar)", borderBottom: "1px solid var(--border-color)", color: "var(--text-secondary)"}}>Laravel Monolith Route</th>
                      <th style={{backgroundColor: "var(--bg-sidebar)", borderBottom: "1px solid var(--border-color)", color: "var(--text-secondary)"}}>Express API Gateway Equivalent</th>
                      <th className="pe-4" style={{backgroundColor: "var(--bg-sidebar)", borderBottom: "1px solid var(--border-color)", color: "var(--text-secondary)"}}>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    
                    {/* <!-- Row 1 --> */}
                    <tr className="migration-endpoint-row main-row" data-target="drawer-route-1">
                      <td className="ps-4"><span className="method-badge get">GET</span></td>
                      <td className="route-path">/dashboard</td>
                      <td className="api-path">/api/dashboard</td>
                      <td className="pe-4"><span className="badge bg-success">Completed</span></td>
                    </tr>
                    <tr className="route-details-row" id="drawer-route-1">
                      <td colSpan="4" className="p-0">
                        <div className="details-container">
                          <div className="details-box">
                                <h5>Express Knex Controller</h5>
                                    <pre>{`// src/modules/dashboard/dashboard.controller.js
 exports.getStats = async (req, res) => {
const totalBatches = await db.batch('batches').count('id as cnt');
res.json({ totalBatches });
};`} </pre> 
                            </div>
                            <div className="details-box">
                                <h5>Auth Permissions</h5>
                                    <pre>router.get('/dashboard', authenticate, authorize('admin', 'user'));</pre>
                          </div>
                        </div>
                      </td>
                    </tr>

                    {/* <!-- Row 2 --> */}
                    <tr className="migration-endpoint-row main-row" data-target="drawer-route-2">
                      <td className="ps-4"><span className="method-badge post">POST</span></td>
                      <td className="route-path">/batches</td>
                      <td className="api-path">/api/batches</td>
                      <td className="pe-4"><span className="badge bg-success">Completed</span></td>
                    </tr>
                    <tr className="route-details-row" id="drawer-route-2">
                      <td colSpan="4" className="p-0">
                        <div className="details-container">
                          <div className="details-box">
                            <h5>Express Knex Controller</h5>
                            <pre>{`// src/modules/batches/batches.controller.js
exports.createBatch = async (req, res) => {
  const [id] = await db.batch('batches').insert(req.body);
  res.json({ id });
};`}</pre>
                          </div>
                          <div className="details-box">
                            <h5>Auth Permissions</h5>
                            <pre>{`router.post('/batches', authenticate, authorize('admin'));`}</pre>
                          </div>
                        </div>
                      </td>
                    </tr>

                    {/* <!-- Row 2b (Single Batch Details Show) --> */}
                    <tr className="migration-endpoint-row main-row" data-target="drawer-route-2b">
                      <td className="ps-4"><span className="method-badge get">GET</span></td>
                      <td className="route-path">{"/batches/{batch}"}</td>
                      <td className="api-path">/api/batches/:id</td>
                      <td className="pe-4"><span className="badge bg-success">Completed</span></td>
                    </tr>
                    <tr className="route-details-row" id="drawer-route-2b">
                      <td colSpan="4" className="p-0">
                        <div className="details-container">
                          <div className="details-box">
                            <h5>Express Knex Controller</h5>
                            <pre>{`// src/modules/batches/batches.controller.js
exports.getBatchDetails = async (req, res) => {
  const batch = await db.batch('batches').where({ id: req.params.id }).first();
  const students = await db.pedestal('users').where({ batch_id: req.params.id });
  res.json({ batch, students });
};}`}</pre>
                          </div>
                          <div className="details-box">
                            <h5>Auth Permissions</h5>
                            <pre>{`router.get('/batches/:id', authenticate, authorize('admin', 'trainer', 'user'));`}</pre>
                          </div>
                        </div>
                      </td>
                    </tr>

                    {/* <!-- Row 3 --> */}
                    <tr className="migration-endpoint-row main-row" data-target="drawer-route-3">
                      <td className="ps-4"><span className="method-badge put">PUT</span></td>
                      <td className="route-path">{"/attendance/{id}"}</td>
                      <td className="api-path">/api/attendance/:id</td>
                      <td className="pe-4"><span className="badge bg-warning text-dark">In Progress</span></td>
                    </tr>
                    <tr className="route-details-row" id="drawer-route-3">
                      <td colSpan="4" className="p-0">
                        <div className="details-container">
                          <div className="details-box">
                            <h5>Express Knex Controller</h5>
                            <pre>{`// Under Development: writing Knex bulk update schemas`}</pre>
                          </div>
                          <div className="details-box">
                            <h5>Auth Permissions</h5>
                            <pre>{`router.put('/attendance/:id', authenticate, authorize('admin', 'trainer'));`}</pre>
                          </div>
                        </div>
                      </td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="glass-panel">
                <h6 className="mb-3 text-white fw-bold"><i className="bi-percent text-info me-1"></i> Migration Progress</h6>
                
                <div className="mb-3">
                  <div className="d-flex justify-content-between text-secondary small mb-1">
                    <span>Authentication (JWT)</span>
                    <span className="text-info fw-bold">100%</span>
                  </div>
                  <div className="progress" style={{height:"6px", backgroundColor:"rgba(255,255,255,0.05)"}}>
                    <div className="progress-bar bg-success" style={{width: "100%"}}></div>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="d-flex justify-content-between text-secondary small mb-1">
                    <span>Batches Management CRUD</span>
                    <span className="text-info fw-bold">90%</span>
                  </div>
                  <div className="progress" style={{height:"6px", backgroundColor:"rgba(255,255,255,0.05)"}}>
                    <div className="progress-bar bg-primary" style={{width: "90%"}}></div>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="d-flex justify-content-between text-secondary small mb-1">
                    <span>Attendance Sheets</span>
                    <span className="text-info fw-bold">60%</span>
                  </div>
                  <div className="progress" style={{height:"6px", backgroundColor:"rgba(255,255,255,0.05)"}}>
                    <div className="progress-bar bg-warning" style={{width: "60%"}}></div>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="d-flex justify-content-between text-secondary small mb-1">
                    <span>Microsoft Graph Sync</span>
                    <span className="text-info fw-bold">30%</span>
                  </div>
                  <div className="progress" style={{height:"6px", backgroundColor:"rgba(255,255,255,0.05)"}}>
                    <div className="progress-bar bg-danger" style={{width: "30%"}}></div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* <!-- Footer --> */}
        <footer className="text-center mt-auto border-top py-3 text-muted" style={{backgroundColor:"var(--bg-sidebar)", borderColor: "var(--border-color) !important"}}>
          &copy; 2026 Pedestal Class Room. All rights reserved.
        </footer>
      </div>

    </div>
  </div>

  {/* <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
  <script src="js/app.js"></script> */}
</div>
  );
}
export default MigrationHub;