import "../css/style.css";
import { useEffect } from "react";

import Sidebar from "../components/Sidebar";
import { getBatchSchedules, getBatchScheduleCalendar } from "../api/scheduleApi";
function Schedules() {
    
    const params = new URLSearchParams(window.location.search);
    const batchId = params.get("batch_id");
    useEffect(() => {
        if (!batchId) return;

        getBatchSchedules(batchId)
            .then((data) => {
                console.log("Schedules API response:", data);
            })
            .catch((error) => {
                console.error("Failed to fetch schedules:", error);
            });
    }, [batchId]);
    useEffect(() => {
    if (!batchId) return;

    getBatchScheduleCalendar(batchId)
        .then((data) => {
            console.log("Schedule Calendar API response:", data);
        })
        .catch((error) => {
            console.error("Failed to fetch schedule calendar:", error);
        });
}, [batchId]);
  return (
    <>
    <div>

  <div className="container-fluid">
    <div className="row">
      
      <Sidebar />

      {/* <!-- Right Main Content Area --> */}
      <div className="col-md-10 col-lg-10 ms-auto px-0 main-content">
        
        {/* <!-- Header Top navigation --> */}
        <nav className="navbar navbar-expand navbar-light navbar-top px-4 py-2">
          <div className="container-fluid">
            <button className="btn d-md-none me-2 p-1 border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebarOffcanvas" style={{ color: "#1e293b", fontSize: "1.2rem" }}>
              <i className="bi bi-list"></i>
            </button>
            
            <span className="navbar-text ms-0 fw-semibold fs-5 text-dark">
              Academic Calendar
            </span>
            
            <ul className="navbar-nav ms-auto align-items-center gap-2">
              <button className="btn btn-primary btn-sm d-flex align-items-center gap-1" data-bs-toggle="modal" data-bs-target="#add-schedule-modal">
                <i className="bi bi-calendar-plus"></i> Add Session
              </button>
            </ul>
          </div>
        </nav>

        {/* <!-- Main Inner Content Wrapper --> */}
        <div className="content-wrapper">
          
          {/* <!-- Calendar Controls --> */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="d-flex align-items-center gap-2">
              <button className="btn btn-light border btn-sm" onClick={() => alert("Prior Month")}><i className="bi-chevron-left"></i></button>
              <h5 className="fw-bold mb-0 text-dark">July 2026</h5>
              <button className="btn btn-light border btn-sm" onClick={() => alert("Next Month")}><i className="bi-chevron-right"></i></button>
            </div>
            
            <button className="btn btn-outline-secondary btn-sm" onClick={() => alert("Microsoft Teams Calendar synchronizing...")}>
              <i className="bi bi-arrow-repeat me-1"></i> Sync Teams
            </button>
          </div>

          {/* <!-- Calendar Grid Wrapper --> */}
          <div className="calendar-grid-wrap">
            <div className="calendar-header-day">Sun</div>
            <div className="calendar-header-day">Mon</div>
            <div className="calendar-header-day">Tue</div>
            <div className="calendar-header-day">Wed</div>
            <div className="calendar-header-day">Thu</div>
            <div className="calendar-header-day">Fri</div>
            <div className="calendar-header-day">Sat</div>
            
            {/* <!-- Row 1: Muted Leading Days --> */}
            <div className="calendar-day-cell muted-day">
              <span className="date-num">28</span>
              <div className="calendar-pills"></div>
            </div>
            <div className="calendar-day-cell muted-day">
              <span className="date-num">29</span>
              <div className="calendar-pills"></div>
            </div>
            <div className="calendar-day-cell muted-day">
              <span className="date-num">30</span>
              <div className="calendar-pills"></div>
            </div>
            
            {/* <!-- July 1 --> */}
              <div className="calendar-day-cell">
              <div className="calendar-pills">
                <a href="#/" className="calendar-pill" style={{backgroundColor:"#050978"}} onClick={(e) => { e.preventDefault(); alert("React Native class session"); }}>
                  <i className="bi bi-clock me-1"></i>React Native (10:00)
                </a>
              </div>
              <span className="date-num">1</span>
            </div>

            {/* <!-- July 2 --> */}
            <div className="calendar-day-cell">
              <div className="calendar-pills">
                <a href="#/" className="calendar-pill" style={{backgroundColor:"#198754"}} onClick={(e) => { e.preventDefault(); alert("Laravel class session"); }}>
                  <i className="bi bi-clock me-1"></i>Laravel (14:30)
                </a>
              </div>
              <span className="date-num">2</span>
            </div>

            {/* <!-- July 3 --> */}
            <div className="calendar-day-cell">
              <div className="calendar-pills">
                <a href="#/" className="calendar-pill" style={{backgroundColor:"#7c3aed"}} onClick={(e) => { e.preventDefault(); alert("Flutter class session"); }}>
                  <i className="bi bi-clock me-1"></i>Flutter (11:00)
                </a>
              </div>
              <span className="date-num">3</span>
            </div>

            {/* <!-- July 4 --> */}
            <div className="calendar-day-cell">
              <div className="calendar-pills"></div>
              <span className="date-num">4</span>
            </div>

            {/* <!-- Row 2 --> */}
            <div className="calendar-day-cell">
              <div className="calendar-pills"></div>
              <span className="date-num">5</span>
            </div>
            <div className="calendar-day-cell">
              <div className="calendar-pills"></div>
              <span className="date-num">6</span>
            </div>
            <div className="calendar-day-cell">
              <div className="calendar-pills"></div>
              <span className="date-num">7</span>
            </div>
              <div className="calendar-day-cell">
              <div className="calendar-pills">
                <a href="#/" className="calendar-pill" style={{backgroundColor:"#050978"}} onClick={(e) => { e.preventDefault(); alert("React Native class session"); }}>
                  <i className="bi bi-clock me-1"></i>React Native (10:00)
                </a>
              </div>
              <span className="date-num">8</span>
            </div>
            <div className="calendar-day-cell">
              <div className="calendar-pills"></div>
              <span className="date-num">9</span>
            </div>
            <div className="calendar-day-cell">
              <div className="calendar-pills"></div>
              <span className="date-num">10</span>
            </div>
            <div className="calendar-day-cell">
              <div className="calendar-pills"></div>
              <span className="date-num">11</span>
            </div>

            {/* <!-- Fill in additional blank cells dynamically or staticaly for the grid layout (35 cells total) --> */}
            <div className="calendar-day-cell"><div className="calendar-pills"></div><span className="date-num">12</span></div>
            <div className="calendar-day-cell"><div className="calendar-pills"></div><span className="date-num">13</span></div>
            <div className="calendar-day-cell"><div className="calendar-pills"></div><span className="date-num">14</span></div>
            <div className="calendar-day-cell"><div className="calendar-pills"></div><span className="date-num">15</span></div>
            <div className="calendar-day-cell"><div className="calendar-pills"></div><span className="date-num">16</span></div>
            <div className="calendar-day-cell"><div className="calendar-pills"></div><span className="date-num">17</span></div>
            <div className="calendar-day-cell"><div className="calendar-pills"></div><span className="date-num">18</span></div>
            
            <div className="calendar-day-cell"><div className="calendar-pills"></div><span className="date-num">19</span></div>
            <div className="calendar-day-cell"><div className="calendar-pills"></div><span className="date-num">20</span></div>
            <div className="calendar-day-cell"><div className="calendar-pills"></div><span className="date-num">21</span></div>
            <div className="calendar-day-cell"><div className="calendar-pills"></div><span className="date-num">22</span></div>
            <div className="calendar-day-cell"><div className="calendar-pills"></div><span className="date-num">23</span></div>
            <div className="calendar-day-cell"><div className="calendar-pills"></div><span className="date-num">24</span></div>
            <div className="calendar-day-cell"><div className="calendar-pills"></div><span className="date-num">25</span></div>
            
            <div className="calendar-day-cell"><div className="calendar-pills"></div><span className="date-num">26</span></div>
            <div className="calendar-day-cell"><div className="calendar-pills"></div><span className="date-num">27</span></div>
            <div className="calendar-day-cell"><div className="calendar-pills"></div><span className="date-num">28</span></div>
            <div className="calendar-day-cell"><div className="calendar-pills"></div><span className="date-num">29</span></div>
            <div className="calendar-day-cell"><div className="calendar-pills"></div><span className="date-num">30</span></div>
            <div className="calendar-day-cell"><div className="calendar-pills"></div><span className="date-num">31</span></div>
            
            {/* <!-- Trailing Muted Day --> */}
            <div className="calendar-day-cell muted-day">
              <span className="date-num">1</span>
              <div className="calendar-pills"></div>
            </div>

          </div>

        </div>

        {/* <!-- Footer --> */}
        <footer className="text-center mt-auto border-top py-3 text-muted" style={{ background: "#fff" }}>
          &copy; 2026 Pedestal Classroom. All rights reserved.
        </footer>
      </div>

    </div>
  </div>

  {/* <!-- Add Schedule Modal Dialog --> */}
  <div className="modal fade" id="add-schedule-modal" tabIndex="-1" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header" style={{ backgroundColor: "#050978", color: "#fff" }}>
          <h5 className="modal-title">Schedule Session</h5>
          <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <div className="mb-3">
            <label className="form-label fw-semibold text-muted small" htmlFor="schedule-batch">Class Batch</label>
            <select id="schedule-batch" className="form-select">
              <option value="React Native">Batch React Native</option>
              <option value="Node.js Gateway">Batch Node.js Gateway</option>
              <option value="Laravel Framework">Batch Laravel Framework</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold text-muted small" htmlFor="schedule-date">Class Session Date</label>
            <input type="date" id="schedule-date" className="form-control" defaultValue="2026-07-04"/>
          </div>
          <div className="row g-2">
            <div className="col">
              <label className="form-label fw-semibold text-muted small" htmlFor="schedule-start-time">Start Time</label>
              <input type="time" id="schedule-start-time" className="form-control" defaultValue="10:00"/>
            </div>
            <div className="col">
              <label className="form-label fw-semibold text-muted small" htmlFor="schedule-end-time">End Time</label>
              <input type="time" id="schedule-end-time" className="form-control" defaultValue="12:00"/>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary btn-sm" data-bs-dismiss="modal">Cancel</button>
          <button type="button" id="btn-add-schedule-submit" className="btn btn-primary btn-sm" onClick={() => alert("Session scheduled.")}>Schedule Session</button>
        </div>
      </div>
    </div>
  </div>

  {/* <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
  <script src="js/app.js"></script> */}
</div>
    </>
  );
}

export default Schedules;