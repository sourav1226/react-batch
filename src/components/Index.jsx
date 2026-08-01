

function Index() {

  return (
    <>

      <div className="auth-body-bg">

  <div className="auth-card" style={{ maxWidth: '680px' }}>
    {/* <!-- Portal Header --> */}
    <div className="auth-header text-center">
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.75rem' }}>
        <div style={{ width: '48px', height: '48px', background: '#fff', color: '#050978', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '1.5rem' }}>P</div>
      </div>
      <h4>Pedestal Class Room</h4>
      <p className="mb-0 text-white-50">Select your authorization workspace to log in</p>
    </div>

    {/* <!-- Portal Body --> */}
    <div className="auth-body">
      <div className="row g-3">
        
        {/* <!-- Admin card --> */}
        <div className="col-md-4">
          <div className="card h-100 text-center p-3 border shadow-sm" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onclick="selectWorkspaceRole('admin')" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='none'">
            <div className="d-flex justify-content-center mb-2">
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#fee2e2', color: '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem' }}>
                <i className="bi bi-shield-lock-fill"></i>
              </div>
            </div>
            <h6 className="fw-bold mb-1">Administrator</h6>
            <p className="text-muted mb-0" style={{ fontSize: "0.75rem" }}>Manage batches, view audit logs, and oversee roles.</p>
          </div>
        </div>

        {/* <!-- Instructor card --> */}
        <div className="col-md-4">
          <div className="card h-100 text-center p-3 border shadow-sm" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onclick="selectWorkspaceRole('instructor')" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='none'">
            <div className="d-flex justify-content-center mb-2">
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#d1fae5', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem' }}>
                <i className="bi bi-person-video3"></i>
              </div>
            </div>
            <h6 className="fw-bold mb-1">Instructor</h6>
            <p className="text-muted mb-0" style={{ fontSize: "0.75rem" }}>Mark rosters, join lectures, and publish notices.</p>
          </div>
        </div>

        {/* <!-- Student card --> */}
        <div className="col-md-4">
          <div className="card h-100 text-center p-3 border shadow-sm" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onclick="selectWorkspaceRole('student')" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='none'">
            <div className="d-flex justify-content-center mb-2">
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#dbeafe', color: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem' }}>
                <i className="bi bi-mortarboard-fill"></i>
              </div>
            </div>
            <h6 className="fw-bold mb-1">Student</h6>
            <p className="text-muted mb-0" style={{ fontSize: "0.75rem" }}>Join classes, download slides, and review schedules.</p>
          </div>
        </div>

      </div>
    </div>

    {/* <!-- Portal Footer --> */}
    <div className="auth-footer text-center text-muted" style={{ borderTop: '1px dashed #dee2e6', paddingTop: '20px' }}>
      &copy; 2026 Pedestal Classroom. All rights reserved.
    </div>
  </div>

  {/* <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
  <script>
    function selectWorkspaceRole(role) {
      sessionStorage.setItem("userRole", role);
      window.location.href = "login.html";
    }
  </script> */}
</div>

    </>
  );
}

export default Index;