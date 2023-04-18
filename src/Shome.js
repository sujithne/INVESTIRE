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
import RealtimeGraph from './RealtimeGraph';
function Shome(props) {
  
  const {page,changePage,sData}=props;
  console.log(sData);
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
    if(event.target.name=='email'){
      if(/\S+@\S+\.\S+/.test(event.target.value))setEmailCheck(1);
      else setEmailCheck(0);
    }
    if(event.target.name=='password'){
      setPassword(event.target.value);
    }
      if(event.target.name=='confirmPassword'){
        if(event.target.value!=formData.password)setPassCheck(0);
        else setPassCheck(1);
      }
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };
  const[passCheck,setPassCheck]=useState(1);
  const[emailCheck,setEmailCheck]=useState(1);
  
    const [password, setPassword] = useState('');
  
    const hasLowerCase = /[a-z]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password);
    const isLengthValid = password.length >= 8;
  
    const getValidationMessage = () => {
      let message = '';
  
      if (!hasLowerCase) {
        message += ' At least one lowercase letter';
      }
  
      if (!hasUpperCase) {
        message += ' At least one uppercase letter';
      }
  
      if (!hasNumber) {
        message += ' At least one number';
      }
  
      if (!hasSpecialChar) {
        message += ' At least one special character';
      }
  
      if (!isLengthValid) {
        message += ' Minimum length of 8 characters';
      }
  
      return message;
    };

    const [isVisible, setIsVisible] = useState(false);
    const toast = useRef(null);
    const navigate=useNavigate();
    const handleClick = () => {
      changePage("home");
      navigate('/home');
    };
    const handleStartUp = () => {
      changePage("shome");
      navigate('/startUps');
    };
    const items = [{
      label: 'MyInvestments',
      icon: 'pi pi-refresh',
      command:(e) => {
          window.location.href = '#'
      }},
      {
        label: 'Profile',
        command:(e) => {
            window.location.href = '#'
        }}];
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
            <Nav.Link href="" style={{WebkitTextFillColor:'white',fontWeight:"bold"}} onClick={handleStartUp}>StartUps</Nav.Link>
            <Nav.Link href="/profile" style={{WebkitTextFillColor:'white',fontWeight:"bold"}} onClick={changePage}>Update</Nav.Link>
            <Nav.Link href="#link" style={{WebkitTextFillColor:'white',fontWeight:"bold"}}>FAQ's</Nav.Link>
           
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
          <Modal.Title>Change Password</Modal.Title>
        </Modal.Header>
        <div >
        <Form style={{margin:'20px 20px'}} onSubmit={handleClick}>
       
      
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={formData.email} onChange={handleChange} name="email" />
          {emailCheck==0?  <p style={{color:'red', marginTop:'1px'}}>Invalid Email</p>:null}
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword" style={{marginTop:'10px'}}>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Password" title={getValidationMessage()} value={formData.password} onChange={handleChange} name="password" />
          {password!='' && (!hasLowerCase ||
        !hasUpperCase ||
        !hasNumber ||
        !hasSpecialChar ||
        !isLengthValid )? (
        <p style={{color:'red', marginTop:'1px'}}>Enter Valid Password</p>
      ) : null}
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword" style={{marginTop:'10px'}}>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password"  onChange={handleChange} name="confirmPassword" />
          {passCheck==0?  <p style={{color:'red', marginTop:'1px'}}>Password Not Matched</p>:null}

        </Form.Group>
      
      <Button variant="secondary" type="submit" style={{marginTop:'5px',marginBottom:'5px',float:'right'}}>
        Submit
      </Button>
    </Form>
        </div>
      </Modal>
      </>
          <Button onClick={handleClick} className="nav-link" style={{WebkitTextFillColor:'white',margin:'10px',width:'70px',height:'35px',backgroundColor:'white',WebkitTextFillColor:'black',border:'white',borderRadius:'5px',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:"bold"}}>Log out</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
  <Container style={{marginTop:"130px"}}>
      <Row >
        
        <Col md={6}>
          <h1 style={{fontSize:"50px"}}>{sData.startUpName}</h1>
          <p>Required Investment Fund: <b>${(sData.percentOffer *sData.totalValuation)/100}</b></p>
          <p>Current Investment :<b>$54500</b></p>
          <p>Total Time Remaining: <b>{sData.time}</b></p>
          <p>Current Bit Value: <b>${sData.costPerBit}</b></p>
        </Col>
      <Col md={4}>  <h3 style={{marginLeft:'40%'}}>Real Time Funding</h3>
      <RealtimeGraph style={{float:'right',top:1}}/></Col>
        

        <h2 style={{marginTop:'20px'}}>Recent Fundings</h2>
            <div style={{ overflow: 'auto', height: '200px' }}>
        <Table striped bordered hover >
        <thead style={{position:'sticky',top:0,backgroundColor:'grey',color:'Black'}}>
          <tr>
            <th>Investor</th>
            <th>Investment</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {sData.investors.map((item, index) => (
            <tr key={index}>
              <td>{item.investor}</td>
              <td>{item.investment}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      </div>
      <h2 style={{marginTop:'30px'}}>Top 10 Fundings</h2>
      <Table striped bordered hover style={{marginLeft:'15px',width:'98%'}}>
        <thead style={{backgroundColor:'grey'}}>
          <tr>
            <th>Investor</th>
            <th>Investment</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {sData.investors.sort((a,b)=>{const A=Number(a.investment.replace(/[^0-9.-]+/g,""));
                                        const B=Number(b.investment.replace(/[^0-9.-]+/g,""));
                                        return B-A;}).map((item, index) => (
            <tr key={index}>
              <td>{item.investor}</td>
              <td>{item.investment}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </Table>
        
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

export default Shome;
