import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link ,useNavigate} from 'react-router-dom';
import Login from './Login'
import SignUp from './signUp'
import Home from './Home'
import Ihome from './Ihome';
import {Carousel } from 'react-bootstrap';  
import img2 from "../src/investor.png";
import img from "../src/aboutus.jpg"
import Scomponent from './Scomponent';
import Ssuccess from './Ssuccess';
import 'primeicons/primeicons.css';
function Header(props) {
  const {page,changePage,sData,changeSName}=props;
  const sList=[sData,{startUpName:"abc",video:"https://youtu.be/jDLuJLoaA_g"},sData,sData,sData,sData,sData,sData,sData,sData,sData,sData]

  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((index - 1 + sList.length) % sList.length);
  };

  const handleNext = () => {
    setIndex((index + 1) % sList.length);
  };

  
    const [headerHeight, setHeaderHeight] = useState(0);
    useEffect(()=>{
      const header=document.querySelector("header");
      setHeaderHeight(header.offsetHeight);
    },[])
    const img1="https://www.clipartmax.com/png/small/209-2091423_security-camera-cctv-camera-clipart-clipartfest-cctv-black-full.png"
  return (
    <div >
    <header style={{backgroundColor:"grey",borderRadius:"0px 0px 0px 50px",position:'fixed',width:"100%", top:0,overflow:"hidden",zIndex:1}} >
    <Navbar expand="lg" bg="dark" style={{borderRadius:"0px 0px 0px 200px",height:"100px"}}>
      <Container style={{marginLeft:"40px"}}>
        <h2 style={{WebkitTextFillColor:'white',fontWeight:'bold',marginTop:"11px",fontFamily:"calibri",fontSize:"40px"}}>INVESTIRE</h2>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{marginLeft:"50px"}}>
            <Link to='/home'  className="nav-link" style={{WebkitTextFillColor:'white',fontWeight:'bold'}}>Home</Link>
            {/* <Nav.Link href="#link" style={{WebkitTextFillColor:'white',fontWeight:'bold'}}>SeekInvestment</Nav.Link> */}
            <Nav.Link href="#link" style={{WebkitTextFillColor:'white',fontWeight:'bold'}}>FAQ's</Nav.Link>
           
          </Nav>
          <Link to='/sign-in'  className="nav-link" style={{WebkitTextFillColor:'white',margin:'10px',width:'70px',height:'35px',backgroundColor:'white',WebkitTextFillColor:'black',border:'white',borderRadius:'5px',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:'bold'}}>Login</Link>
            <Link to='/sign-up' className='nav-link' style={{WebkitTextFillColor:'white',width:'80px',height:'35px',backgroundColor:'white',WebkitTextFillColor:'black',border:'white',borderRadius:'5px',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:'bold'}}>  Register
              </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
  <h1 style={{marginTop:"130px",marginLeft:"35px"}}>About Us</h1>

  <img src={img} style={{height:"450px",width:"95%",marginLeft:"50px",marginTop:"20px",opacity:0.9,borderRadius:"30px 30px 30px 30px" }}/>
  <>
  <h1 style={{marginTop:"30px",marginLeft:"35px"}}>Top 5 Funding Companies</h1>
  <div style={{display:"flex",marginLeft:"40px",marginTop:"40px",backgroundColor:"white",height:"350px",borderRadius:"30px 30px 30px 30px" ,width:"95%"}} >
     
      {sList.slice(index, index + 3).map((component, i) => (
        <Scomponent i={i} item={component} style={{display:"flex"}} />
      ))}
      
      </div>
      <div style={{display:"flex",justifyContent:"space-between", marginTop:"-200px",marginRight:"40px",marginLeft:"40px"}}>
      
      <i className="pi pi-caret-left" style={{ fontSize: '3rem' }} onClick={handlePrev} ></i>
      <i className="pi pi-caret-right" style={{ fontSize: '3rem' }} onClick={handleNext} ></i>
  
      </div>
    </>
    <h1 style={{marginTop:"200px",marginLeft:"35px"}}>Success Stories</h1>

    <>
  <div style={{display:"flex",marginLeft:"40px",marginTop:"40px",backgroundColor:"white",height:"350px",borderRadius:"30px 30px 30px 30px" ,width:"95%"}} >
     
      {sList.slice(index, index + 3).map((component, i) => (
        <Ssuccess i={i} item={component} style={{display:"flex"}} />
      ))}
      
      </div>
      <div style={{display:"flex",justifyContent:"space-between", marginTop:"-200px",marginRight:"40px",marginLeft:"40px"}}>
      
      <i className="pi pi-caret-left" style={{ fontSize: '3rem' }} onClick={handlePrev} ></i>
      <i className="pi pi-caret-right" style={{ fontSize: '3rem' }} onClick={handleNext} ></i>
  
      </div>
    </>
    </div>
  );
}

export default Header;
