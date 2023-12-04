
import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import "./RegistrationForm.css";
import { useNavigate } from 'react-router-dom';
 
const RegistrationForm = () => {
  const navigate = useNavigate();
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
 
  const handleNext = () => {
    if (isCaptchaVerified) {
      navigate('/application-form');
    } else {
      console.log('Please complete the reCAPTCHA verification.');
    }
  };
 
  const handleCaptchaChange = (value) => {
    console.log('reCAPTCHA value:', value);
    setIsCaptchaVerified(true);
  };
 
  return (
    <div>
    <div className="registration-container">
      <h2 className="registration-title">Registration Form</h2>
      <div className="registration-instructions">
        <p className="instruction-heading">
          Welcome to the registration form. Please follow the instructions below to complete your registration:
        </p>
 
        <div className="instruction-list">
          <h3>Instructions:</h3>
          <ol>
            {/* ... existing instructions ... */}
            </ol>
            </div>
            </div>
            </div>
            
              <ReCAPTCHA
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                onChange={handleCaptchaChange}
              />
            
            
              <button className="next-button" onClick={handleNext}>
                Next
              </button>
            
          
       
    </div>

    
  );
};
 
export default RegistrationForm;