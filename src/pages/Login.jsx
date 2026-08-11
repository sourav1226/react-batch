import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Login.css"
function Login() {
  const navigate = useNavigate();
  const[otp,setOtp]=useState(["","","","","",""])
  const [showOtpPanel,setshowOtpPanel]=useState(false);
  const [email,setEmail]=useState("")
  const [alert,setAlert]=useState({
    message:"",
    type:""
  })
  const inputRefs = useRef([]);
  
  const triggerSendOtp = () => {

    if (!email || !email.includes("@")) {
      setAlert({
        message: "Please input a valid email.",
        type: "danger",
      });
      return;
    }

    setAlert({
      message: "Generating OTP token...",
      type: "info",
    });

    setTimeout(() => {

      setshowOtpPanel(true);

      setAlert({
        message: "OTP Dispatched! Hint: Type 123456 to login.",
        type: "success",
      });

      if (inputRefs.current[0]) {
        inputRefs.current[0].focus();
      }

    }, 1000);
  };
  const backToEmailPanel=()=>{
    setshowOtpPanel(false);
    setAlert({
      message: "",
      type: "",
    });
  }
  const handleOtpChange=(e,index)=>{
    const value = e.target.value.replace(/\D/g, "");
    const newOtp=[...otp]
    newOtp[index]=value;
    setOtp(newOtp)
    if(value && index<5)
      inputRefs.current[index + 1].focus();
  }

  const verifyOtp = () => {
    const code = otp.join("");

    setAlert({
        message: "Verifying secure token...",
        type: "info"
    });

    setTimeout(() => {
        if (code.length === 6) {
            setAlert({
                message: "OTP verified! Redirecting to dashboard...",
                type: "success"
            });
            navigate("/dashboard");
        } else {
            setAlert({
                message: "Invalid token.",
                type: "danger"
            });
        }
    }, 800);
  };
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };
  return (

    <>
    <div className="auth-body-bg">
        <div className="auth-card">
            <div className="auth-header text-center">
                <div style={{display: "flex", justifyContent: "center", marginBottom: "0.75rem",}}>
                <div style={{width: "48px", height: "48px", background:" #fff", color: "#050978", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "800", fontSize: "1.5rem"}}>P</div>
            </div>
            <h4 id="portal-title-text">Pedestal Class Room</h4>
            <p className="mb-0 text-white-50" id="portal-desc-text">Secure Access Portal</p>
        </div>

        <div className="auth-divider"></div>

    
        <div className="auth-body">
      
        <div id="otp-alert-container" className="mb-3">
          {alert.message && (
            <div
              className={`alert alert-${alert.type} py-2 text-center`}
              style={{ fontSize: "0.85rem" }}
            >
              {alert.message}
            </div>
          )}
        </div>
        {
          !showOtpPanel && (
        
        <div id="panel-email" className="slide-panel">
        <form id="form-send-otp" 
          onSubmit={(e)=>{
            e.preventDefault();
            triggerSendOtp();
          }}>
            <div className="mb-3">
                <label className="form-label fw-semibold text-muted" style={{fontSize:" 0.85rem"}}  htmlFor="email-input">Work Email Address</label>
                <div className="input-group">
                    <span className="input-group-text"><i className="bi bi-envelope"></i></span>
                    <input 
                      type="email" 
                      id="email-input" 
                      className="form-control" 
                      placeholder="name@pedestaltechnoworld.com" 
                      value={email}
                      onChange={(e) =>setEmail(e.target.value)}
                      required
                    />
                </div>
            </div>
            <button type="submit" className="btn btn-primary-auth w-100 py-2 fw-semibold">
                Send Secure OTP <i className="bi bi-arrow-right-short"></i>
            </button>
        </form>
      </div>
)}
  {showOtpPanel &&(
      <div id="panel-otp" className="slide-panel ">
        <p className="text-muted text-center" style={{fontSize: "0.82rem", lineHeight: 1.4}}>
          We sent a 6-digit verification code. Please input it below to sign in.
        </p>
        
        <div className="otp-box-container my-3">
          <input 
            type="text" 
            inputMode="numeric" 
            pattern="[0-9]*"
            className="otp-input-box" 
            maxLength="1"
            value={otp[0]}
            ref={(el) => (inputRefs.current[0] = el)}
            onChange={(e)=>handleOtpChange(e,0)}
            onKeyDown={(e) => handleKeyDown(e, 0)}
          />
          <input 
            type="text" 
            inputMode="numeric" 
            pattern="[0-9]*"
            className="otp-input-box" 
            maxLength="1"
            value={otp[1]}
            ref={(el) => (inputRefs.current[1] = el)}
            onChange={(e)=>handleOtpChange(e,1)}
            onKeyDown={(e) => handleKeyDown(e, 1)}
          />
          <input 
            type="text" 
            inputMode="numeric" 
            pattern="[0-9]*"
            className="otp-input-box" 
            maxLength="1"
            value={otp[2]}
            ref={(el) => (inputRefs.current[2] = el)}
            onChange={(e)=>handleOtpChange(e,2)}
            onKeyDown={(e) => handleKeyDown(e, 2)}
          />
          <input 
            type="text" 
            inputMode="numeric" 
            pattern="[0-9]*"
            className="otp-input-box" 
            maxLength="1"
            value={otp[3]}
            ref={(el) => (inputRefs.current[3] = el)}
            onChange={(e)=>handleOtpChange(e,3)}
            onKeyDown={(e) => handleKeyDown(e, 3)}
          />
          <input 
            type="text" 
            inputMode="numeric" 
            pattern="[0-9]*"
            className="otp-input-box" 
            maxLength="1"
            value={otp[4]}
            ref={(el) => (inputRefs.current[4] = el)}
            onChange={(e)=>handleOtpChange(e,4)}
            onKeyDown={(e) => handleKeyDown(e, 4)}
          />
          <input 
            type="text" 
            inputMode="numeric" 
            pattern="[0-9]*"
            className="otp-input-box" 
            maxLength="1"
            value={otp[5]}
            ref={(el) => (inputRefs.current[5] = el)}
            onChange={(e)=>handleOtpChange(e,5)}
            onKeyDown={(e) => handleKeyDown(e, 5)}
          />
        </div>

        <button 
          type="button" 
          onClick={verifyOtp}
          id="otp-verify-btn" 
          className="btn btn-primary-auth w-100 py-2 fw-semibold" 
          disabled={otp.some((digit) => digit === "")}
        >
          Verify Account & Login <i className="bi bi-shield-check"></i>
        </button>

        <div className="text-center mt-3">
          <button type="button" className="btn btn-light btn-sm text-muted" onClick={backToEmailPanel}>
            <i className="bi bi-arrow-left"></i> Change Email
          </button>
        </div>
      </div>)}

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