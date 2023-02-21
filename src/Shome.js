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
        label: 'Settings',
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
            <Nav.Link href="/profile" style={{WebkitTextFillColor:'white',fontWeight:"bold"}} onClick={changePage}>Settings</Nav.Link>
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
      <Button variant="secondary" type="submit">
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
          <p style={{fontSize:"25px"}}>{sData.vision}</p>
          
          <Button variant="success">Invest Now</Button>
        </Col>
        
        <Col md={6} >
          <div style={{height:"300px",width:"600px",right:0,borderRadius:"50px 50px 50px 50px",overflow:'hidden',marginTop:"50px"}}>
            <ReactPlayer url={sData.video} controls={true} width="600px" height="300px"  />
           
          </div>
        </Col>
      </Row>
      <Tab.Container  id="left-tabs-example" defaultActiveKey="Description"  >
      <Row style={{marginTop:"30px"}}>
        <Col sm={3}>
          <Nav variant="pills"  className="flex-column" > 
            <Nav.Item >
              <Nav.Link eventKey="Description" cla >Description</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Revenue">Revenue</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Investments">Investments</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="productDetails">productDetails</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="AboutFounders">About Founders</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="LocationDetails">Location Details</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9} >
          <Tab.Content>
            <Tab.Pane eventKey="Description">
              <h3>{sData.description}</h3>
            </Tab.Pane>
            <Tab.Pane eventKey="Revenue">
              <h2>Total Revenue: ${sData.revenue}</h2>
              <p>Details of revenue in last 3 Months:</p>
              <BarChart width={500} height={300} data={sData.last3MonthsRevenue} style={{float:"right"}}>
                      <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis />
                   <Tooltip />
                <Legend />
                 <Bar dataKey="revenue" fill="#8884d8" />
             </BarChart>
            </Tab.Pane>
            <Tab.Pane eventKey="Investments">
            <div style={{ overflow: 'auto', height: '400px' }}>
      <Table striped bordered hover>
        <thead>
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
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  </Container>
  
  </div>
  );
}

export default Shome;
