import React, { Component,useState } from 'react'
import Ihome from "./Ihome";
import { useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
function Login(props){
  const {page,changePage}=props;
  const [isVisible, setIsVisible] = useState(true);
  const [isStartUp,setIsStartUp]=useState(true)
  const navigate = useNavigate();
  const [p,setP]=useState(false);
  const [formData1, setFormData1] = useState({
    startUpName:'',
    Location:'',
    email: '',
    password: '',
    confirmPassword:''
  });
  const [formData2, setFormData2] = useState({
    FirstName:'',
    LastName:'',
    email: '',
    password: '',
    confirmPassword:''
  });
const handleChange = event => {
  if(isStartUp==true){
    setFormData1({
      ...formData1,
      [event.target.name]: event.target.value
    });
  }
  else{
    setFormData2({
      ...formData2,
      [event.target.name]: event.target.value
    });
  }
  };
  const handleClick = () => {
    console.log(formData1);
    console.log(formData2);
    if(isStartUp==true){
      if(formData1.password==formData1.confirmPassword){
        setP(false);
        changePage("ihome");
        navigate('/ihome');
      }
      else setP(true);
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
            {/* <Nav.Link href="#link" style={{WebkitTextFillColor:'white',fontWeight:'bold'}}>SeekInvestment</Nav.Link> */}
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
          <div className="auth-inner">
            <h3>Register As</h3>
            <div>
      <Button
        style={{ backgroundColor: !isStartUp ? 'green' : 'white', width:'160px',WebkitTextFillColor: isStartUp ? 'green' : 'white'}}
        onClick={() => setIsStartUp(false)}
      variant='success'>
        Investor
      </Button>
      <Button
        style={{ backgroundColor: !isStartUp ? 'white' : 'green', width:'160px' ,WebkitTextFillColor: !isStartUp ? 'green' : 'white'}}
        onClick={() => setIsStartUp(true)}
        variant='success'
      >
        StartUp
      </Button>
    </div>
      <form onSubmit={handleClick}>
        {!isStartUp?
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            onChange={handleChange}
            name="FirstName"
          />
        </div>
        :null}
        {!isStartUp?
        <div className="mb-3">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" onChange={handleChange} name="LastName"/>
        </div>
        :null}
         {isStartUp?
        <div className="mb-3">
          <label>StartUp Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="StartUp Name"
            onChange={handleChange}
            name="StartUpName"
          />
        </div>
        :null}
        {isStartUp?
        <div className="mb-3">
          <label>Location</label>
          <input type="text" className="form-control" placeholder="Location" onChange={handleChange} name="Location"/>
        </div>
        :null}
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
          <label>Confirm Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={handleChange}
            name="confirmPassword"
          />
        </div>
       {p? <p style={{color:'red'}}>Password not matched</p>:null}
        <div className="d-grid">
          <button type="submit" className="btn btn-secondary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
          </div>
        </div>
:null}      
    </div>   
    )
  }
export default Login;