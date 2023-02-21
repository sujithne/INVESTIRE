import React, { Component,useState } from 'react'
import Ihome from "./Ihome";
import { useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function Login(props){
  const {page,changePage}=props;
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
      email: 'hi man',
      password: ''
    });
  const handleChange = event => {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value
      });
    };
  const handleClick = () => {
    if(formData.password=="startup"){
      changePage("shome");
    navigate('/shome');
    }
    if(formData.password=="investor"){
    changePage("ihome");
    navigate('/ihome');
    }
  };
    return (
      <div>
     <header style={{backgroundColor:"grey",borderRadius:"0px 0px 0px 50px",position:'fixed',width:"100%", top:0,overflow:"hidden",zIndex:1}} >
    <Navbar expand="lg" bg="dark" style={{borderRadius:"0px 0px 0px 200px",height:"100px"}}>
    <Container style={{marginLeft:"40px"}}>
      <h2 style={{WebkitTextFillColor:'white',fontWeight:'bold',marginTop:"11px",fontFamily:"calibri",fontSize:"40px"}}>INVESTIRE</h2>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto" style={{marginLeft:"50px"}}>
            <Link to='/home' onClick={() => setIsVisible(false)} className="nav-link" style={{WebkitTextFillColor:'white',fontWeight:'bold'}}>Home</Link>
            <Nav.Link href="#link" style={{WebkitTextFillColor:'white',fontWeight:'bold'}}>SeekInvestment</Nav.Link>
            <Nav.Link href="#link" style={{WebkitTextFillColor:'white',fontWeight:'bold'}}>FAQ's</Nav.Link>
           
          </Nav>
          <Link to='/sign-in' onClick={() => setIsVisible(true)} className="nav-link" style={{fontWeight:'bold',WebkitTextFillColor:'white',margin:'10px',width:'70px',height:'35px',backgroundColor:'white',WebkitTextFillColor:'black',border:'white',borderRadius:'5px',display:'flex',alignItems:'center',justifyContent:'center'}}>Login</Link>
            <Link to='/sign-up' onClick={() => setIsVisible(true)} className='nav-link' style={{fontWeight:'bold',WebkitTextFillColor:'white',width:'80px',height:'35px',backgroundColor:'white',WebkitTextFillColor:'black',border:'white',borderRadius:'5px',display:'flex',alignItems:'center',justifyContent:'center'}}>  Register
              </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
    {isVisible?
    <div className="auth-wrapper" style={{marginTop:"100px"}}>
          <div className="auth-inner" >
          <form onSubmit={handleClick} >
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={handleChange}
            name="email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={handleChange}
            name="password"
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-secondary"  href="#" >
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
          </div>
        </div>
:null}      
    </div>   
    )
  }
export default Login;