import React from 'react'
import { Link } from 'react-router-dom'

function Header({ title = "Dashboard" }) {
  return (
    <>
    <nav className="navbar navbar-expand navbar-light navbar-top px-4 py-2">
          <div className="container-fluid">
            <button className="btn d-md-none me-2 p-1 border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebarOffcanvas" style={{color:"#1e293b",fontSize:"1.2rem"}}>
              <i className="bi bi-list"></i>
            </button>
            
            <span className="navbar-text ms-0 fw-semibold fs-5 text-dark">
              {title}
            </span>
            
            <ul className="navbar-nav ms-auto align-items-center gap-2">
              <Link className="btn btn-primary btn-sm d-flex align-items-center gap-1" to="/batches/new">
                <i className="bi bi-plus-lg"></i> Create Batch
              </Link>
            </ul>
          </div>
    </nav>
    </>
  )
}

export default Header
