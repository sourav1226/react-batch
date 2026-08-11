import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CreateBatchModal from '../components/CreateBatchModal'
import "./Batches.css";
function Batches() {
    const [batchName, setBatchName] = useState("");
    const [courseProgram, setCourseProgram] = useState("");
    const [commencementDate, setCommencementDate] = useState("");
    const [graduationDate, setGraduationDate] = useState("");
    const [statusFilter, setStatusFilter] = useState("");
    const [search, setSearch] = useState("");
    const [editingBatchId, setEditingBatchId] = useState(null);
    const [batches,setBatches]=useState([
        {
            id: 1,
            batchName: "Batch React Native",
            courseProgram: "React Native Apps",
            commencementDate: "01 Jun 2026",
            graduationDate: "31 Aug 2026",
            rosterCount: 24,
            status: "Active",
        },
        {
            id: 2,
            batchName: "Batch Node.js Gateway",
            courseProgram: "Node.js Back-End",
            commencementDate: "10 May 2026",
            graduationDate: "10 Aug 2026",
            rosterCount: 18,
            status: "Active",
        },
        {
            id: 3,
            batchName: "Batch Laravel Framework",
            courseProgram: "Laravel Framework",
            commencementDate: "01 Mar 2026",
            graduationDate: "01 Jun 2026",
            rosterCount: 32,
            status: "Completed",
        },
    ]);
    const nextBatchId = () =>
        batches.reduce((maxId, batch) => Math.max(maxId, batch.id), 0) + 1;

    const addBatch = () => {
        if (
            batchName.trim() === "" ||
            courseProgram.trim() === "" ||
            commencementDate === "" ||
            graduationDate === ""
        ) {
            alert("Please fill all fields.");
            return;
        }

        if (editingBatchId !== null) {
            const updatedBatches = batches.map((batch) =>
                batch.id === editingBatchId
                ? {
                    ...batch,
                    batchName,
                    courseProgram,
                    commencementDate,
                    graduationDate,
                }
        : batch
    );

    setBatches(updatedBatches);
    setEditingBatchId(null);
  } else {
    const newBatch = {
      id: nextBatchId(),
      batchName,
      courseProgram,
      commencementDate,
      graduationDate,
      rosterCount: 0,
      status: "Active",
    };

    setBatches([...batches, newBatch]);
  }

        setBatchName("");
        setCourseProgram("");
        setCommencementDate("");
        setGraduationDate("");
    };
    const deleteBatch = (id) => {
        const updatedBatches = batches.filter((batch) => batch.id !== id);
        setBatches(updatedBatches);
    };
    const filteredBatches = batches.filter((batch) => {
        const matchesSearch = batch.batchName
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchesStatus =
            statusFilter === "" ||
            batch.status.toLowerCase() === statusFilter.toLowerCase();

        return matchesSearch && matchesStatus;
    });
    const editBatch = (batch) => {
        setEditingBatchId(batch.id);

        setBatchName(batch.batchName);
        setCourseProgram(batch.courseProgram);
        setCommencementDate(batch.commencementDate);
        setGraduationDate(batch.graduationDate);
    };
  return (
    <>
    <div className="container-fluid">
    <div className="row">
      
      
      <Sidebar/>


      <div className="col-md-10 col-lg-10 ms-auto px-0 main-content">
        
        <Header title="Batches"/>

        <div className="content-wrapper">
          
          <div className="card p-3 mb-3 shadow-sm border-0">
            <div className="row g-2">
              <div className="col-md-6">
                <label className="form-label text-muted small fw-bold">Search</label>
                <div className="input-group">
                  <span className="input-group-text bg-light border-end-0"><i className="bi bi-search text-muted"></i></span>
                  <input 
                    type="text" 
                    className="form-control border-start-0" 
                    placeholder="Filter by batch name..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-3">
                <label className="form-label text-muted small fw-bold">Status</label>
                <select 
                    className="form-select"
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option value="">All Statuses</option>
                  <option value="active">Active</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
              <div className="col-md-3 d-flex align-items-end">
                <button className="btn btn-light w-100 border text-muted fw-bold">
                  Apply Filters
                </button>
              </div>
            </div>
          </div>

          <div className="card border-0 shadow-sm">
            <div className="table-responsive-stack">
              <table className="table table-hover mb-0 align-middle">
                <thead className="table-light">
                  <tr>
                    <th className="ps-4">Batch Name</th>
                    <th>Course Program</th>
                    <th>Commencement - End Date</th>
                    <th>Roster Count</th>
                    <th>Status</th>
                    <th className="pe-4 text-end">Actions</th>
                  </tr>
                </thead>
                <tbody>
                    {filteredBatches.map((batch) => (
                        <tr key={batch.id}>
                            <td className="ps-4">
                                <Link
                                    to={`/batches/${batch.id}`}
                                    className="fw-bold text-decoration-none text-dark text-hover-primary"
                                >
                                    {batch.batchName}
                                </Link>
                            </td>

                            <td>{batch.courseProgram}</td>

                            <td>
                                {batch.commencementDate} &mdash; {batch.graduationDate}
                            </td>

                            <td>{batch.rosterCount} Students</td>

                            <td>
                                <span
                                    className={`badge ${
                                    batch.status === "Active"
                                    ? "bg-success"
                                    : "bg-secondary"
                                    }`}
                                >
                                    {batch.status}
                                </span>
                            </td>

                            <td className="pe-4 text-end">
                                <div className="btn-group btn-group-actions">
                                    <Link
                                        to={`/batches/${batch.id}`}
                                        className="btn btn-outline-secondary btn-sm"
                                    >
                                        <i className="bi bi-eye"></i>
                                    </Link>

                                    <Link
                                        to="/attendance"
                                        className="btn btn-outline-secondary btn-sm"
                                    >
                                        <i className="bi bi-clipboard-check"></i>
                                    </Link>

                                    <button
                                        className="btn btn-outline-secondary btn-sm"
                                        data-bs-toggle="modal"
                                        data-bs-target="#create-batch-modal"
                                        onClick={() => editBatch(batch)}
                                    >
                                        <i className="bi bi-pencil"></i>
                                    </button>

                                    <button 
                                        className="btn btn-outline-danger btn-sm"
                                        onClick={() => deleteBatch(batch.id)}
                                    >
                                        <i className="bi bi-trash"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

        <Footer/>
      </div>

    </div>
  </div>

    <CreateBatchModal
        batchName={batchName}
        setBatchName={setBatchName}
        courseProgram={courseProgram}
        setCourseProgram={setCourseProgram}
        commencementDate={commencementDate}
        setCommencementDate={setCommencementDate}
        graduationDate={graduationDate}
        setGraduationDate={setGraduationDate}
        addBatch={addBatch}
    />
    </>
  )
}

export default Batches