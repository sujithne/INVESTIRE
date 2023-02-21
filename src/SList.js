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
    navigate('/shome')
  }

  function extractVideoId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
  
    return match && match[2].length === 11 ? match[2] : null;
  }
  

  const priorInvestors=[{name:"i1",investment:30},{name:"i2",investment:40}]
  const sData={
    email: 'sample@gmail.com',
    password: '',
    startUpName:'Investire',
    year:'',
    vision:'To provide Right oppourtunity for the right potential',
    description:'We provide a platform for startups to get funding from the investors right from the bootstrap stage.',
    city:'',
    state:'',
    address1:'',
    address2:'',
    phNumber:'',
    country:'',
    category:'',
    productDescription:"",
    aboutFounders:'',
    revenue:"1000000",
    monthlySales:{"jan":"321","feb":"432"},
    yealyBreakUp:{"2020":"6789","2022":"6789"},
    percentOffer:"",
    totalValuation:"",
    costPerBit:"",
    time:"",
    priorInvestment:"",
    video:"https://youtu.be/Nl-HyC9C7P0",
    totalBits:2000,
    image:'',
    last3MonthsRevenue:[
      { month: 'Jan', revenue: 100 },
      { month: 'Feb', revenue: 200 },
      {month: 'Mar',revenue:300}
    ]
  }
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
  const [searchTerm,setSearchTerm]=useState("");
  const handleSearch=(e)=>{
    setSearchTerm(e.target.value);
  }

  
    const [isVisible, setIsVisible] = useState(false);
    const toast = useRef(null);
    const navigate=useNavigate();
    const handleClick = () => {
      changePage("home");
      navigate('/home');
    };
    
    const sList=[sData,{startUpName:"abc",video:"https://youtu.be/jDLuJLoaA_g", investors:[
        {
          investor: 'investor1',
          investment: '$10,000',
          date: '04/04/2022'
        },
        {
          investor: 'investor2',
          investment: '$5,000',
          date: '02/02/2023'
        }
      ]},sData,sData,sData,sData,sData,sData,sData,sData,sData,sData]
   const filteredItems=sList.filter((item)=>item.startUpName.toLowerCase().includes(searchTerm.toLowerCase()));
   
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
         {page==="shome"? <Nav.Link href="/shome" style={{WebkitTextFillColor:'white',fontWeight:"bold"}}>Home</Nav.Link>:null}
         {page==="ihome"? <Nav.Link href="/ihome" style={{WebkitTextFillColor:'white',fontWeight:"bold"}}>Home</Nav.Link>:null }
            <Nav.Link href="/profile" style={{WebkitTextFillColor:'white',fontWeight:"bold"}}>Settings</Nav.Link>
            <Nav.Link href="#link" style={{WebkitTextFillColor:'white',fontWeight:"bold"}}>FAQ's</Nav.Link>
           
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
  <h1 style={{marginTop:"20px",marginLeft:"20px"}}>StartUps</h1>
  <div style={{display:"flex",flexWrap:"wrap"}}>
    
    {filteredItems.map((item,a=extractVideoId(item.video))=>(
        
        <div  className='auth-inner1' style={{marginBottom:"20px"}}>
          <div  style={{display:"none"}}> {a=extractVideoId(item.video)}</div>
          <h3>{item.startUpName}</h3>
            <img src={"https://img.youtube.com/vi/"+a+"/hqdefault.jpg"} alt="YouTube Thumbnail" style={{height:"120px",width:"100%",transform:`translateY(5px)`,objectFit:'cover',imageRendering:'optimizeQuality',borderRadius:"20px 20px 0px 0px"}}/>
            <Button variant="success" onClick={()=>handleInvest(item)} style={{width:"100%",height:"40px"}}>Invest</Button>
         </div>
    ))}
    </div>
    </div>
  </div>
  );
}

export default SList;
