import React,{useRef} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import Login from './Login'
import SignUp from './signUp'
import App from './App'
import { Dropdown ,FormControl} from 'react-bootstrap';
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
import Tab from 'react-bootstrap/Tab'
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
import Scomponent from './Scomponent';
import Ssuccess from './Ssuccess';
import 'primeicons/primeicons.css';
import InputGroup from 'react-bootstrap/InputGroup';

function Ihome(props) {
  const {page,changePage,sData,changeSName,investor,changeInvestor,investments,setInvestments,successList,Cinvestments,setCinvestments}=props;

  const [show, setShow] = useState(false);
  const [show3,setShow3]=useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [formData,setFormData]=useState({
    email: '',
    password: '',
    firstName:'',
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
  const ssnValidation=(/^\d{9}$/.test(formData.ssn))?true:false;
    const access = (
        formData.firstName == "" ||
        formData.lastName == "" ||
        formData.ssn == "" ||
        formData.ssn == null ||
        formData.dob == "" ||
        formData.city == "" ||
        formData.state == "" ||
        formData.address1 == "" ||
        formData.address2 == "" ||
        formData.phNumber == "" ||
        formData.country == "");
  
  const [sList,setSList]=useState([]);
  const fetchData = async () => {
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
    try {
      const response = await fetch('http://52.207.171.26:8081/getInvestors/'+investor,{
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
          setFormData(json);
          console.log(data);

          setError(null);
        } else {
          const text = await response.text();
          setData(text);
          setError(null);
        }
    } catch (error) {
      console.error(error);
    }
    try {
      const response = await fetch('http://52.207.171.26:8081/api/investments/'+investor,{
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
          setInvestments(json);
          console.log(json);
        } 
    } catch (error) {
      console.error(error);
    }
    try {
      const response = await fetch('http://52.207.171.26:8081/api/Cinvestments/'+investor,{
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
          setCinvestments(json);
          console.log(json);
        } 
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    
    fetchData();
  }, []);
  const handleSubmit=async()=>{
   
    setShow(false);
    try {
      const response = await fetch('http://52.207.171.26:8081/api/user/updateDetails/'+investor,{
          method: 'PUT',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
        console.log(response);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.indexOf('application/json') !== -1) {
          const json = await response.json();
         
          console.log(json);

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
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleShow3 = () => setShow3(true);
  const handleClose3 = () => setShow3(false);

  const [index2, setIndex2] = useState(0);

  const handlePrev2 = () => {
    if(index2!=0){
    setIndex2((index2 - 1 +successList.length ) % successList.length);
    }
  };

  const handleNext2 = () => {
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
  
  const[phCheck,setPhCheck]=useState(1);
  const[ssnCheck,setSSNCheck]=useState(1);
  const handleChange = event => {
    if(event.target.name=='email'){
      if(/\S+@\S+\.com+/.test(event.target.value))setEmailCheck(1);
      else setEmailCheck(0);
    }
    if(event.target.name=='phNumber'){
      if(/^\d{10}$/.test(event.target.value))setPhCheck(1);
      else setPhCheck(0);
    }
    if(event.target.name=='ssn'){
      if(/^\d{9}$/.test(event.target.value))setSSNCheck(1);
      else setSSNCheck(0);
    }
    if(event.target.name=='dob'){
      
      console.log(event.target.value);
      setFormData({
        ...formData,
        [event.target.name]:event.target.value
      });
    }
    else{
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }
  };
    const [set,changeSet]=useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const toast = useRef(null);
    const navigate=useNavigate();
    const handleClick = () => {
      changePage("home");
      navigate('/home');
    };
    const handleSub = () => {
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
        if (access == true) {
            alert("Profile Incomplete..")
        }
        else {
            changePage("ihome");
            navigate('/startUps');
        }
    };
    const handleHistory = () => {
        if (access == true) {
            alert("Profile Incomplete..")
        }
        else {
            navigate('/history');
        }
    }
    const[p,setP]=useState(true);
    const [formData3,setFormData3]=useState({
      email: 'sample@gmail.com',
      password: '',
    });
    const [passMsg,setPassMsg]=useState('');
    const handleCurrentPass=(e)=>{
      setPassMsg(e.target.value)
    }
    const handleChange3 = event => {
      if(event.target.name=='email'){
        if(/\S+@\S+\.\S+/.test(event.target.value))setEmailCheck(1);
        else setEmailCheck(0);
      }
      if(event.target.name=='password'){
        setPassword(event.target.value);
      }
        if(event.target.name=='confirmPassword'){
          if(event.target.value!=formData3.password)setPassCheck(0);
          else setPassCheck(1);
        }
      setFormData3({
        ...formData3,
        [event.target.name]: event.target.value
      });
    };
    const[passCheck,setPassCheck]=useState(0);
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
    const [val,setVal]=useState("Submit");
    const [err,setErr]=useState("");
    const handlePassword=async()=>{
      if(formData3.password==formData3.confirmPassword){
      setVal("saving...");
      
      try {
        const response = await fetch('http://52.207.171.26:8081/api/user/updateInvestorPassword/'+investor+"?password="+formData3.password,{
            method: 'PUT',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json'
            },
            
          });
          console.log(response);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const contentType = response.headers.get('content-type');
          if (contentType && contentType.indexOf('application/json') !== -1) {
            const text = await response.json();
            if(text.message=="success"){
              setVal("Submit");
              setShow3(false);
              setErr("")
              setPassMsg("")
                  setFormData3({
                    email: '',
                    password: '',
                  });
                  setPassword("");
                  alert("Password Changed Successfully!!!")
              navigate("/ihome");
          } 
            else{
              setVal("Submit")
              setErr(text.message);
            }
            
          }
      } catch (error) {
        setVal("Submit")
              setErr("Network error");
        console.error(error);
      }
    }
    else{
      setErr("Password and ConfirmPassword are not Matched...")
    }
      
    };
   
  return (
    <div>
    <header style={{backgroundColor:"grey",borderRadius:"0px 0px 0px 50px",position:'fixed',width:"100%", top:0,overflow:"hidden",zIndex:1}} >
    <Navbar expand="lg" bg="dark" style={{borderRadius:"0px 0px 0px 200px",height:"100px"}}>
    <Container style={{marginLeft:"40px"}}>
    <h2 style={{WebkitTextFillColor:'white',fontWeight:'bold',marginTop:"11px",fontFamily:"calibri",fontSize:"40px"}}> INVESTIRE</h2>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto" style={{marginLeft:"50px"}}>
          <div >
          <Toast ref={toast}></Toast>
          
          </div>
            <Nav.Link  style={{WebkitTextFillColor:'white',fontWeight:'bold'}} onClick={handleStartUp}><i className="pi pi-discord" style={{ color: '#708090' }}></i> StartUps</Nav.Link>
            <Nav.Link onClick={handleHistory} style={{WebkitTextFillColor:'white',fontWeight:'bold'}}><i className="pi pi-bitcoin" style={{ color: '#708090' }}></i> MyInvestments</Nav.Link>
            <>
          
            <Nav.Link  style={{WebkitTextFillColor:'white',fontWeight:'bold'}} onClick={handleShow}><i className="pi pi-user-edit" style={{ color: '#708090' }}></i> EditProfile</Nav.Link>
          <Modal 
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        
      >
        <Modal.Header closeButton onHide={()=>{fetchData();setP(true)}}>
          <Modal.Title>Edit Details</Modal.Title>
          
        </Modal.Header>
        
        <div >
        <Form style={{margin:'20px 20px'}} onSubmit={handleSub}>
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
          <Form.Control type="email" placeholder="Enter email" disabled={true} value={formData.email} onChange={handleChange} name="email" />
          {emailCheck==0?  <p style={{color:'red', marginTop:'1px'}}>Invalid Email</p>:null}
        </Form.Group>
        

        <Form.Group as={Col} controlId="formGridPhNumber">
        <Form.Label>Phone Number</Form.Label>
          <InputGroup className='mb-3'>
          <InputGroup.Text>+1</InputGroup.Text>
          <FormControl type="tel" value={formData.phNumber} onChange={handleChange} name="phNumber" placeholder='Enter Phone Number' title="Enter 10 digits Mobile Number"/>

          </InputGroup>
          {phCheck==0?  <p style={{color:'red', marginTop:'1px'}}>Invalid PhoneNumber</p>:null}

       </Form.Group>
       
      </Row>
      
      <Row className="mb-3">
        

        <Form.Group as={Col} controlId="formGridSsn">
          <Form.Label>SSN ID</Form.Label>
          <Form.Control type="text" disabled={ssnValidation} value={formData.ssn} onChange={handleChange} name="ssn" placeholder="Enter SSN Id" title="Enter 9 digits SSN Id"/>
          {ssnCheck==0?  <p style={{color:'red', marginTop:'1px'}}>Invalid SSN Id</p>:null}

        </Form.Group>

        <Form.Group as={Col} controlId="formGridDob">
        <Form.Label>Date Of Birth</Form.Label>
        <InputGroup className='mb-3'>

          
          <Form.Control type="date" format="MM/DD/YYYY" placeholder="MM/DD/YYYY" value={formData.dob} onChange={handleChange} name="dob" style={{width:'10px'}}/>

          </InputGroup>
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
          <Form.Control value={formData.state} onChange={handleChange} name="state" placeholder='Enter State'/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCountry">
          <Form.Label>Country</Form.Label>
          <Form.Control value={formData.country} onChange={handleChange} name="country" placeholder='Enter Country'/>
        </Form.Group>
      </Row>
      
      <Button disabled={access || !ssnValidation } className="nav-link"  onClick={handleSubmit} style={{WebkitTextFillColor:'white',margin:'10px',width:'100px',height:'35px',backgroundColor:'green',WebkitTextFillColor:'white',border:'white',borderRadius:'5px',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:'bold',float:"right"}}>Submit</Button>
    </Form>
        </div>
      </Modal>
      </>
            <Nav.Link  style={{WebkitTextFillColor:'white',fontWeight:'bold'}} onClick={footerScroll}>FAQ's</Nav.Link>
           
          </Nav>
       {formData.email!=""?<p style={{color:"white",fontWeight:'bold',marginRight:"50px",marginTop:"10px"}}>Welcome, {formData.firstName}</p>:""}
       <>
       
          <i className="pi pi-spin pi-cog" style={{ fontSize: '2rem',color:'white' }} onClick={handleShow3}></i>
          <Modal 
        show={show3}
        onHide={handleClose3}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton >
          <Modal.Title>Change Password</Modal.Title>
        </Modal.Header>
        <div >
        <div style={{margin:'20px 20px'}} >
       
      
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" readOnly="readOnly" placeholder="Enter email" value={investor} onChange={handleChange3} />
          {emailCheck==0?  <p style={{color:'red', marginTop:'1px'}}>Invalid Email</p>:null}
        </Form.Group>
        <Form.Group as={Col} controlId="currentPassword" style={{marginTop:'10px'}}>
          <Form.Label>Current Password</Form.Label>
          <Form.Control type="password" placeholder="Enter Current Password" title={getValidationMessage()} value={passMsg} onChange={handleCurrentPass} name="currentPassword" />
          {passMsg!=formData.password&&passMsg!=""? <p style={{color:'red', marginTop:'1px'}}>Password Not Matched </p>: null}
      </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword" style={{marginTop:'10px'}}>
          <Form.Label>New Password</Form.Label>
          <Form.Control type="password" disabled={passMsg!=formData.password} placeholder=" Enter New Password" title={getValidationMessage()} value={formData3.password} onChange={handleChange3} name="password" />
          {password!='' && (!hasLowerCase ||
        !hasUpperCase ||
        !hasNumber ||
        !hasSpecialChar ||
        !isLengthValid )? (
        <p style={{color:'red', marginTop:'1px'}}>Password is too weak</p>
      ) : null}
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword" style={{marginTop:'10px'}}>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" disabled={passMsg!=formData.password} placeholder="Confirm Password"  onChange={handleChange3} name="confirmPassword" />
          {passCheck==0&&password!=""?  <p style={{color:'red', marginTop:'1px'}}>Password Not Matched</p>:null}

        </Form.Group>
        <Button  disabled={passMsg!=formData.password ||passCheck==0 || password==""}  className="nav-link"  onClick={handlePassword} style={{WebkitTextFillColor:'white',margin:'10px',width:'100px',height:'35px',backgroundColor:'green',WebkitTextFillColor:'white',border:'white',borderRadius:'5px',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:'bold',float:"right"}}>{val}</Button>

        {err!=""?<p style={{color:"red"}}>{err}</p>:null}
    </div>
    
        </div>
      </Modal>
      </>
          
          <Button onClick={handleClick} className="nav-link" style={{WebkitTextFillColor:'white',margin:'10px',width:'70px',height:'35px',backgroundColor:'white',WebkitTextFillColor:'black',border:'white',borderRadius:'5px',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:'bold'}}>Log out</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </header>
   <h1 style={{marginTop:"130px",marginLeft:"35px"}}> </h1>

<img src={img} style={{height:"450px",width:"95%",marginLeft:"3%",marginTop:"20px",opacity:0.9,borderRadius:"30px 30px 30px 30px" }}/>
<>
  <h1 style={{marginTop:"30px",marginLeft:"35px"}}>Top 5 Funding Companies</h1>
  <div style={{display:"flex",marginLeft:"40px",marginTop:"40px",backgroundColor:"white",height:"350px",borderRadius:"30px 30px 30px 30px" ,width:"95%"}} >
     
                  {sList.slice(index, index + 3).map((component, i) => (
                      <Scomponent i={i} item={component} style={{ display: "flex" }} sData={sData} changeSName={changeSName} page={page} changePage={changePage} access={access}/>
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

export default Ihome;
