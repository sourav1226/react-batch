import React from 'react'

function CreateBatchModal(
    {
        batchName,
        setBatchName,
        courseProgram,
        setCourseProgram,
        commencementDate,
        setCommencementDate,
        graduationDate,
        setGraduationDate,
        addBatch,
    }) {
    return (
    <>
    <div className="modal fade" id="create-batch-modal" tabIndex="-1" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header" style={{backgroundColor:"#050978", color:"#fff"}}>
          <h5 className="modal-title">Create Batch</h5>
          <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <div className="mb-3">
            <label className="form-label fw-semibold text-muted small" htmlFor="m-batch-name">Batch Designation</label>
            <input 
                type="text" 
                id="m-batch-name" 
                className="form-control" 
                placeholder="e.g. Batch Flutter Core"
                value={batchName}
                onChange={(e) => setBatchName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold text-muted small" htmlFor="m-batch-program">Course Program</label>
            <input 
                type="text" 
                id="m-batch-program" 
                className="form-control" 
                placeholder="e.g. Cross-Platform App Development"
                value={courseProgram}
                onChange={(e) => setCourseProgram(e.target.value)}
            />
          </div>
          <div className="row g-2 mb-3">
            <div className="col">
              <label className="form-label fw-semibold text-muted small">Commencement Date</label>
              <input 
                    type="date" 
                    id="m-batch-start" 
                    className="form-control"
                    value={commencementDate}
                    onChange={(e) => setCommencementDate(e.target.value)}
              />
            </div>
            <div className="col">
              <label className="form-label fw-semibold text-muted small">Graduation Date</label>
              <input 
                type="date" 
                id="m-batch-end" 
                className="form-control"
                value={graduationDate}
                onChange={(e) => setGraduationDate(e.target.value)}
            />
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary btn-sm" data-bs-dismiss="modal">Cancel</button>
          <button type="button" className="btn btn-primary btn-sm" onClick={addBatch}>Submit</button>
        </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default CreateBatchModal