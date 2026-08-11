import React from 'react'
import { useNavigate } from 'react-router-dom'

const roles = [
  {
    key: "admin",
    icon: "bi-shield-lock-fill",
    bg: "#fee2e2",
    color: "#ef4444",
    title: "Administrator",
    desc: "Manage batches, view audit logs, and oversee roles.",
  },
  {
    key: "instructor",
    icon: "bi-person-video3",
    bg: "#d1fae5",
    color: "#10b981",
    title: "Instructor",
    desc: "Mark rosters, join lectures, and publish notices.",
  },
  {
    key: "student",
    icon: "bi-mortarboard-fill",
    bg: "#dbeafe",
    color: "#3b82f6",
    title: "Student",
    desc: "Join classes, download slides, and review schedules.",
  },
];

function Index() {
  const navigate = useNavigate();

  const selectWorkspaceRole = (role) => {
    sessionStorage.setItem("userRole", role);
    navigate("/login");
  };

  return (
    <>
      <div className="auth-body-bg">

        <div className="auth-card" style={{ maxWidth: '680px' }}>
          <div className="auth-header text-center">
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.75rem' }}>
              <div style={{ width: '48px', height: '48px', background: '#fff', color: '#050978', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '1.5rem' }}>P</div>
            </div>
            <h4>Pedestal Class Room</h4>
            <p className="mb-0 text-white-50">Select your authorization workspace to log in</p>
          </div>

          <div className="auth-body">
            <div className="row g-3">
              {roles.map((role) => (
                <div className="col-md-4" key={role.key}>
                  <div
                    className="card h-100 text-center p-3 border shadow-sm"
                    style={{ cursor: 'pointer', transition: 'transform 0.2s' }}
                    onClick={() => selectWorkspaceRole(role.key)}
                    onMouseOver={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
                    onMouseOut={(e) => (e.currentTarget.style.transform = "none")}
                  >
                    <div className="d-flex justify-content-center mb-2">
                      <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: role.bg, color: role.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem' }}>
                        <i className={`bi ${role.icon}`}></i>
                      </div>
                    </div>
                    <h6 className="fw-bold mb-1">{role.title}</h6>
                    <p className="text-muted mb-0" style={{ fontSize: "0.75rem" }}>{role.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="auth-footer text-center text-muted" style={{ borderTop: '1px dashed #dee2e6', paddingTop: '20px' }}>
            &copy; 2026 Pedestal Classroom. All rights reserved.
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
