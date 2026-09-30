import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/slices/authSlice'

function Header({ title = "Dashboard" }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const getRoleString = (role) => {
    if (!role) return "student";
    if (typeof role === "string") return role;
    if (typeof role === "object") return role.name || role.title || role.role || "student";
    return String(role);
  };

  const rawRole = sessionStorage.getItem("userRole") || user?.role || "student";
  const currentRole = getRoleString(rawRole);
  const roleBadgeText = currentRole ? (currentRole.charAt(0).toUpperCase() + currentRole.slice(1)) : "Student";
  const roleLower = currentRole.toLowerCase();
  const roleBadgeClass = roleLower === "admin" ? "bg-danger" : roleLower === "instructor" ? "bg-success" : "bg-primary";
  const displayName = (typeof user?.name === 'string' && user.name) ||
                      (typeof user?.email === 'string' && user.email) ||
                      (roleLower === "admin" ? "Alex Admin" : roleLower === "instructor" ? "Trainer Sourav" : "Aman Student");

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

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
              <li className="nav-item dropdown">
                <button type="button" className="nav-link dropdown-toggle text-dark fw-semibold btn border-0 bg-transparent" id="headerUserDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="bi bi-person-circle fs-5 me-1 text-secondary"></i>
                  <span>{displayName}</span>
                  <span className={`badge ms-1 ${roleBadgeClass}`}>{roleBadgeText}</span>
                </button>
                <ul className="dropdown-menu dropdown-menu-end border shadow-sm">
                  <li>
                    <button type="button" className="dropdown-item text-danger d-flex align-items-center gap-2" onClick={handleLogout}>
                      <i className="bi bi-box-arrow-right"></i> Logout
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
    </nav>
    </>
  )
}

export default Header
