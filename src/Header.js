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
import Footer from './Footer';
import img from "../src/aboutus.jpg"
import Scomponent from './Scomponent';
import Ssuccess from './Ssuccess';
import 'primeicons/primeicons.css';

function Header(props) {
  const {page,changePage,sData,changeSName,successList}=props;
  
  const [sList,setSList]=useState([]);

  const [index2, setIndex2] = useState(0);

  const handlePrev2 = () => {
    if(index2!=0){
    setIndex2((index2 - 1 +successList.length ) % successList.length);
    }
  };

  const handleNext2 = () => {
    console.log(successList.length);
    if(index2!=successList.length-3){
    setIndex2((index2 + 1) % successList.length);
    }
  };

  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    if(index!=0){
    setIndex((index - 1 + sList.length) % sList.length);
    }
  };

  const handleNext = () => {
    if(index!=successList.length-3){
    setIndex((index + 1) % sList.length);
    }
  };
  const footerScroll=()=>{
    window.scrollTo({
      top:document.body.scrollHeight,
      behavior:"smooth"
    });
  }
    const [headerHeight, setHeaderHeight] = useState(0);
    useEffect(()=>{
      const header=document.querySelector("header");
      setHeaderHeight(header.offsetHeight);
    },[])
    const img1="https://www.clipartmax.com/png/small/209-2091423_security-camera-cctv-camera-clipart-clipartfest-cctv-black-full.png"

    const fetchStartUpData = async () => {
        try {
          const response = await fetch('http://52.207.171.26:8081/api/getTop5',{
              method: 'GET',
              mode: 'cors',
              headers: {
                'Content-Type': 'application/json'
              }
            });
            
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const contentType = response.headers.get('content-type');
            if (contentType && contentType.indexOf('application/json') !== -1) {
              const json = await response.json();
              console.log(json)
            setSList(json);
             console.log(sData);
              
    
              
            } else {
              const text = await response.text();
              
              
            }
        } catch (error) {
          console.error(error);
        }
    }
        
    
    useEffect(() => {
      
      fetchStartUpData();
     
    }, []);
  return (
    <div >
    <header style={{backgroundColor:"grey",borderRadius:"0px 0px 0px 50px",position:'fixed',width:"100%", top:0,overflow:"hidden",zIndex:1}} >
    <Navbar expand="lg" bg="dark" style={{borderRadius:"0px 0px 0px 200px",height:"100px"}}>
      <Container style={{marginLeft:"40px"}}>
        <h2 style={{WebkitTextFillColor:'white',fontWeight:'bold',marginTop:"11px",fontFamily:"calibri",fontSize:"40px"}}>INVESTIRE</h2>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{marginLeft:"50px"}}>
            <Link to='/home'  className="nav-link" style={{WebkitTextFillColor:'white',fontWeight:'bold'}}><i className="pi pi-home" style={{ color: '#708090' }}></i> Home</Link>
            <Nav.Link  style={{WebkitTextFillColor:'white',fontWeight:'bold'}} onClick={footerScroll}>FAQ's</Nav.Link>
           
          </Nav>
          <Link to='/sign-in'  className="nav-link" style={{WebkitTextFillColor:'white',margin:'10px',width:'70px',height:'35px',backgroundColor:'white',WebkitTextFillColor:'black',border:'white',borderRadius:'5px',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:'bold'}}>Login</Link>
            <Link to='/sign-up' className='nav-link' style={{WebkitTextFillColor:'white',width:'80px',height:'35px',backgroundColor:'white',WebkitTextFillColor:'black',border:'white',borderRadius:'5px',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:'bold'}}>  Register
              </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
  <h1 style={{marginTop:"130px",marginLeft:"35px"}}></h1>

  <img src={img} style={{height:"500px",width:"95%",marginLeft:"3%",marginTop:"20px",opacity:0.9,borderRadius:"30px 30px 30px 30px" }}/>
  <>
  <h1 style={{marginTop:"30px",marginLeft:"35px"}}>Top 5 Funding Companies</h1>
  <div style={{display:"flex",marginLeft:"40px",marginTop:"40px",backgroundColor:"white",height:"350px",borderRadius:"30px 30px 30px 30px" ,width:"95%"}} >
     
      {sList.slice(index, index + 3).map((component, i) => (
        <Scomponent i={i} item={component} style={{display:"flex"}} />
      ))}
      
      </div>
      <div style={{display:"flex",justifyContent:"space-between", marginTop:"-200px"}}>
      
      {index==0?<i className="pi pi-caret-left" style={{ fontSize: '3rem',opacity:'0.3',marginLeft:"2.3%" }} onClick={handlePrev} ></i>:<i className="pi pi-caret-left" style={{ fontSize: '3rem' ,marginLeft:"2.3%"}} onClick={handlePrev} ></i>}
      {index==sList.length-3?<i className="pi pi-caret-right" style={{ fontSize: '3rem',opacity:'0.3',marginRight:"1.8%" }} onClick={handleNext} ></i>:<i className="pi pi-caret-right" style={{ fontSize: '3rem',marginRight:"1.8%" }} onClick={handleNext} ></i>}
  
  
      </div>
    </>
    <h1 style={{marginTop:"200px",marginLeft:"35px"}}>Success Stories</h1>

    <>
  <div style={{display:"flex",marginLeft:"3%",marginTop:"40px",backgroundColor:"white",height:"350px",borderRadius:"30px 30px 30px 30px" ,width:"95%"}} >
     
      {successList.slice(index2, index2 + 3).map((component, i) => (
        <Ssuccess i={i} item={component} style={{display:"flex"}} />
      ))}
      
      </div>
      <div style={{display:"flex",justifyContent:"space-between", marginTop:"-200px"}}>
      
      {index2==0?<i className="pi pi-caret-left" style={{ fontSize: '3rem',opacity:'0.3' ,marginLeft:"2.5%"}} onClick={handlePrev2} ></i>:<i className="pi pi-caret-left" style={{ fontSize: '3rem',marginLeft:"2.5%" }} onClick={handlePrev2} ></i>}
      {index2==successList.length-3?<i className="pi pi-caret-right" style={{ fontSize: '3rem',opacity:'0.3',marginRight:"1.5%" }} onClick={handleNext2} ></i>:<i className="pi pi-caret-right" style={{ fontSize: '3rem',marginRight:"1.5%"}} onClick={handleNext2} ></i>}
  
      </div>
    </>
    
    </div>
   
  );
}

export default Header;
