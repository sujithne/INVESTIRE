import React,{useState,useRef,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Modal from 'react-bootstrap/Modal';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './index.css';
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

import Tab from 'react-bootstrap/Tab'
import Col from 'react-bootstrap/Col';
import {  Image, Card, Table } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import ReactPlayer from 'react-player';

function SDetails(props) {
  
  const {page,changePage,sData,startUp}=props;
  console.log(sData);
  console.log(sData.time);
  const d1=new Date(sData.time);
  const d2=new Date();
  const diff=(d1.getTime()-d2.getTime());
  const days=Math.ceil(diff/(1000*3600*24));
  console.log(days);
  const [thumbnailUrl, setThumbnailUrl] = useState('');
  const fetchData = async (a) => {
    console.log(a);
    const videoId = extractVideoId(a);
    console.log(formData.logo)
    console.log(videoId)
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=AIzaSyBurQjs3UPBzNCa8bh7zzTvK1IRQaS4L54`
    );
    const data = await response.json();
    setThumbnailUrl(data.items[0].snippet.thumbnails.default.url);
  };
  function extractVideoId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
  
    return match && match[2].length === 11 ? match[2] : null;
  }
useEffect(() => {
  window.scrollTo(0,0);
  fetchData(sData.video);
}, []);
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
   

    const [isVisible, setIsVisible] = useState(false);
    const toast = useRef(null);
    const navigate=useNavigate();
    const handleClick = () => {
      changePage("home");
      navigate('/home');
    };
    const handleStartUp = () => {
      navigate('/startUps');
    };
    const handleInvest = () => {
      console.log("startUp  "+startUp);
      if(startUp!=""){
        alert("startUp cannot Invest!,Login as Investor...");
        navigate('/startUps');
      }
      else{
      navigate('/payment');
    }
    };
    const [recentInvestors,setRecent]=useState([])
    useEffect(()=>{
    const fetchInvestments= async ()=>{
      try {
        const response = await fetch('http://localhost:8080/api/recentInvestments/'+sData.email,{
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
            setRecent(json);
            console.log(json);
          } 
      } catch (error) {
        console.error(error);
      }
      
    }
    fetchInvestments();
    },[]);
    const footerScroll=()=>{
      window.scrollTo({
        top:document.body.scrollHeight,
        behavior:"smooth"
      });
    }
    function navigateToGmail() {
      const gmailUrl = 'https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to='+sData.email;
      const gmailWindow = window.open(gmailUrl, '_blank');
      gmailWindow.focus();
      
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
            <Nav.Link href="" style={{WebkitTextFillColor:'white',fontWeight:"bold"}} onClick={handleStartUp}><i className="pi pi-discord" style={{ color: '#708090' }}></i> StartUps</Nav.Link>
            <Nav.Link  style={{WebkitTextFillColor:'white',fontWeight:"bold"}} onClick={footerScroll}>FAQ's</Nav.Link>
           
          </Nav>
          
          <Button onClick={handleClick} className="nav-link" style={{WebkitTextFillColor:'white',margin:'10px',width:'70px',height:'35px',backgroundColor:'white',WebkitTextFillColor:'black',border:'white',borderRadius:'5px',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:"bold"}}>Log out</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
  <Container style={{marginTop:"130px"}}>
      <Row >
        
        <Col md={6}>
          <h1 style={{fontSize:"50px"}}>{sData.startUpName}</h1>
          <p style={{fontSize:"25px"}}>{sData.vision}</p>
          
           <p>Total Time Remaining: {days>=0? days==0?<b>Last Day</b>:<b>{days} {days===1?"day":"days"}</b>:<b style={{color:"red"}}>Funding Time Completed</b>}</p>
          <p>Current Bit Value: <b title= "Bit value is the(Total valuation * % of startup offering)/(100 * Number of bits)">${sData.costPerBit}</b></p>
          <p>Having any queries? Please <Button variant="danger" onClick={navigateToGmail}><i className="pi pi-envelope" style={{ color: 'white' }}></i> Click Here</Button></p>
          <Button variant="success" disabled={days<0} onClick={handleInvest}>Invest Now</Button>
          
          
        </Col>
        
        
        <Col md={6} >
          <div style={{height:"300px",width:"600px",right:0,borderRadius:"50px 50px 50px 50px",overflow:'hidden',marginTop:"50px"}}>
            <ReactPlayer url={sData.video} controls={true} width="600px" height="300px"  />
           
          </div>
        </Col>
      </Row>
      <Tab.Container  id="left-tabs-example" defaultActiveKey="Description"  >
      <Row style={{marginTop:"30px"}}>
        
          <Nav variant="tabs"  > 
            <Nav.Item >
              <Nav.Link eventKey="Description" cla style={{color:'black',fontWeight:'bold'}}>Description</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Revenue" style={{color:'black',fontWeight:'bold'}}>Revenue</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Investments" style={{color:'black',fontWeight:'bold'}}>InvestmentDetails</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="productDetails" style={{color:'black',fontWeight:'bold'}}>productDetails</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="AboutFounders" style={{color:'black',fontWeight:'bold'}}>About Founders</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="LocationDetails" style={{color:'black',fontWeight:'bold'}}>Location Details</Nav.Link>
            </Nav.Item>
          </Nav>
       </Row>
        <Row style={{marginTop:'20px',height:"400px"}}>
          <Tab.Content>
            <Tab.Pane eventKey="Description">
            <p style={{fontSize:'22px'}}>{sData.description}</p>
            </Tab.Pane>
            <Tab.Pane eventKey="Revenue">
              <div>
                <div>
              <h2>Total Revenue: ${sData.revenue}</h2>
              <p>Details of revenue in last 3 Months:</p>
              <BarChart width={500} height={300} data={sData.last3MonthsRevenue} style={{float:"left"}}>
                      <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis />
                   <Tooltip />
                   <Legend verticalAlign="top" align="right" />
                 <Bar dataKey="revenue" fill="#8884d8" />
             </BarChart>
             </div>
             <div>
             <h3>Profit Details:</h3>
             <p style={{fontSize:'22px'}}><b>Gross Profits Percentage:</b> {sData.grossProfit}%</p>
             <p style={{fontSize:'22px'}}><b>Net Profits Percentage:</b> {sData.netProfit}%</p>
             {sData.anyCashBurn=='Yes'?<p style={{fontSize:'22px'}}><b>Cash Burn Percentage Per Month:</b> {sData.cashBurn}%</p>:null}
             </div>
             </div>
            </Tab.Pane>
            <Tab.Pane eventKey="Investments">
            <div style={{ overflow: 'auto', height: '400px' }}>
      {sData.priorInvestment}
    </div>
            </Tab.Pane>
            <Tab.Pane eventKey="productDetails">
              <p style={{fontSize:'22px'}}>{sData.productDescription}</p>
            </Tab.Pane>
            
            <Tab.Pane eventKey="AboutFounders">
              <p style={{fontSize:'22px'}}>{sData.aboutFounders}</p>
            </Tab.Pane>
            <Tab.Pane eventKey="LocationDetails">
              
              <p style={{fontSize:'22px'}}><b>Address1:</b> {sData.address1}</p>
              <p style={{fontSize:'22px'}}><b>Address2:</b> {sData.address2}</p>
              <p style={{fontSize:'22px'}}><b>City:</b> {sData.city}</p>
              <p style={{fontSize:'22px'}}><b>State:</b> {sData.state}</p>
              <p style={{fontSize:'22px'}}><b>Country:</b> {sData.country}</p>


            </Tab.Pane>
          </Tab.Content>
        </Row>
      
    </Tab.Container>
     
  </Container>
  
  </div>
  );
}

export default SDetails;
