import React from 'react'

function Header() {
  return (
    <>
    <nav className="navbar navbar-expand navbar-light navbar-top px-4 py-2">
          <div className="container-fluid">
            <button className="btn d-md-none me-2 p-1 border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebarOffcanvas" style={{color:"#1e293b",fontSize:"1.2rem"}}>
              <i className="bi bi-list"></i>
            </button>
            
            <span className="navbar-text ms-0 fw-semibold fs-5 text-dark">
              Batches
            </span>
            
            <ul className="navbar-nav ms-auto align-items-center gap-2">
              <button className="btn btn-primary btn-sm d-flex align-items-center gap-1" data-bs-toggle="modal" data-bs-target="#create-batch-modal">
                <i className="bi bi-plus-lg"></i> Create Batch
              </button>
            </ul>
          </div>
    </nav>
    </>
  )
}

export default Header