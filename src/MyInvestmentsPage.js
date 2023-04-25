import InvestmentTable from './InvestmentTable';
import CumulativeInvestmentTable from './CumulativeInvestmentTable';
import { InputText } from "primereact/inputtext";
import "./PaymentPage.css";
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
const MyInvestmentsPage = (props) => {
    // const investments = [
    //     {
    //       investedCompany: "larq",
    //       investment: "100",
    //       bits:2,
    //       date: "2022-01-05",
    //       time: "12:30:00"
    //     },
    //     {
    //       investedCompany: "smart soda",
    //       investment: "165",
    //       bits:3,
    //       date: "2022-02-12",
    //       time: "14:45:00"
    //     },
    //     {
    //       investedCompany: "scrub daddy",
    //       investment: "500",
    //       bits:10,
    //       date: "2022-03-17",
    //       time: "10:15:00"
    //     },
    //     {
    //       investedCompany: "larq",
    //       investment: "800",
    //       bits:16,
    //       date: "2022-04-21",
    //       time: "11:00:00"
    //     },
    //     {
    //       investedCompany: "scrub daddy",
    //       investment: "50",
    //       bits:1,
    //       date: "2022-05-28",
    //       time: "09:00:00"
    //     }
    //   ];
 //  const investments=[{"investmentCompany":"business","investment":6000.0,"bits":10,"date":"2023-03-19","time":"12:47:02","startUpEmail":"stest@gmail.com"},{"investmentCompany":"business","investment":5000.0,"bits":8,"date":"2023-03-19","time":"12:47:29","startUpEmail":"stest@gmail.com"}]
    const {page,changePage,sData,investor,investments,Cinvestments,changeSName}=props;
    const toast = useRef(null);
    const navigate=useNavigate();
    
  const handleClick = () => {
    changePage("home");
    navigate('/home');
  };
  const handleHome = () => {
    changePage("ihome");
    navigate('/ihome');
  };
  const handleStartUp = () => {
    navigate('/startUps');
  };
  const footerScroll=()=>{
    window.scrollTo({
      top:document.body.scrollHeight,
      behavior:"smooth"
    });
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
            <Nav.Link href="" style={{WebkitTextFillColor:'white',fontWeight:"bold"}} onClick={handleHome}><i className="pi pi-home" style={{ color: '#708090' }}></i> Home</Nav.Link>
            <Nav.Link  style={{WebkitTextFillColor:'white',fontWeight:"bold"}} onClick={footerScroll}>FAQ's</Nav.Link>
           
          </Nav>
          
          <Button onClick={handleClick} className="nav-link" style={{WebkitTextFillColor:'white',margin:'10px',width:'70px',height:'35px',backgroundColor:'white',WebkitTextFillColor:'black',border:'white',borderRadius:'5px',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:"bold"}}>Log out</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
  <div style={{marginLeft:'50px',marginRight:'50px'}}>
      <h1 style={{marginTop:'130px'}}>Investment History</h1>
    {(investments.length!=0)?<InvestmentTable investments={investments} changeSName={changeSName}/>:null}  
      </div>

      <div style={{marginLeft:'50px',marginRight:'50px'}}>
      <h1 style={{marginTop:'30px'}}>Cumulative Investments</h1>
    {(investments.length!=0)?<CumulativeInvestmentTable investments={Cinvestments} changeSName={changeSName}/>:null}  
      </div>
    </div>
  );
};

export default MyInvestmentsPage;
