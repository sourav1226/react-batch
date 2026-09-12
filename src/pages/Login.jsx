import React, { useRef, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { sendOtp, verifyOtp, resetOtpState, clearAuthStatus } from '../redux/slices/authSlice';
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 1. Redux State
  const { loading, error, message, otpSent, isAuthenticated } = useSelector(
    (state) => state.auth
  );

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [email, setEmail] = useState("");
  const [localAlert, setLocalAlert] = useState(null);
  const inputRefs = useRef([]);

  // 2. Redirect on successful authentication
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  // 3. Send OTP
  const triggerSendOtp = () => {
    setLocalAlert(null);
    if (!email || !email.includes('@')) {
      setLocalAlert({ type: 'danger', message: 'Please enter a valid email address.' });
      return;
    }
    dispatch(sendOtp(email));
  };

  // 4. Verify OTP
  const handleVerifyOtp = () => {
    setLocalAlert(null);
    const code = otp.join('');
    if (code.length === 6) {
      dispatch(verifyOtp({ email, otp: code }));
    } else {
      setLocalAlert({ type: 'danger', message: 'Please enter all 6 digits of the OTP.' });
    }
  };

  // 5. Back to Email Step
  const backToEmailPanel = () => {
    dispatch(resetOtpState());
    dispatch(clearAuthStatus());
    setLocalAlert(null);
    setOtp(["", "", "", "", "", ""]);
  };

  const handleOtpChange = (e, index) => {
    const value = e.target.value.replace(/\D/g, "");
    if (!value) {
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);
      return;
    }
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1); // Take only the last entered digit
    setOtp(newOtp);
    if (index < 5 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    if (!pastedData) return;

    const newOtp = [...otp];
    pastedData.split("").forEach((char, idx) => {
      newOtp[idx] = char;
    });
    setOtp(newOtp);

    // Focus on the next empty box or the last box
    const nextEmptyIndex = newOtp.findIndex((digit) => digit === "");
    const focusIndex = nextEmptyIndex !== -1 ? nextEmptyIndex : 5;
    if (inputRefs.current[focusIndex]) {
      inputRefs.current[focusIndex].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0 && inputRefs.current[index - 1]) {
      inputRefs.current[index - 1].focus();
    }
  };

  // Determine current active alert (Redux error/message or local validation)
  const activeAlert = localAlert
    ? localAlert
    : error
    ? { type: 'danger', message: error }
    : message
    ? { type: 'success', message }
    : null;

  return (
    <>
      <div className="auth-body-bg">
        <div className="auth-card">
          <div className="auth-header text-center">
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "0.75rem" }}>
              <div style={{ width: "48px", height: "48px", background: "#fff", color: "#050978", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "800", fontSize: "1.5rem" }}>
                P
              </div>
            </div>
            <h4 id="portal-title-text">Pedestal Class Room</h4>
            <p className="mb-0 text-white-50" id="portal-desc-text">Secure Access Portal</p>
          </div>

          <div className="auth-divider"></div>

          <div className="auth-body">
            <div id="otp-alert-container" className="mb-3">
              {activeAlert && (
                <div
                  className={`alert alert-${activeAlert.type} py-2 text-center`}
                  style={{ fontSize: "0.85rem" }}
                >
                  {activeAlert.message}
                </div>
              )}
            </div>

            {!otpSent && (
              <div id="panel-email" className="slide-panel">
                <form
                  id="form-send-otp"
                  onSubmit={(e) => {
                    e.preventDefault();
                    triggerSendOtp();
                  }}
                >
                  <div className="mb-3">
                    <label className="form-label fw-semibold text-muted" style={{ fontSize: "0.85rem" }} htmlFor="email-input">
                      Work Email Address
                    </label>
                    <div className="input-group">
                      <span className="input-group-text"><i className="bi bi-envelope"></i></span>
                      <input
                        type="email"
                        id="email-input"
                        className="form-control"
                        placeholder="name@pedestaltechnoworld.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary-auth w-100 py-2 fw-semibold"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Sending OTP...
                      </>
                    ) : (
                      <>
                        Send Secure OTP <i className="bi bi-arrow-right-short"></i>
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}

            {otpSent && (
              <div id="panel-otp" className="slide-panel">
                <p className="text-muted text-center mb-1" style={{ fontSize: "0.85rem", lineHeight: 1.4 }}>
                  Enter the 6-digit verification code sent to
                </p>
                <p className="text-center fw-bold text-dark mb-3" style={{ fontSize: "0.9rem" }}>
                  {email}
                </p>

                <div className="otp-box-container my-3" onPaste={handlePaste}>
                  {otp.map((digit, idx) => (
                    <input
                      key={idx}
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      className="otp-input-box"
                      maxLength="1"
                      value={digit}
                      ref={(el) => (inputRefs.current[idx] = el)}
                      onChange={(e) => handleOtpChange(e, idx)}
                      onKeyDown={(e) => handleKeyDown(e, idx)}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={handleVerifyOtp}
                  id="otp-verify-btn"
                  className="btn btn-primary-auth w-100 py-2 fw-semibold"
                  disabled={otp.some((digit) => digit === "") || loading}
                >
                  {loading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Verifying...
                    </>
                  ) : (
                    <>
                      Verify Account & Login <i className="bi bi-shield-check"></i>
                    </>
                  )}
                </button>

                <div className="text-center mt-3">
                  <button type="button" className="btn btn-light btn-sm text-muted" onClick={backToEmailPanel}>
                    <i className="bi bi-arrow-left"></i> Change Email
                  </button>
                </div>
              </div>
            )}

    </div>
   

    <div className="auth-footer text-center">
      <Link to="/" className="text-decoration-none text-muted small"><i className="bi bi-arrow-left-circle"></i> Switch Workspace Portal</Link>
    </div>

  </div>
  </div>
</>
  )
}

export default Login