function BatchCreate() {
  return (
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

      {/* <!-- Mobile Sidebar Offcanvas --> */}
      <div className="offcanvas offcanvas-start offcanvas-sidebar d-md-none" tabIndex="-1" id="sidebarOffcanvas">
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

      {/* <!-- Right Main Content Area --> */}
      <div className="col-md-10 col-lg-10 ms-auto px-0 main-content">
        
        {/* <!-- Header Top navigation --> */}
        <nav className="navbar navbar-expand navbar-light navbar-top px-4 py-2">
          <div className="container-fluid">
            <button className="btn d-md-none me-2 p-1 border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebarOffcanvas" style={{ color: "#1e293b", fontSize: "1.2rem" }}>
              <i className="bi bi-list"></i>
            </button>
            
            <span className="navbar-text ms-0 fw-semibold fs-5 text-dark">
              Create New Batch
            </span>
          </div>
        </nav>

        {/* <!-- Main Inner Content Wrapper --> */}
        <div className="content-wrapper">
          
          <div className="card shadow-sm border-0">
            <div className="card-header bg-white py-3 border-bottom d-flex justify-content-between align-items-center">
              <h6 className="m-0 fw-bold text-dark fs-6">Batch Configuration Form</h6>
              <a href="batches.html" className="btn btn-light btn-sm border">
                <i className="bi bi-arrow-left"></i> Back to Batches
              </a>
            </div>
            <div className="card-body p-4">
              <form id="create-batch-page-form" onsubmit="event.preventDefault(); submitCreateForm();">
                
                <div className="row">
                  <div className="col-md-12 mb-3">
                    <label for="batch_name" className="form-label fw-semibold text-muted small">Batch Name <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" id="batch_name" placeholder="e.g. Batch Full Stack Java 2026" required />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label for="course_ids" className="form-label fw-semibold text-muted small">Courses Program</label>
                    <select className="form-select" id="course_ids" multiple size="6">
                      <option value="1">Full Stack Web Development</option>
                      <option value="2">React Native Mobile Engineering</option>
                      <option value="3">Node.js Microservices Architecture</option>
                      <option value="4">Python Data Science & ML</option>
                      <option value="5">DevOps & Cloud Deployment</option>
                    </select>
                    <small className="text-muted" style={{ fontSize: "0.75rem" }}>Hold Ctrl (Windows) or Cmd (Mac) to select multiple courses.</small>
                  </div>

                  <div className="col-md-6 mb-3">
                    <label for="internship_ids" className="form-label fw-semibold text-muted small">Internship Tracks</label>
                    <select className="form-select" id="internship_ids" multiple size="6">
                      <option value="1">Pedestal Corporate Track</option>
                      <option value="2">AI Research Internship</option>
                      <option value="3">Cloud Architecture Lab</option>
                    </select>
                    <small className="text-muted" style={{ fontSize: "0.75rem" }}>Hold Ctrl (Windows) or Cmd (Mac) to select multiple internships.</small>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-4 mb-3">
                    <label for="capacity" className="form-label fw-semibold text-muted small">Capacity <span className="text-danger">*</span></label>
                    <input type="number" className="form-control" id="capacity" value="30" min="1" required />
                  </div>

                  <div className="col-md-4 mb-3">
                    <label for="start_date" className="form-label fw-semibold text-muted small">Start Date <span className="text-danger">*</span></label>
                    <input type="date" className="form-control" id="start_date" required />
                  </div>

                  <div className="col-md-4 mb-3">
                    <label for="end_date" className="form-label fw-semibold text-muted small">End Date <span className="text-danger">*</span></label>
                    <input type="date" className="form-control" id="end_date" required />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-4 mb-3">
                    <label for="status" className="form-label fw-semibold text-muted small">Initial Status <span className="text-danger">*</span></label>
                    <select className="form-select" id="status" required>
                      <option value="pending">Pending</option>
                      <option value="active" selected>Active</option>
                      <option value="completed">Completed</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </div>
                </div>

                <div className="mb-3">
                  <label for="description" className="form-label fw-semibold text-muted small">Description / Curriculum Syllabus</label>
                  <textarea className="form-control" id="description" rows="3" placeholder="Overview of topics, assignments, and prerequisites..."></textarea>
                </div>

                <div className="row">
                  <div className="col-md-4 mb-3">
                    <label for="meeting_type" className="form-label fw-semibold text-muted small">Meeting Type <span className="text-danger">*</span></label>
                    <select className="form-select" id="meeting_type" required>
                      <option value="offline">Offline (In-Person)</option>
                      <option value="online" selected>Online (Microsoft Teams)</option>
                    </select>
                  </div>

                  <div className="col-md-8 mb-3" id="meeting_link_wrapper">
                    <label for="meeting_link" className="form-label fw-semibold text-muted small">Teams Meeting Link</label>
                    <input type="url" className="form-control" id="meeting_link" placeholder="https://teams.microsoft.com/l/meetup-join/..." />
                    <small className="text-muted" style={{ fontSize: "0.75rem" }}>Leave blank to auto-create via Microsoft Graph API.</small>
                  </div>
                </div>

                <div className="d-flex justify-content-end gap-2 border-top pt-3 mt-3">
                  <a href="batches.html" className="btn btn-secondary btn-sm">
                    <i className="bi bi-x-lg"></i> Cancel
                  </a>
                  <button type="submit" className="btn btn-primary btn-sm">
                    <i className="bi bi-check-lg"></i> Create Batch
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>

        {/* <!-- Footer --> */}
        <footer className="text-center mt-auto border-top py-3 text-muted" style={{ background: "#fff" }}>
          &copy; 2026 Pedestal Class Room. All rights reserved.
        </footer>
      </div>

    </div>
  </div>

    {/* <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    <script src="js/app.js"></script>
    <script>
        $('#meeting_type').on('change', function() {
        $('#meeting_link_wrapper').toggle(this.value === 'online');
        });

        function submitCreateForm() {
        const name = $('#batch_name').val();
        showToastNotification(`Successfully created batch: "${name}"`);
        setTimeout(() => {
            window.location.href = 'batches.html';
        }, 1000);
        }
    </script> */}
</div>
  );
}
export default BatchCreate;