import React,{useState,useRef} from 'react'
import Toast from '../components/Toast';
import Sidebar from '../components/Sidebar';
import * as bootstrap from "bootstrap";
function StudyMaterials() {
  const [materials, setMaterials] = useState([
  {
    id: 1,
    title: "React Native State Management & Redux.pdf",
    type: "PDF Document",
    icon: "bi-file-earmark-pdf",
    iconColor: "text-danger",
    batch: "Batch React Native",
    badge: "bg-primary",
    size: "2.4 MB",
    date: "28 Jun 2026",
  },
  {
    id: 2,
    title: "Express Knex Migration Guide.zip",
    type: "Source Archive",
    icon: "bi-file-earmark-code",
    iconColor: "text-primary",
    batch: "Batch Node.js Gateway",
    badge: "bg-info text-dark",
    size: "5.8 MB",
    date: "25 Jun 2026",
  }
]);


const [selectedBatch, setSelectedBatch] = useState("Batch React Native");
const [selectedFile, setSelectedFile] = useState(null);
const [showToast, setShowToast] = useState(false);
const [toastMessage, setToastMessage] = useState("");

const fileInputRef = useRef(null);
function deleteMaterial(id) {
  setMaterials(
    materials.filter((material) => material.id !== id)
  );
  setToastMessage("File deleted.");
  setShowToast(true);
}

function downloadMaterial(title) {
  setToastMessage("Downloading document...");
  setShowToast(true);
}
function uploadMaterial() {

  if (!selectedFile) {
    alert("Please choose a file.");
    return;
  }

  const newMaterial = {
    id: materials.reduce((maxId, m) => Math.max(maxId, m.id), 0) + 1,
    title: selectedFile.name,
    type: "Uploaded Document",
    icon: "bi-file-earmark-text",
    iconColor: "text-success",
    batch: selectedBatch,
    badge: "bg-primary",
    size: (selectedFile.size / (1024 * 1024)).toFixed(1) + " MB",
    date: "Today",
  };

  setMaterials([newMaterial, ...materials]);
  setSelectedBatch("Batch React Native");
  setSelectedFile(null);
  if (fileInputRef.current) {
    fileInputRef.current.value = "";
  }
  const modal = bootstrap.Modal.getInstance(
    document.getElementById("uploadMaterialModal")
  );

  if (modal) {
    modal.hide();
  }
  setToastMessage("Material uploaded successfully.");
  setShowToast(true);
}
  return (
  <>
  <div className="container-fluid">
    <div className="row">
      
      <Sidebar />

      <div className="col-md-10 col-lg-10 ms-auto px-0 main-content">
        
        <nav className="navbar navbar-expand navbar-light navbar-top px-4 py-2">
          <div className="container-fluid">
            <button className="btn d-md-none me-2 p-1 border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebarOffcanvas" style={{color:"#1e293b",fontSize:"1.2rem"}}>
              <i className="bi bi-list"></i>
            </button>
            
            <span className="navbar-text ms-0 fw-semibold fs-5 text-dark">
              Course Study Materials & Documents
            </span>
            
            <ul className="navbar-nav ms-auto align-items-center gap-2">
              <button className="btn btn-primary btn-sm d-flex align-items-center gap-1" data-bs-toggle="modal" data-bs-target="#uploadMaterialModal">
                <i className="bi bi-upload"></i> Upload Material
              </button>
            </ul>
          </div>
        </nav>

        <div className="content-wrapper">
          
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white py-3 border-bottom d-flex justify-content-between align-items-center">
              <h6 className="m-0 fw-bold text-dark fs-6">Uploaded Curriculum Assets</h6>
            </div>
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead className="table-light">
                  <tr>
                    <th className="ps-4">Document Title</th>
                    <th>Batch</th>
                    <th>File Size</th>
                    <th>Upload Date</th>
                    <th className="pe-4 text-end">Actions</th>
                  </tr>
                </thead>
                <tbody id="materials-tbody">
                  {materials.map((material) => (
                    <tr key={material.id}>

                      <td className="ps-4">
                        <div className="d-flex align-items-center gap-2">

                          <i className={`bi ${material.icon} fs-4 ${material.iconColor}`}></i>

                          <div>
                            <div className="fw-bold text-dark">
                              {material.title}
                            </div>

                            <small className="text-muted">
                              {material.type}
                            </small>

                          </div>
                        </div>
                      </td>

                      <td>
                        <span className={`badge ${material.badge}`}>
                          {material.batch}
                        </span>
                      </td>

                      <td>{material.size}</td>

                      <td>{material.date}</td>

                      <td className="pe-4 text-end">

                        <button className="btn btn-sm btn-outline-primary"
                          onClick={() => downloadMaterial(material.title)}
                        >
                          <i className="bi bi-download"></i> Download
                        </button>

                        <button className="btn btn-sm btn-outline-danger"
                          onClick={() => deleteMaterial(material.id)}
                        >
                          <i className="bi bi-trash"></i>
                        </button>

                      </td>

                    </tr>
                  ))}
                  

                </tbody>
              </table>
            </div>  
          </div>
        </div>
      </div>

    </div>
  </div>
  <div className="modal fade" id="uploadMaterialModal" tabIndex="-1" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header" style={{backgroundColor:"#050978", color:"#fff"}}>
          <h5 className="modal-title">Upload Study Material</h5>
          <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
        </div>
        <div className="modal-body">
          <div className="mb-3">
            <label htmlFor="mat_batch" className="form-label fw-semibold text-muted small">Target Batch</label>
            <select 
              className="form-select" 
              id="mat_batch"
              value={selectedBatch}
              onChange={(e) => setSelectedBatch(e.target.value)}
            >
              <option value="Batch React Native">Batch React Native</option>
              <option value="Batch Node.js Gateway">Batch Node.js Gateway</option>
              <option value="Batch Full Stack Java">Batch Full Stack Java</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="mat_file" className="form-label fw-semibold text-muted small">Select File (PDF, Zip, Doc)</label>
            <input 
              ref={fileInputRef}
              type="file" 
              id="mat_file" 
              className="form-control"
              onChange={(e) => setSelectedFile(e.target.files[0])}

            />
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary btn-sm" data-bs-dismiss="modal">Cancel</button>
          <button type="button" className="btn btn-primary btn-sm" onClick={uploadMaterial}>Upload File</button>
        </div>
      </div>
    </div>
  </div>
  <Toast
    show={showToast}
    message={toastMessage}
    onClose={() => setShowToast(false)}
  />
  </>
  )
}

export default StudyMaterials