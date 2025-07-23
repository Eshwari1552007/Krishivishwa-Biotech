import React, { useState, useEffect } from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import { BsHouseDoorFill } from 'react-icons/bs';
import useAOS from '../utils/useAos';
import '../Pages/Login.css';
import { useLocation } from 'react-router-dom';
import Logo from '../Assets/Images/Krushiwishwa .png';
import FacebookLogo from '../Assets/Images/facebook.png';
import GoogleLogo from '../Assets/Images/google.png';

const LoginSignup = () => {
  useAOS(); // initialize AOS animations
  const location = useLocation();
  const showSignup = location.state?.showSignup || false;

  const [isSignup, setIsSignup] = useState(showSignup);

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [formData, setFormData] = useState({
    name: '', email: '', password: '', confirmPassword: ''
  });
  const [errors, setErrors] = useState({});

  const [showWelcome, setShowWelcome] = useState(false);
  const [showMainHeading, setShowMainHeading] = useState(false);
  const [headingKey, setHeadingKey] = useState(0);

  useEffect(() => {
    setShowWelcome(false);
    setShowMainHeading(false);



    const welcomeDelay = setTimeout(() => {
      setShowWelcome(true);
    }, 500); // delay showing Welcome

    const switchToMain = setTimeout(() => {
      setShowWelcome(false);
      setShowMainHeading(true);
      setHeadingKey(prev => prev + 1); // force animation replay
    }, 2000); // after Welcome shows, switch to main heading

    return () => {
      clearTimeout(welcomeDelay);
      clearTimeout(switchToMain);
    };
  }, [isSignup]);




  const toggleMode = () => {
    setIsSignup(!isSignup);
    setFormData({ name: '', email: '', password: '', confirmPassword: '' });
    setErrors({});
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    const newErrors = {};
    if (isSignup && !formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.includes("@")) newErrors.email = "Enter a valid email";
    if (formData.password.length < 6) newErrors.password = "Min 6 characters";
    if (isSignup && formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validate();
    setErrors(validation);

    if (Object.keys(validation).length === 0) {
      setLoading(true);
      setSuccessMsg('');

      setTimeout(() => {
        setLoading(false);
        const msg = isSignup ? "Account created successfully!" : "Logged in successfully!";
        setSuccessMsg(msg);

        setFormData({ name: '', email: '', password: '', confirmPassword: '' });

        // Auto-hide alert after 4 seconds
        setTimeout(() => setSuccessMsg(''), 4000);
      }, 2000);
    }
  };

  return (
    <>


      <div className={`login-page ${isSignup ? 'signup-mode' : ''}`}>
        <div className="overlay">
          {successMsg && (
            <div className="custom-alert alert alert-success" role="alert">
              {successMsg}
            </div>
          )}
          <img src={Logo} alt="Logo" className="top-left-logo" />
          <Container
            className="d-flex align-items-center justify-content-center min-vh-100"
            data-aos="fade-up"
          >
            <div className="login-box d-flex flex-row overflow-hidden rounded" data-aos="zoom-in">
              {/* Image Panel */}
              <div className="login-image d-none d-md-block position-relative">
                <Button className="gradient-glow-btn" onClick={toggleMode}>
                  {isSignup ? 'Login' : 'Sign Up'}
                </Button>
              </div>

              {/* Form Panel */}
              <div className="login-form text-white p-4 p-md-5 flex-grow-1 d-flex flex-column justify-content-between">
                <div>
                  <h2
                    key={headingKey}
                    className={`mb-4 text-center login-heading ${showWelcome ? 'welcome-zoom' : showMainHeading ? 'slide-in-heading' : 'invisible-heading'
                      }`}
                  >
                    {showWelcome
                      ? isSignup
                        ? 'Welcome!!'
                        : 'Welcome back!!'
                      : isSignup
                        ? 'Sign Up'
                        : 'Login'}
                  </h2>



                  <div className="form-inner-wrapper">
                    <Form onSubmit={handleSubmit} noValidate>
                      {isSignup && (
                        <div className="input-group">
                          <div className="input-icon">
                            <i className="fas fa-user"></i>
                            <Form.Control
                              type="text"
                              name="name"
                              placeholder=" "
                              value={formData.name}
                              onChange={handleChange}
                              className="input-field"
                              isInvalid={!!errors.name}
                            />
                            <label>Full Name</label>
                          </div>
                          <div className="error-msg">{errors.name}</div>
                        </div>
                      )}

                      <div className="input-group">
                        <div className="input-icon">
                          <i className="fas fa-envelope"></i>
                          <Form.Control
                            type="email"
                            name="email"
                            placeholder=" "
                            value={formData.email}
                            onChange={handleChange}
                            className="input-field"
                            isInvalid={!!errors.email}
                          />
                          <label>Email or Phone</label>
                        </div>
                        <div className="error-msg">{errors.email}</div>
                      </div>

                      <div className="input-group">
                        <div className="input-icon">
                          <i className="fas fa-lock"></i>
                          <Form.Control
                            type="password"
                            name="password"
                            placeholder=" "
                            value={formData.password}
                            onChange={handleChange}
                            className="input-field"
                            isInvalid={!!errors.password}
                          />
                          <label>Password</label>
                        </div>
                        <div className="error-msg">{errors.password}</div>
                      </div>

                      {isSignup && (
                        <div className="input-group">
                          <div className="input-icon">
                            <i className="fas fa-lock"></i>
                            <Form.Control
                              type="password"
                              name="confirmPassword"
                              placeholder=" "
                              value={formData.confirmPassword}
                              onChange={handleChange}
                              className="input-field"
                              isInvalid={!!errors.confirmPassword}
                            />
                            <label>Confirm Password</label>
                          </div>
                          <div className="error-msg">{errors.confirmPassword}</div>
                        </div>
                      )}

                      <Button type="submit" className="glassy-submit-btn mt-2" disabled={loading}>
                        {loading && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}
                        {!loading && (isSignup ? "Create Account" : "Sign In")}
                      </Button>



                      <div className="separator mt-3 mb-3">
                        <span className="line"></span>
                        <span className="or-text">or continue with</span>
                        <span className="line"></span>
                      </div>

                      <div className="social-login-buttons">
                        <Button className="social-btn facebook">
                          <img src={FacebookLogo} alt="Facebook" className="social-icon" />
                          <span className="social-text">Facebook</span>
                        </Button>
                        <Button className="social-btn google">
                          <img src={GoogleLogo} alt="Google" className="social-icon" />
                          <span className="social-text">Google</span>
                        </Button>
                      </div>

                      <div className="text-center text-white mt-3">
                        <span>{isSignup ? 'Already have an account?' : 'New to Krishivishwa-Biotech?'}</span>{' '}
                        <a href="#" onClick={toggleMode} className="text-info text-decoration-none">
                          {isSignup ? 'Login here' : 'Sign up now'}
                        </a>
                      </div>


                    </Form>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <a href="/" className="back-home-btn" data-aos="fade-up">
                    <BsHouseDoorFill size={18} /> Back to Home
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default LoginSignup;
