import React, { Component,useState } from 'react'
import Ihome from "./Ihome";
import { useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
function Login(props){
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const [send,setSend]=useState("Send OTP");
  const [verify,setVerify]=useState("Verify");
  const [otp2,setotp2]=useState("");
  const handleOtp = async (e) => {
    e.preventDefault();
    setSend("Sending...")
    try {
      const response = await fetch('http://52.207.171.26:8081/generate-otp?user='+email,{
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        
      });
      const contentType = response.headers.get('content-type');
        if (contentType && contentType.indexOf('application/json') !== -1) {
          const json = await response.json();
         if(json.message!='Fail'){
          setOtp(json.message);
          setSend("Sent")
          setMessage('OTP sent to your email address. Please enter it below.');
         }
         else{
          setSend("Resend");
          setMessage("")
         }
         
        }
      
    } catch (error) {
      console.log(error);
    }
  };

  const handleVerify = async () => {
    
   if(otp==otp2){
    setMessage('')
    setSend("Verified")
   }
   else{
    setMessage("verification Failed,Try Again...");
    setSend("Resend")
   }
  };
  const {page,changePage}=props;
  const [isVisible, setIsVisible] = useState(true);
  const [isStartUp,setIsStartUp]=useState(true);
  const navigate = useNavigate();
  const [p,setP]=useState(false);
  const [formData1, setFormData1] = useState({
    startUpName:'',
    address1:'',
    email: '',
    password: '',
    confirmPassword:''
  });
  const [formData2, setFormData2] = useState({
    firstName:'',
    lastName:'',
    email: '',
    password: '',
    confirmPassword:''
  });
  const [error, setError] = useState(null);
  const handleSubmit=async()=>{
    
    try {
      if(isStartUp==true ){
        if(formData1.password==formData1.confirmPassword){
        const response = await fetch('http://52.207.171.26:8081/api/user/startUp/signup/'+formData1.email,{
          method: 'PUT',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData1)
        });
        console.log(response);
        
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.indexOf('application/json') !== -1) {
          const json = await response.json();
         if(json.message=='success'){
          alert("Registration Successful....")
          navigate("/sign-in")
         }
          console.log(json);
          setError(json.message);
        } else  {
          const text = await response.text();

          setError(text);
        }
      }
      else{
        setError("Password not matched with confirmPassword")
      }
      }
      else {
        if(formData2.password==formData2.confirmPassword){
        const response = await fetch('http://52.207.171.26:8081/api/investor/signup/'+formData2.email,{
          method: 'PUT',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData2)
        });
        console.log(response);
       
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.indexOf('application/json') !== -1) {
          const json = await response.json();
          if(json.message=="success"){
            alert("Registration Successful....")
            navigate("/sign-in")
           }
          console.log(json);

          setError(json.message);
        } else {
          const text = await response.text();

          setError(text);
        }
      }
      else{
        setError("Password not matched with confirmPassword")
      }
      }
     
     
    } catch (error) {
      console.error(error);
    }
    
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
const handleChange = event => {
  
  if(event.target.name=='email'){
    if(/\S+@\S+\.com+/.test(event.target.value))setEmailCheck(1);
    else setEmailCheck(0);
    setEmail(event.target.value)
  }
  if(event.target.name=='otp'){
    setotp2(event.target.value);
  }
  if(event.target.name=='password'){
    setPassword(event.target.value);
  }
  if(isStartUp==true){
    if(event.target.name=='confirmPassword'){
      if(event.target.value!=formData1.password)setPassCheck(0);
      else setPassCheck(1);
    }
    setFormData1({
      ...formData1,
      [event.target.name]: event.target.value
    });
  }
  else{
    if(event.target.name=='confirmPassword'){
      if(event.target.value!=formData2.password)setPassCheck(0);
      else setPassCheck(1);
    }
    setFormData2({
      ...formData2,
      [event.target.name]: event.target.value
    });
  }
  };
  const handleClick = () => {
    console.log(formData1);
    console.log(formData2);
    if(isStartUp==true){
      if(formData1.password==formData1.confirmPassword){
        setP(false);
        changePage("ihome");
        navigate('/ihome');
      }
      else setP(true);
    }
    
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
            <Link to='/home' onClick={() => setIsVisible(false)} className="nav-link" style={{WebkitTextFillColor:'white',fontWeight:'bold'}}><i className="pi pi-home" style={{ color: '#708090' }}></i> Home</Link>
            
            <Nav.Link href="#link" style={{WebkitTextFillColor:'white',fontWeight:'bold'}} onClick={footerScroll}>FAQ's</Nav.Link>
           
          </Nav>
          <Link to='/sign-in' onClick={() => setIsVisible(true)} className="nav-link" style={{fontWeight:'bold',WebkitTextFillColor:'white',margin:'10px',width:'70px',height:'35px',backgroundColor:'white',WebkitTextFillColor:'black',border:'white',borderRadius:'5px',display:'flex',alignItems:'center',justifyContent:'center'}}>Login</Link>
            <Link to='/sign-up' onClick={() => setIsVisible(true)} className='nav-link' style={{fontWeight:'bold',WebkitTextFillColor:'white',width:'80px',height:'35px',backgroundColor:'white',WebkitTextFillColor:'black',border:'white',borderRadius:'5px',display:'flex',alignItems:'center',justifyContent:'center'}}>  Register
              </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
    {isVisible?
    <div className="auth-wrapper" style={{marginTop:"100px"}}>
          <div className="auth-inner">
            <h3>Register As</h3>
            <div>
      <Button
        style={{ backgroundColor: !isStartUp ? 'green' : 'white', width:'160px',WebkitTextFillColor: isStartUp ? 'green' : 'white'}}
        onClick={() => setIsStartUp(false)}
      variant='success'>
        Investor
      </Button>
      <Button
        style={{ backgroundColor: !isStartUp ? 'white' : 'green', width:'160px' ,WebkitTextFillColor: !isStartUp ? 'green' : 'white'}}
        onClick={() => setIsStartUp(true)}
        variant='success'
      >
        StartUp
      </Button>
    </div>
      < >
        {!isStartUp?
        <div className="mb-3">
          <label>First name/ Org Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            onChange={handleChange}
            name="firstName"
          />
        </div>
        :null}
        {!isStartUp?
        <div className="mb-3">
          <label>Last name/ User Name</label>
          <input type="text" className="form-control" placeholder="Last name" onChange={handleChange} name="lastName"/>
        </div>
        :null}
         {isStartUp?
        <div className="mb-3">
          <label>StartUp Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="StartUp Name"
            onChange={handleChange}
            name="startUpName"
          />
        </div>
        :null}
        {isStartUp?
        <div className="mb-3">
          <label>Location</label>
          <input type="text" className="form-control" placeholder="Location" onChange={handleChange} name="address1"/>
        </div>
        :null}
        <div className="mb-3">
          <label>Email address</label>
          <div style={{flex:1}}>
            <div class="buttonIn">
            <InputGroup>

          <input
            disabled={send=="Verified"}
            style={{width:"70%"}}
            className="form-control"
            placeholder="Enter email"
            onChange={handleChange}
            name="email"
          />
          <Button style={{width:"30%"}} onClick={handleOtp} disabled={send=="Verified"}>{send} </Button>
          </InputGroup>
          {message && <div className="mb-3">
          <p style={{color:"red"}}>{message}</p>
            <div class="buttonIn">
            <InputGroup>

          <input
            style={{width:"70%"}}
            className="form-control"
            placeholder={message}
            onChange={handleChange}
            name="otp"
          />
          <Button style={{width:"30%"}} onClick={handleVerify}>{verify}</Button>
          </InputGroup></div> </div>}
          </div>
          
          
          </div>
          {emailCheck==0?  <p style={{color:'red', marginTop:'1px'}}>Invalid Email</p>:null}

        </div>
     

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            title={getValidationMessage()}
            className="form-control"
            placeholder="Enter password"
            onChange={handleChange}
            name="password"
          />
{password!='' && (!hasLowerCase ||
        !hasUpperCase ||
        !hasNumber ||
        !hasSpecialChar ||
        !isLengthValid )? (
        <p style={{color:'red', marginTop:'1px'}}>Password is too weak</p>
      ) : null}
          </div>
           <div className="mb-3">
          <label>Confirm Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Re-Enter password "
            onChange={handleChange}
            name="confirmPassword"
          />
         {passCheck==0?  <p style={{color:'red', marginTop:'1px'}}>Password Not Matched</p>:null}

        </div>
       {p? <p style={{color:'red'}}>Password not matched</p>:null}
        <div className="d-grid">
          <button onClick={handleSubmit} className="btn btn-secondary" disabled={send!="Verified"}>
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </>
      <p style={{color:"red"}}>{error}</p>
          </div>
        </div>
:null}      
    </div>   
    )
  }
export default Login;