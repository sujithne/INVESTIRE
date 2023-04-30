import React,{useState,useRef,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Modal from 'react-bootstrap/Modal';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Login from './Login'
import SignUp from './signUp'
import App from './App'
import { Dropdown } from 'react-bootstrap';
import { SplitButton } from 'primereact/splitbutton';
import { Toast } from 'primereact/toast';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import { Form } from 'react-bootstrap';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import Col from 'react-bootstrap/Col';
import {  Image, Card, Table } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import ReactPlayer from 'react-player';

function SList(props) {
const {page,changePage,sName,changeSName}=props
  const handleInvest=(e)=>{
    changeSName(e);
    navigate('/sDetails')
  }

  function extractVideoId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
  
    return match && match[2].length === 11 ? match[2] : null;
  }
  

  const priorInvestors=[{name:"i1",investment:30},{name:"i2",investment:40}]
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [formData,setFormData]=useState({
    email: 'sample@gmail.com',
    password: '',
  });
  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
    };

  const [category, setCategory] = useState("");
  const [searchTerm,setSearchTerm]=useState("");
  const handleSearch=(e)=>{
    setSearchTerm(e.target.value);
  }
    const handleCategory = (e) => {
        if (e.target.value == "select Category...") {
            setCategory("");
        }
        else {
            setCategory(e.target.value);
        }
  }
  
  const [isVisible, setIsVisible] = useState(false);
    const toast = useRef(null);
    const navigate=useNavigate();
    const handleClick = () => {
      changePage("home");
      navigate('/home');
    };
    
//     
const [sList, setData] = useState([]);
const [error, setError] = useState(null);
const footerScroll=()=>{
  window.scrollTo({
    top:document.body.scrollHeight,
    behavior:"smooth"
  });
}
useEffect(() => {
   
    const fetchData = async () => {
      try {
        const response = await fetch('http://52.207.171.26:8081/getStartUps',{
            method: 'GET',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json'
            }
          });
          console.log(response);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const contentType = response.headers.get('content-type');
          if (contentType && contentType.indexOf('application/json') !== -1) {
            const json = await response.json();
            setData(json);
            

            setError(null);
          } else {
            const text = await response.text();
            setData(text);
            setError(null);
          }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
}, []);
const currentDate=new Date().toISOString().slice(0,10);
 const [activeFundings,setActiveFundings]=useState(false);
    const filteredActive=activeFundings?sList.filter((item)=>item.time>=currentDate):sList;
    const filteredCategories = filteredActive.filter((item) => item.category.toLowerCase().includes(category.toLowerCase()));
    const filteredItems = filteredCategories.filter((item) => item.startUpName.toLowerCase().includes(searchTerm.toLowerCase()));
   const handleShome=()=>{
    navigate("/shome")
   }
   const handleIhome=()=>{
    navigate("/ihome")
   }
   
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
          {console.log(page)}
         {page==="shome"? <Nav.Link onClick={handleShome} style={{WebkitTextFillColor:'white',fontWeight:"bold"}}><i className="pi pi-home" style={{ color: '#708090' }}></i> Home</Nav.Link>:null}
         {page==="ihome"? <Nav.Link onClick={handleIhome} style={{WebkitTextFillColor:'white',fontWeight:"bold"}}><i className="pi pi-home" style={{ color: '#708090' }}></i> Home</Nav.Link>:null }
            <Nav.Link href="#link" style={{WebkitTextFillColor:'white',fontWeight:"bold"}} onClick={footerScroll}>FAQ's</Nav.Link>
           
          </Nav>
          <div style={{width:"200px"}}>
          <InputGroup  >
        <Form.Control type="text" value={searchTerm} onChange={handleSearch} />
        <InputGroup.Text id="basic-addon2"><i className="pi pi-search" style={{ fontSize: '1rem',color:'black' }} onClick={handleShow}></i></InputGroup.Text>
      </InputGroup>
      </div>
          <>
          
      </>
          <Button onClick={handleClick} className="nav-link" style={{WebkitTextFillColor:'white',margin:'10px',width:'70px',height:'35px',backgroundColor:'white',WebkitTextFillColor:'black',border:'white',borderRadius:'5px',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:"bold"}}>Log out</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
  <div style={{marginTop:"130px"}}>
              <h1 style={{ marginTop: "20px", marginLeft: "20px" }}>StartUps</h1>
              <Form.Group as={Col} controlId="formGridLastName">
                  <Form.Select style={{ opacity: 0.8, width:"25%", marginLeft:"40px" }} value={category} onChange={handleCategory} name="category">
                      <option>select Category...</option>
                      <option>Agriculture</option>
                      <option>Education</option>
                      <option>Information Technology</option>
                      <option>E-Commerce</option>
                      <option>Food</option>
                      <option>Fashion</option>
                      <option>Insurance</option>
                      <option>HealthCare</option>
                      <option>Machinery(Hardware technology)</option>
                      <option>Real Estate</option>
                      <option>Restaraunts</option>
                      <option>Others</option>
                  </Form.Select>
              </Form.Group>
              <Form.Check type="switch" id="yes-no-switch" label={'Active Fundings'} onChange={()=>{setActiveFundings(!activeFundings)}} name="activeFundings" checked={activeFundings} style={{ opacity: 0.8, width:"100%", marginLeft:"50px",marginTop:"10px" }}/>
  <div style={{display:"flex",flexWrap:"wrap",marginLeft:"40px"}}>
    
    {filteredItems.map((item,a=extractVideoId(item.video))=>(
        
        <div  className='auth-inner1' style={{marginBottom:"20px",width:"22%",height:'275px'}}>
          <div  style={{display:"none"}}> {a=extractVideoId(item.video)}</div>
          <h3 style={{marginTop:'2px'}}>{item.startUpName}</h3>
            <img src={"https://img.youtube.com/vi/"+a+"/hqdefault.jpg"} alt="YouTube Thumbnail" style={{height:"150px",width:"100%",transform:`translateY(7px)`,objectFit:'cover',imageRendering:'optimizeQuality',borderRadius:"15px 15px 15px 15px"}}/>
            <Button variant="success" onClick={()=>handleInvest(item)} style={{width:"40%",height:"40px",float:'right',marginTop:'20px'}}>Invest</Button>

         <p style={{fontWeight:'bold',marginTop:'10px'}} title= "totalValuation / (totalBits * percentOffer)">BitValue: ${item.costPerBit}</p>
         </div>
    ))}
    </div>
          </div>
          <div style={{ height:"300px"}}></div>
    </div>
  );
    }

export default SList;
