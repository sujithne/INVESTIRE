import React,{useRef} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import Login from './Login'
import SignUp from './signUp'
import App from './App'
import { Dropdown } from 'react-bootstrap';
import { SplitButton } from 'primereact/splitbutton';
import { Toast } from 'primereact/toast';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import 'primeicons/primeicons.css';
import Iedit from './SEdit'
import Modal from 'react-bootstrap/Modal';
import { InputMask } from "primereact/inputmask";
import { Form } from 'react-bootstrap';
import { InputText } from "primereact/inputtext";

import Col from 'react-bootstrap/Col';
import img from "../src/aboutus.jpg"
import Row from 'react-bootstrap/Row';
import {useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link ,useNavigate} from 'react-router-dom';
import {Carousel } from 'react-bootstrap';  
import img2 from "../src/investor.png";
import Scomponent from './Scomponent';
import 'primeicons/primeicons.css';

function Ihome(props) {
  const {page,changePage,sData,changeSName}=props;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [formData,setFormData]=useState({
    email: 'sample@gmail.com',
    password: '',
    firstName:'abc',
    lastName:'',
    ssn:'',
    dob:'',
    city:'',
    state:'',
    address1:'',
    address2:'',
    phNumber:'',
    country:''
  });
  const sList=[sData,{startUpName:"abc",video:"https://youtu.be/jDLuJLoaA_g"},sData,sData,sData,sData,sData,sData,sData,sData,sData,sData]

  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((index - 1 + sList.length) % sList.length);
  };

  const handleNext = () => {
    setIndex((index + 1) % sList.length);
  };
  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };
    const [set,changeSet]=useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const toast = useRef(null);
    const navigate=useNavigate();
    const handleClick = () => {
      changePage("home");
      navigate('/home');
    };
    const footerScroll=()=>{
      window.scrollTo({
        top:document.body.scrollHeight,
        behavior:"smooth"
      });
    }
    const handleStartUp = () => {
      changePage("ihome");
      navigate('/startUps');
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
          <div >
          <Toast ref={toast}></Toast>
          
          </div>
            <Nav.Link href="" style={{WebkitTextFillColor:'white',fontWeight:'bold'}} onClick={handleStartUp}>InvestInUs</Nav.Link>
            <Nav.Link href="#link" style={{WebkitTextFillColor:'white',fontWeight:'bold'}}>MyInvestments</Nav.Link>
            <Nav.Link href="#link" style={{WebkitTextFillColor:'white',fontWeight:'bold'}} onClick={footerScroll}>FAQ's</Nav.Link>
           
          </Nav>
          <>
          <i className="pi pi-spin pi-cog" style={{ fontSize: '2rem',color:'white' }} onClick={handleShow}></i>
          <Modal 
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        
      >
        <Modal.Header closeButton >
          <Modal.Title>Edit Details</Modal.Title>
        </Modal.Header>
        <div >
        <Form style={{margin:'20px 20px'}} onSubmit={handleClick}>
        <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter FirstName" value={formData.firstName} onChange={handleChange} name="firstName" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridLastName">
          <Form.Label>LastName</Form.Label>
          <Form.Control type="text" placeholder="Enter LastName" value={formData.lastName} onChange={handleChange} name="lastName" />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={formData.email} onChange={handleChange} name="email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={formData.password} onChange={handleChange} name="password" />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridPhNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="text" value={formData.phNumber} onChange={handleChange} name="phNumber" placeholder='Enter Phone Number'/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridSsn">
          <Form.Label>SSN ID</Form.Label>
          <Form.Control type="text" value={formData.ssn} onChange={handleChange} name="ssn" placeholder="Enter SSN Id"/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridDob">
          <Form.Label>Date Of Birth</Form.Label>
          <Form.Control type="date" value={formData.dob} onChange={handleChange} name="dob"/>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control  value={formData.address1} onChange={handleChange} name="address1" placeholder="Enter Address Line 1"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Enter Address Line 2" value={formData.address2} onChange={handleChange} name="address2" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control value={formData.city} onChange={handleChange} name="city" placeholder='Enter City'/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Control value={formData.state} onChange={handleChange} name="city" placeholder='Enter State'/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCountry">
          <Form.Label>Country</Form.Label>
          <Form.Control value={formData.country} onChange={handleChange} name="country" placeholder='Enter Country'/>
        </Form.Group>
      </Row>

      <Button variant="secondary" type="submit">
        Submit
      </Button>
    </Form>
        </div>
      </Modal>
      </>
          <Button onClick={handleClick} className="nav-link" style={{WebkitTextFillColor:'white',margin:'10px',width:'70px',height:'35px',backgroundColor:'white',WebkitTextFillColor:'black',border:'white',borderRadius:'5px',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:'bold'}}>Log out</Button>
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

     <div >  
  <div className='p-5' >  
  <Carousel fade className="auth-component" style={{maxHeight:"100vh", height:"530px",width:"100%",borderRadius:"15px"}}>  
<Carousel.Item>  
<img style={{maxHeight:"100vh", height:"450px",width:"100%",borderRadius:"15px"}}  
    className="d-block w-100 "  
    src={img2}  
    alt="First slide"  
  />  
  <Carousel.Caption >  
    <h3>We provide a platform for startups to get funding from the investors right from the bootstrap stage</h3>  
    <Button variant="success">Invest In Us</Button> 
  </Carousel.Caption>  
</Carousel.Item>  
<Carousel.Item>  
  <img  
    className="d-block w-100"  
    src={img2}  
    alt="Second slide"  
    style={{maxHeight:"100vh", height:"450px",width:"100%",borderRadius:"15px"}} 
  />  

  <Carousel.Caption style={{marginBottom:"50px"}}>  
    <h3 >Our vision is to provide Right oppourtunity for the right potential </h3> 
    <h3></h3> 
  </Carousel.Caption>  
</Carousel.Item>  
<Carousel.Item>  
  <img  
    className="d-block w-100"  
    src={img2}  
    alt="Third slide"  
    style={{maxHeight:"100vh", height:"450px",width:"100%",borderRadius:"15px"}} 
  />  

  <Carousel.Caption>  
     
  </Carousel.Caption>  
</Carousel.Item>  
</Carousel>  
</div>  
  </div>  
  </div>
  );
}

export default Ihome;
