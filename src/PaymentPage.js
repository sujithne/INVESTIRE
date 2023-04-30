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
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import { Form } from 'react-bootstrap';
import { Dialog } from 'primereact/dialog';
import { Image } from 'primereact/image';
import CreditCardForm from './CreditCardForm';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import Stripe from "react-stripe-checkout";
function PaymentPage(props) {
    const {page,changePage,sData,investor}=props;
    const toast = useRef(null);
    const navigate=useNavigate();
  const [quantity, setQuantity] = useState(1);
  const handleClick = () => {
    changePage("home");
    navigate('/home');
    };
    const [data,setData]=useState();
    const fetchStartUpData = async () => {
      try {
        const response = await fetch('http://52.207.171.26:8081/api/totalFund/'+sData.email);
        const data = await response.text();
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    useEffect(() => {
  
      fetchStartUpData();
     
    }, []);
    const [CheckOut, setCheckOut] = useState(false);

  const handleStartUp = () => {
    navigate('/startUps');
  };
  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }
  const [purchaseAmount, setPurchaseAmount] = useState(0);
  const [purchaseBrand, setPurchaseBrand] = useState("");

  const [paymentStatus, setPaymentStatus] = useState(null);


  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }

  const handleCheckout=async ()=> {
    // Simulate a checkout process
    const purchasePrice = quantity * sData.CostPerBit;

    setPurchaseAmount(purchasePrice);

    try {
      const response = await fetch('http://52.207.171.26:8081/api/user/payment?investorEmail='+investor+'&startUpEmail='+sData.email+'&bits='+quantity+'&amount='+quantity * sData.costPerBit,{
          method: 'PUT',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json'
          },
          
        });
        console.log(response);
       
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.indexOf('application/json') !== -1) {
          const json = await response.json();
         
          console.log(json);
          if (json.message=="success") {
            setPaymentStatus("success")
            // alert(
            //   `Payment Successful! You have purchased ${quantity} bits of ${sData.startUpName} for a total amount of $${quantity * sData.costPerBit}.`
            // );
            // navigate("/"+page);
          } else {
            // alert("Payment Failed :(");
            setPaymentStatus("failure")
          }

         
        } 
    } catch (error) {
      console.error(error);
    }

    
  }
  const footerScroll=()=>{
    window.scrollTo({
      top:document.body.scrollHeight,
      behavior:"smooth"
    });
  }
  const handleSuccess=()=>{
    setPaymentStatus(null)
    navigate("/ihome")
  }

  async function handleToken(token) {
    setPaymentStatus("loading");
    console.log(token);
    await axios.post("http://52.207.171.26:8081/api/payment/charge", "", {         headers: {
      token: token.id,
      amount: quantity * sData.costPerBit,
    },}).then((data) => {
      console.log(data);
      if(data.data.amount==null){
        setPaymentStatus("failure");
      }
      else{
      handleCheckout();
      }
       }).catch((error) => {
        setPaymentStatus("failure");
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
            <Nav.Link href="" style={{WebkitTextFillColor:'white',fontWeight:"bold"}} onClick={handleStartUp}><i className="pi pi-discord" style={{ color: '#708090' }}></i> StartUps</Nav.Link>
            <Nav.Link  style={{WebkitTextFillColor:'white',fontWeight:"bold"}} onClick={footerScroll}>FAQ's</Nav.Link>
           
          </Nav>
          
          <Button onClick={handleClick} className="nav-link" style={{WebkitTextFillColor:'white',margin:'10px',width:'70px',height:'35px',backgroundColor:'white',WebkitTextFillColor:'black',border:'white',borderRadius:'5px',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:"bold"}}>Log out</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>

    <Modal show={CheckOut === true} onHide={() => setCheckOut(false)} centered>
              <Modal.Header closeButton >
                  <Modal.Title style={{ fontWeight: "bold", fontSize:"28px" }}>Credit Card Details</Modal.Title>
              </Modal.Header>
              <Modal.Body className="text-center">
                  <CreditCardForm investor={investor} handleCheckout={handleCheckout} setCheckOut={setCheckOut} setPaymentStatus={setPaymentStatus} />
     </Modal.Body>
     </Modal>

  <Modal show={paymentStatus === 'success'} onHide={() => setPaymentStatus(null)} centered>
  <Modal.Body className="text-center">
    <img src="https://www.clipartmax.com/png/small/270-2707415_confirm-icon-payment-success.png" alt="Success" width="50" height="50" style={{borderRadius:"60%"}}/>
    <h5 className="mt-2">Payment Successful</h5>
    <p>Your payment was successful. Thank you for your Investment!</p>
    <button className="btn btn-primary" onClick={handleSuccess}>
      Close
    </button>
  </Modal.Body>
</Modal>
<Modal show={paymentStatus === 'loading'} onHide={() => setPaymentStatus(null)} centered>
  <Modal.Body className="text-center">
  <i className="pi pi-spin pi-sync" style={{ fontSize: '3rem',color:'lightGrey' }} ></i>    <h5 className="mt-2">Transaction in progress</h5>
    <p>Please do not close this window</p>
    <button className="btn btn-primary" onClick={handleSuccess} disabled={true}>
      Close
    </button>
  </Modal.Body>
</Modal>

<Modal show={paymentStatus === 'failure'} onHide={() => setPaymentStatus(null)} centered>
  <Modal.Body className="text-center">
    <img src="https://www.clipartmax.com/png/middle/100-1005122_cancelled-close-delete-exit-no-reject-wrong-icon-red-cross-no-entry.png" alt="Failure" width="50" height="50" style={{borderRadius:"50%"}} />
    <h5 className="mt-2">Payment Failed</h5>
    <p>Payment Failed! Try Again...</p>
    <button className="btn btn-primary" onClick={() => setPaymentStatus(null)}>
      Close
    </button>
  </Modal.Body>
</Modal>


  <div className="payment-container" style={{marginTop:'130px'}}>
      <h1 className="payment-title">Payment Page</h1>
      <div className="payment-form">
        <div className="form-group">
          <label className="form-label" htmlFor="quantity">
            Bits Quantity:
          </label>
          <InputText
            className="form-select"
            id="quantity"
            value={quantity}
            onChange={handleQuantityChange}
            type='number'
            min={1}
            max={((((sData.percentOffer*sData.totalValuation)/100)-data)/sData.costPerBit).toFixed(0)}
            title={`${((((sData.percentOffer*sData.totalValuation)/100)-data)/sData.costPerBit).toFixed(0)} bits available`}
          >
           
          </InputText>
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="total-amount">
            Total Amount:
          </label>
          <p className="form-text" id="total-amount">
            ${quantity * sData.costPerBit}
          </p>
        </div>
        <div style={{marginTop:'20px'}}>
        </div>
       {Number(quantity)>(((((sData.percentOffer*sData.totalValuation)/100)-data)/sData.costPerBit).toFixed(0))? <p style={{color:"red"}}>{((((sData.percentOffer*sData.totalValuation)/100)-data)/sData.costPerBit).toFixed(0)} bits available </p>:null}
        
        <div className="app" disabled={true}>
<Stripe style={{width:"250px"}} className="btn btn-success"
stripeKey="pk_test_51MzNM9KQgOJA1rtVIWVXeRYAR516UTZFMS2QrWrI2lUJbxpIGic45fxp8c3bjHHCuxgFi1MySqGpvbbN0OzVOiVu00Zv279hBH"
token={handleToken}
email={investor}
label="Check Out"
image="https://svgshare.com/i/CUz.svg"
description={quantity==1?`Your total amount is $${quantity * sData.costPerBit} of ${quantity} bit`:`Your total amount is $${quantity * sData.costPerBit} of ${quantity} bits`}
name="Funding Summary"
disabled={Number(quantity)>(((((sData.percentOffer*sData.totalValuation)/100)-data)/sData.costPerBit).toFixed(0))}
/>

</div>
<p style={{color:"gray",marginTop:"10px",fontSize:"10px"}}>*all types of cards accepted</p>
<img src="https://rapidlei.com/wp-content/uploads/2018/12/visa-mastercard-amex.png" style={{height:"30px",width:"200px"}}></img>
      </div>
    </div>
    </div>
  );
}

export default PaymentPage;
