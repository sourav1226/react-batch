import React from 'react'
import { NavLink } from 'react-router-dom'

const navSections = [
  {
    heading: "Main",
    links: [
      { to: "/dashboard", icon: "bi-speedometer2", label: "Dashboard", end: false },
      { to: "/migration-hub", icon: "bi-git", label: "Migration Hub", end: false },
      { to: "/all-links", icon: "bi-link-45deg", label: "All Links", end: false },
    ],
  },
  {
    heading: "Academic",
    links: [
      { to: "/batches", icon: "bi-collection", label: "Batches", end: true },
      { to: "/attendance", icon: "bi-clipboard-check", label: "Attendance", end: false },
      { to: "/schedules", icon: "bi-calendar-event", label: "Schedules", end: false },
      { to: "/notices", icon: "bi-megaphone", label: "Notice Board", end: false },
      { to: "/study-materials", icon: "bi-file-earmark-text", label: "Study Materials", end: false },
      { to: "/notifications", icon: "bi-bell", label: "Notifications", end: false },
    ],
  },
  {
    heading: "Administration",
    links: [
      { to: "/admin/trainers", icon: "bi-person-badge", label: "Trainers Directory", end: false },
      { to: "/admin/students", icon: "bi-people", label: "Students Directory", end: false },
      { to: "/admin/logs", icon: "bi-journal-text", label: "Audit Logs", end: false },
      { to: "/admin/status", icon: "bi-hdd-network", label: "System Status", end: false },
    ],
  },
];

function SidebarLinks({ mobile }) {
  return (
    <nav className="nav flex-column">
      {navSections.map((section) => (
        <React.Fragment key={section.heading}>
          <div className="sidebar-heading">{section.heading}</div>
          {section.links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
              {...(mobile ? { "data-bs-dismiss": "offcanvas" } : {})}
            >
              <i className={`bi ${link.icon}`}></i> {link.label}
            </NavLink>
          ))}
        </React.Fragment>
      ))}
    </nav>
  );
}

function Sidebar() {
  return (
    <>
      <div className="col-md-2 col-lg-2 d-none d-md-block sidebar p-0">
        <div className="brand">
          <img src="https://pedestaltechnoworld.com/front-end/asset/images/header-logo.png" alt="Pedestal" />
        </div>
        <SidebarLinks />
      </div>

      <div className="offcanvas offcanvas-start offcanvas-sidebar d-md-none" tabIndex="-1" id="sidebarOffcanvas">
        <div className="brand">
          <img src="https://pedestaltechnoworld.com/front-end/asset/images/header-logo.png" alt="Pedestal" />
          <button type="button" className="btn-close btn-close-white ms-auto" data-bs-dismiss="offcanvas"></button>
        </div>
        <SidebarLinks mobile />
      </div>
    </>
  )
}

export default Sidebar
