import React from 'react'
import "../css/style.css"
import Sidebar from "../components/Sidebar"
import { Link } from "react-router-dom"

const linkGroups = [
  {
    title: "Core & Authentication",
    description: "Welcome gates, role selection, and user homepages",
    color: "#4f46e5",
    icon: "bi-shield-lock-fill",
    links: [
      { to: "/", label: "Role Selection (Home)", path: "/", desc: "The main entry point where users select their workspace role." },
      { to: "/login", label: "Login Screen", path: "/login", desc: "User authentication gateway." },
      { to: "/dashboard", label: "Dashboard", path: "/dashboard", desc: "The main workspace dashboard featuring stats, upcoming classes, and quick actions." }
    ]
  },
  {
    title: "Academic Management",
    description: "Batches, attendance rosters, calendar schedules, and study content",
    color: "#059669",
    icon: "bi-mortarboard-fill",
    links: [
      { to: "/batches", label: "Batches Directory", path: "/batches", desc: "Overview of all active and upcoming educational batches." },
      { to: "/batches/new", label: "Create Batch", path: "/batches/new", desc: "Form to register and initialize a new academic batch." },
      { to: "/batches/1", label: "Batch Detail View", path: "/batches/:id", desc: "Detailed breakdown of a single batch, student roster, and lectures." },
      { to: "/attendance", label: "Mark Attendance", path: "/attendance", desc: "Roster status marker (Present, Absent, Late) for active sessions." },
      { to: "/schedules", label: "Academic Calendar", path: "/schedules", desc: "Calendar view of scheduled class slots and live events." },
      { to: "/notices", label: "Notice Board", path: "/notices", desc: "Public announcements, system banners, and bulletin board." },
      { to: "/study-materials", label: "Study Materials", path: "/study-materials", desc: "Class slides, course files, code templates, and PDFs." },
      { to: "/notifications", label: "Notifications Hub", path: "/notifications", desc: "Read and manage critical user notices and alerts." },
      { to: "/migration-hub", label: "Migration Progress Hub", path: "/migration-hub", desc: "Git/Database migration tools and sync tracking portal." }
    ]
  },
  {
    title: "Administration & Logs",
    description: "System directory oversight, developer logs, and infrastructure metrics",
    color: "#db2777",
    icon: "bi-gear-fill",
    links: [
      { to: "/admin/trainers", label: "Trainers Directory", path: "/admin/trainers", desc: "List of system trainers and their academic stats." },
      { to: "/admin/students", label: "Students Directory", path: "/admin/students", desc: "Student directory lookup, profile references, and search." },
      { to: "/admin/logs", label: "System Audit Logs", path: "/admin/logs", desc: "Oversight log showing user activity, auth events, and API changes." },
      { to: "/admin/status", label: "System Network Status", path: "/admin/status", desc: "Live health check status indicators of pedestal nodes." }
    ]
  }
]

function AllLinks() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Sidebar />

          {/* Right Main Content Area */}
          <div className="col-md-10 col-lg-10 ms-auto px-0 main-content">
            
            {/* Header Top navigation */}
            <nav className="navbar navbar-expand navbar-light navbar-top px-4 py-2">
              <div className="container-fluid">
                <button className="btn d-md-none me-2 p-1 border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebarOffcanvas" style={{ color: "#1e293b", fontSize: "1.2rem" }}>
                  <i className="bi bi-list"></i>
                </button>
                
                <span className="navbar-text ms-0 fw-semibold fs-5 text-dark">
                  Application Sitemap
                </span>
                
                <ul className="navbar-nav ms-auto align-items-center gap-2">
                  <span className="badge bg-secondary px-3 py-2">
                    <i className="bi bi-link-45deg me-1"></i> {linkGroups.reduce((acc, curr) => acc + curr.links.length, 0)} Total Links
                  </span>
                </ul>
              </div>
            </nav>

            {/* Main Inner Content Wrapper */}
            <div className="content-wrapper">
              
              <div className="card p-4 mb-4 shadow-sm border-0 bg-white">
                <div className="d-flex align-items-center gap-3">
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#050978', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
                    <i className="bi bi-map-fill"></i>
                  </div>
                  <div>
                    <h5 className="fw-bold mb-1 text-dark">Developer Quick Links & Sitemap</h5>
                    <p className="text-muted mb-0 small">Easily navigate to any component or view in the Pedestal Class Room client application.</p>
                  </div>
                </div>
              </div>

              {linkGroups.map((group, groupIdx) => (
                <div key={groupIdx} className="mb-5">
                  <div className="d-flex align-items-center gap-2 mb-3 border-bottom pb-2">
                    <div style={{ 
                      width: '32px', 
                      height: '32px', 
                      borderRadius: '8px', 
                      background: group.color + '15', 
                      color: group.color, 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      fontSize: '1.1rem' 
                    }}>
                      <i className={`bi ${group.icon}`}></i>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-0 text-dark" style={{ letterSpacing: '0.2px' }}>{group.title}</h6>
                      <small className="text-muted">{group.description}</small>
                    </div>
                  </div>

                  <div className="row g-3">
                    {group.links.map((link, linkIdx) => (
                      <div className="col-md-6 col-lg-4" key={linkIdx}>
                        <div className="card h-100 border shadow-sm p-3 bg-white" style={{ transition: 'transform 0.15s ease, box-shadow 0.15s ease' }}
                          onMouseOver={(e) => {
                            e.currentTarget.style.transform = 'translateY(-2px)'
                            e.currentTarget.style.boxShadow = '0 6px 15px rgba(0,0,0,0.06)'
                          }}
                          onMouseOut={(e) => {
                            e.currentTarget.style.transform = 'none'
                            e.currentTarget.style.boxShadow = 'none'
                          }}
                        >
                          <div className="d-flex justify-content-between align-items-start mb-2">
                            <span className="fw-bold text-dark fs-6">{link.label}</span>
                            <span className="badge bg-light text-secondary font-monospace" style={{ fontSize: '0.7rem', border: '1px solid #e2e8f0' }}>{link.path}</span>
                          </div>
                          
                          <p className="text-muted mb-3 flex-grow-1" style={{ fontSize: '0.78rem', lineHeight: '1.35' }}>
                            {link.desc}
                          </p>

                          <Link to={link.to} className="btn btn-outline-primary btn-sm w-100 py-1.5 fw-semibold d-flex align-items-center justify-content-center gap-1">
                            Go to Page <i className="bi bi-box-arrow-in-up-right small"></i>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

            </div>

            {/* Footer */}
            <footer className="text-center mt-auto border-top py-3 text-muted" style={{ background: "#fff" }}>
              &copy; 2026 Pedestal Classroom. All rights reserved.
            </footer>
          </div>
        </div>
      </div>
    </>
  )
}

export default AllLinks
