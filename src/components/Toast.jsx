import React, { useEffect } from "react";

function Toast({ show, message, onClose }) {

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div
      className="toast-container position-fixed bottom-0 end-0 p-3"
      style={{ zIndex: 1100 }}
    >
      <div
        className="toast show align-items-center border-0"
        style={{
          backgroundColor: "#fff",
          borderLeft: "4px solid #050978",
          boxShadow: "0 0.5rem 1.5rem rgba(0,0,0,0.15)"
        }}
      >
        <div className="d-flex">

          <div
            className="toast-body d-flex align-items-center gap-2"
            style={{
              fontWeight: "600",
              color: "#1e293b",
              fontSize: "0.88rem"
            }}
          >
            <i
              className="bi bi-info-circle-fill"
              style={{ color: "#050978" }}
            ></i>

            <span>{message}</span>
          </div>

          <button
            type="button"
            className="btn-close me-2 m-auto"
            onClick={onClose}
          ></button>

        </div>
      </div>
    </div>
  );
}

export default Toast;