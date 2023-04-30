import React,{useState,useEffect,useRef} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Login from './Login'
import SignUp from './signUp'
import App from './App'
import { Dropdown, FormGroup } from 'react-bootstrap';
import { SplitButton } from 'primereact/splitbutton';
import { Toast } from 'primereact/toast';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import { InputMask } from "primereact/inputmask";
import { Form } from 'react-bootstrap';
import { InputText } from "primereact/inputtext";
import InputGroup from 'react-bootstrap/InputGroup';
// import CountrySelect from 'react-bootstrap-country-select';
import Col from 'react-bootstrap/Col';
import { Tooltip } from 'primereact/tooltip';
import Row from 'react-bootstrap/Row';


function extractVideoId(url) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);

  return match && match[2].length === 11 ? match[2] : null;
}
const cNames=[ 
  {name: 'Afghanistan', code: 'AF'}, 
  {name: 'Åland Islands', code: 'AX'}, 
  {name: 'Albania', code: 'AL'}, 
  {name: 'Algeria', code: 'DZ'}, 
  {name: 'American Samoa', code: 'AS'}, 
  {name: 'AndorrA', code: 'AD'}, 
  {name: 'Angola', code: 'AO'}, 
  {name: 'Anguilla', code: 'AI'}, 
  {name: 'Antarctica', code: 'AQ'}, 
  {name: 'Antigua and Barbuda', code: 'AG'}, 
  {name: 'Argentina', code: 'AR'}, 
  {name: 'Armenia', code: 'AM'}, 
  {name: 'Aruba', code: 'AW'}, 
  {name: 'Australia', code: 'AU'}, 
  {name: 'Austria', code: 'AT'}, 
  {name: 'Azerbaijan', code: 'AZ'}, 
  {name: 'Bahamas', code: 'BS'}, 
  {name: 'Bahrain', code: 'BH'}, 
  {name: 'Bangladesh', code: 'BD'}, 
  {name: 'Barbados', code: 'BB'}, 
  {name: 'Belarus', code: 'BY'}, 
  {name: 'Belgium', code: 'BE'}, 
  {name: 'Belize', code: 'BZ'}, 
  {name: 'Benin', code: 'BJ'}, 
  {name: 'Bermuda', code: 'BM'}, 
  {name: 'Bhutan', code: 'BT'}, 
  {name: 'Bolivia', code: 'BO'}, 
  {name: 'Bosnia and Herzegovina', code: 'BA'}, 
  {name: 'Botswana', code: 'BW'}, 
  {name: 'Bouvet Island', code: 'BV'}, 
  {name: 'Brazil', code: 'BR'}, 
  {name: 'British Indian Ocean Territory', code: 'IO'}, 
  {name: 'Brunei Darussalam', code: 'BN'}, 
  {name: 'Bulgaria', code: 'BG'}, 
  {name: 'Burkina Faso', code: 'BF'}, 
  {name: 'Burundi', code: 'BI'}, 
  {name: 'Cambodia', code: 'KH'}, 
  {name: 'Cameroon', code: 'CM'}, 
  {name: 'Canada', code: 'CA'}, 
  {name: 'Cape Verde', code: 'CV'}, 
  {name: 'Cayman Islands', code: 'KY'}, 
  {name: 'Central African Republic', code: 'CF'}, 
  {name: 'Chad', code: 'TD'}, 
  {name: 'Chile', code: 'CL'}, 
  {name: 'China', code: 'CN'}, 
  {name: 'Christmas Island', code: 'CX'}, 
  {name: 'Cocos (Keeling) Islands', code: 'CC'}, 
  {name: 'Colombia', code: 'CO'}, 
  {name: 'Comoros', code: 'KM'}, 
  {name: 'Congo', code: 'CG'}, 
  {name: 'Congo, The Democratic Republic of the', code: 'CD'}, 
  {name: 'Cook Islands', code: 'CK'}, 
  {name: 'Costa Rica', code: 'CR'}, 
  {name: 'Cote D\'Ivoire', code: 'CI'}, 
  {name: 'Croatia', code: 'HR'}, 
  {name: 'Cuba', code: 'CU'}, 
  {name: 'Cyprus', code: 'CY'}, 
  {name: 'Czech Republic', code: 'CZ'}, 
  {name: 'Denmark', code: 'DK'}, 
  {name: 'Djibouti', code: 'DJ'}, 
  {name: 'Dominica', code: 'DM'}, 
  {name: 'Dominican Republic', code: 'DO'}, 
  {name: 'Ecuador', code: 'EC'}, 
  {name: 'Egypt', code: 'EG'}, 
  {name: 'El Salvador', code: 'SV'}, 
  {name: 'Equatorial Guinea', code: 'GQ'}, 
  {name: 'Eritrea', code: 'ER'}, 
  {name: 'Estonia', code: 'EE'}, 
  {name: 'Ethiopia', code: 'ET'}, 
  {name: 'Falkland Islands (Malvinas)', code: 'FK'}, 
  {name: 'Faroe Islands', code: 'FO'}, 
  {name: 'Fiji', code: 'FJ'}, 
  {name: 'Finland', code: 'FI'}, 
  {name: 'France', code: 'FR'}, 
  {name: 'French Guiana', code: 'GF'}, 
  {name: 'French Polynesia', code: 'PF'}, 
  {name: 'French Southern Territories', code: 'TF'}, 
  {name: 'Gabon', code: 'GA'}, 
  {name: 'Gambia', code: 'GM'}, 
  {name: 'Georgia', code: 'GE'}, 
  {name: 'Germany', code: 'DE'}, 
  {name: 'Ghana', code: 'GH'}, 
  {name: 'Gibraltar', code: 'GI'}, 
  {name: 'Greece', code: 'GR'}, 
  {name: 'Greenland', code: 'GL'}, 
  {name: 'Grenada', code: 'GD'}, 
  {name: 'Guadeloupe', code: 'GP'}, 
  {name: 'Guam', code: 'GU'}, 
  {name: 'Guatemala', code: 'GT'}, 
  {name: 'Guernsey', code: 'GG'}, 
  {name: 'Guinea', code: 'GN'}, 
  {name: 'Guinea-Bissau', code: 'GW'}, 
  {name: 'Guyana', code: 'GY'}, 
  {name: 'Haiti', code: 'HT'}, 
  {name: 'Heard Island and Mcdonald Islands', code: 'HM'}, 
  {name: 'Holy See (Vatican City State)', code: 'VA'}, 
  {name: 'Honduras', code: 'HN'}, 
  {name: 'Hong Kong', code: 'HK'}, 
  {name: 'Hungary', code: 'HU'}, 
  {name: 'Iceland', code: 'IS'}, 
  {name: 'India', code: 'IN'}, 
  {name: 'Indonesia', code: 'ID'}, 
  {name: 'Iran, Islamic Republic Of', code: 'IR'}, 
  {name: 'Iraq', code: 'IQ'}, 
  {name: 'Ireland', code: 'IE'}, 
  {name: 'Isle of Man', code: 'IM'}, 
  {name: 'Israel', code: 'IL'}, 
  {name: 'Italy', code: 'IT'}, 
  {name: 'Jamaica', code: 'JM'}, 
  {name: 'Japan', code: 'JP'}, 
  {name: 'Jersey', code: 'JE'}, 
  {name: 'Jordan', code: 'JO'}, 
  {name: 'Kazakhstan', code: 'KZ'}, 
  {name: 'Kenya', code: 'KE'}, 
  {name: 'Kiribati', code: 'KI'}, 
  {name: 'Korea, Democratic People\'S Republic of', code: 'KP'}, 
  {name: 'Korea, Republic of', code: 'KR'}, 
  {name: 'Kuwait', code: 'KW'}, 
  {name: 'Kyrgyzstan', code: 'KG'}, 
  {name: 'Lao People\'S Democratic Republic', code: 'LA'}, 
  {name: 'Latvia', code: 'LV'}, 
  {name: 'Lebanon', code: 'LB'}, 
  {name: 'Lesotho', code: 'LS'}, 
  {name: 'Liberia', code: 'LR'}, 
  {name: 'Libyan Arab Jamahiriya', code: 'LY'}, 
  {name: 'Liechtenstein', code: 'LI'}, 
  {name: 'Lithuania', code: 'LT'}, 
  {name: 'Luxembourg', code: 'LU'}, 
  {name: 'Macao', code: 'MO'}, 
  {name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK'}, 
  {name: 'Madagascar', code: 'MG'}, 
  {name: 'Malawi', code: 'MW'}, 
  {name: 'Malaysia', code: 'MY'}, 
  {name: 'Maldives', code: 'MV'}, 
  {name: 'Mali', code: 'ML'}, 
  {name: 'Malta', code: 'MT'}, 
  {name: 'Marshall Islands', code: 'MH'}, 
  {name: 'Martinique', code: 'MQ'}, 
  {name: 'Mauritania', code: 'MR'}, 
  {name: 'Mauritius', code: 'MU'}, 
  {name: 'Mayotte', code: 'YT'}, 
  {name: 'Mexico', code: 'MX'}, 
  {name: 'Micronesia, Federated States of', code: 'FM'}, 
  {name: 'Moldova, Republic of', code: 'MD'}, 
  {name: 'Monaco', code: 'MC'}, 
  {name: 'Mongolia', code: 'MN'}, 
  {name: 'Montserrat', code: 'MS'}, 
  {name: 'Morocco', code: 'MA'}, 
  {name: 'Mozambique', code: 'MZ'}, 
  {name: 'Myanmar', code: 'MM'}, 
  {name: 'Namibia', code: 'NA'}, 
  {name: 'Nauru', code: 'NR'}, 
  {name: 'Nepal', code: 'NP'}, 
  {name: 'Netherlands', code: 'NL'}, 
  {name: 'Netherlands Antilles', code: 'AN'}, 
  {name: 'New Caledonia', code: 'NC'}, 
  {name: 'New Zealand', code: 'NZ'}, 
  {name: 'Nicaragua', code: 'NI'}, 
  {name: 'Niger', code: 'NE'}, 
  {name: 'Nigeria', code: 'NG'}, 
  {name: 'Niue', code: 'NU'}, 
  {name: 'Norfolk Island', code: 'NF'}, 
  {name: 'Northern Mariana Islands', code: 'MP'}, 
  {name: 'Norway', code: 'NO'}, 
  {name: 'Oman', code: 'OM'}, 
  {name: 'Pakistan', code: 'PK'}, 
  {name: 'Palau', code: 'PW'}, 
  {name: 'Palestinian Territory, Occupied', code: 'PS'}, 
  {name: 'Panama', code: 'PA'}, 
  {name: 'Papua New Guinea', code: 'PG'}, 
  {name: 'Paraguay', code: 'PY'}, 
  {name: 'Peru', code: 'PE'}, 
  {name: 'Philippines', code: 'PH'}, 
  {name: 'Pitcairn', code: 'PN'}, 
  {name: 'Poland', code: 'PL'}, 
  {name: 'Portugal', code: 'PT'}, 
  {name: 'Puerto Rico', code: 'PR'}, 
  {name: 'Qatar', code: 'QA'}, 
  {name: 'Reunion', code: 'RE'}, 
  {name: 'Romania', code: 'RO'}, 
  {name: 'Russian Federation', code: 'RU'}, 
  {name: 'RWANDA', code: 'RW'}, 
  {name: 'Saint Helena', code: 'SH'}, 
  {name: 'Saint Kitts and Nevis', code: 'KN'}, 
  {name: 'Saint Lucia', code: 'LC'}, 
  {name: 'Saint Pierre and Miquelon', code: 'PM'}, 
  {name: 'Saint Vincent and the Grenadines', code: 'VC'}, 
  {name: 'Samoa', code: 'WS'}, 
  {name: 'San Marino', code: 'SM'}, 
  {name: 'Sao Tome and Principe', code: 'ST'}, 
  {name: 'Saudi Arabia', code: 'SA'}, 
  {name: 'Senegal', code: 'SN'}, 
  {name: 'Serbia and Montenegro', code: 'CS'}, 
  {name: 'Seychelles', code: 'SC'}, 
  {name: 'Sierra Leone', code: 'SL'}, 
  {name: 'Singapore', code: 'SG'}, 
  {name: 'Slovakia', code: 'SK'}, 
  {name: 'Slovenia', code: 'SI'}, 
  {name: 'Solomon Islands', code: 'SB'}, 
  {name: 'Somalia', code: 'SO'}, 
  {name: 'South Africa', code: 'ZA'}, 
  {name: 'South Georgia and the South Sandwich Islands', code: 'GS'}, 
  {name: 'Spain', code: 'ES'}, 
  {name: 'Sri Lanka', code: 'LK'}, 
  {name: 'Sudan', code: 'SD'}, 
  {name: 'Suriname', code: 'SR'}, 
  {name: 'Svalbard and Jan Mayen', code: 'SJ'}, 
  {name: 'Swaziland', code: 'SZ'}, 
  {name: 'Sweden', code: 'SE'}, 
  {name: 'Switzerland', code: 'CH'}, 
  {name: 'Syrian Arab Republic', code: 'SY'}, 
  {name: 'Taiwan, Province of China', code: 'TW'}, 
  {name: 'Tajikistan', code: 'TJ'}, 
  {name: 'Tanzania, United Republic of', code: 'TZ'}, 
  {name: 'Thailand', code: 'TH'}, 
  {name: 'Timor-Leste', code: 'TL'}, 
  {name: 'Togo', code: 'TG'}, 
  {name: 'Tokelau', code: 'TK'}, 
  {name: 'Tonga', code: 'TO'}, 
  {name: 'Trinidad and Tobago', code: 'TT'}, 
  {name: 'Tunisia', code: 'TN'}, 
  {name: 'Turkey', code: 'TR'}, 
  {name: 'Turkmenistan', code: 'TM'}, 
  {name: 'Turks and Caicos Islands', code: 'TC'}, 
  {name: 'Tuvalu', code: 'TV'}, 
  {name: 'Uganda', code: 'UG'}, 
  {name: 'Ukraine', code: 'UA'}, 
  {name: 'United Arab Emirates', code: 'AE'}, 
  {name: 'United Kingdom', code: 'GB'}, 
  {name: 'United States', code: 'US'}, 
  {name: 'United States Minor Outlying Islands', code: 'UM'}, 
  {name: 'Uruguay', code: 'UY'}, 
  {name: 'Uzbekistan', code: 'UZ'}, 
  {name: 'Vanuatu', code: 'VU'}, 
  {name: 'Venezuela', code: 'VE'}, 
  {name: 'Viet Nam', code: 'VN'}, 
  {name: 'Virgin Islands, British', code: 'VG'}, 
  {name: 'Virgin Islands, U.S.', code: 'VI'}, 
  {name: 'Wallis and Futuna', code: 'WF'}, 
  {name: 'Western Sahara', code: 'EH'}, 
  {name: 'Yemen', code: 'YE'}, 
  {name: 'Zambia', code: 'ZM'}, 
  {name: 'Zimbabwe', code: 'ZW'} 
]
const mNames=["JAN",'FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC']
function SEdit(props) {
  const {sData,changeSName}=props;
  const [thumbnailUrl, setThumbnailUrl] = useState('');
  const [formData,setFormData]=useState(sData);
  const iscb=formData.anyCashBurn=='Yes'?true:false;
  const footerScroll=()=>{
    window.scrollTo({
      top:document.body.scrollHeight,
      behavior:"smooth"
    });
  }
  const [status,setStatus]=useState('Submit');
  const fetchData = async (a) => {
    console.log(a);
   
    
    
    const response =fetch(
      `https://www.youtube.com/oembed?url=${a}`
    ).then(response=>response.json()).then(data=>setThumbnailUrl(data.thumbnail_url));
  };
  const [error, setError] = useState(null);

useEffect(() => {
  fetchData(formData.video);
}, []);
    const {page,changePage}=props;
    const [isVisible, setIsVisible] = useState(false);
    const toast = useRef(null);
    const navigate=useNavigate();
    const handleSubmit= async()=>{
      setStatus("Saving...")
      try {
        const response = await fetch('http://52.207.171.26:8081/api/user/updateStartUp/'+sData.email,{
            method: 'PUT',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
          });
          console.log(response);
          if (!response.ok) {
            setStatus("Submit")
            setError("Check the Network and Save Again...")
            throw new Error('Network response was not ok');
          }
          const contentType = response.headers.get('content-type');
          if (contentType && contentType.indexOf('application/json') !== -1) {
            const json = await response.json();
           
            console.log(json);
  
            setError(null);
          } else {
            const text = await response.text();
            console.log(text);
            navigate("/shome");
            setError(null);
          }
      } catch (error) {
        setError(error);
        setStatus("Submit")
        console.error(error);
      }
      
    };
    const handleHome=()=>{
      changeSName(sData);
      navigate("/shome");
    }
   
      const handleChange = event => {
        
        if(event.target.name=="video"){
          fetchData(event.target.value);
            setFormData({
                ...formData,
                [event.target.name]: event.target.value
              });
              
          }


        if(event.target.name=="costPerBit"){
            setFormData({
                ...formData,
                [event.target.name]: (formData.totalValuation / (formData.totalBits * formData.percentOffer)).toFixed(2)
              });
        }
      
        else if(event.target.name=='anyCashBurn'){
          console.log(event.target.value);
          if(formData.anyCashBurn=='Yes'){
            setFormData({
              ...formData,
              [event.target.name]: 'No',cashBurn:0
            });
          }
          else{
            setFormData({
              ...formData,
              [event.target.name]: 'Yes'
            });
          }
        }
      else{
        setFormData({
          ...formData,
            [event.target.name]: event.target.value
        });
    }
    };
        const [set,changeSet]=useState(false);
        const handleClick = () => {
          changePage("home");
          navigate('/home');
        };
        const handleStartUp = () => {
          navigate('/startUps');
        };
  const isFuture=(d)=>{
    return d.getTime()>new Date().getTime();
  }
  return (
    <div>
    
    <header style={{backgroundColor:"grey",borderRadius:"0px 0px 0px 50px",position:'fixed',width:"100%", top:0,overflow:"hidden",zIndex:100}} >
    <Navbar expand="lg" bg="dark" style={{borderRadius:"0px 0px 0px 200px",height:"100px"}}>
    <Container style={{marginLeft:"40px"}}>
      <h2 style={{WebkitTextFillColor:'white',fontWeight:'bold',marginTop:"11px",fontFamily:"calibri",fontSize:"40px"}}>INVESTIRE</h2>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto" style={{marginLeft:"50px"}}>
          <div >
          <Toast ref={toast}></Toast>
          </div>
            <Nav.Link onClick={handleHome} style={{WebkitTextFillColor:'white',fontWeight:'bold'}}><i className="pi pi-home" style={{ color: '#708090' }}></i> Home</Nav.Link>
            <Nav.Link onClick={handleStartUp} style={{WebkitTextFillColor:'white',fontWeight:'bold'}}><i className="pi pi-discord" style={{ color: '#708090' }}></i> StartUps</Nav.Link>
            <Nav.Link style={{WebkitTextFillColor:'white',fontWeight:'bold'}} onClick={footerScroll}>FAQ's</Nav.Link>
           
          </Nav>
          <Button onClick={handleClick} className="nav-link" style={{WebkitTextFillColor:'white',margin:'10px',width:'70px',height:'35px',backgroundColor:'white',WebkitTextFillColor:'black',border:'white',borderRadius:'5px',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:'bold'}}>Log out</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</header>
    <div style={{marginTop:"130px"}} >
        <Form style={{margin:'20px 20px'}} >
          <h1>Basic Details</h1>
          <div style={{marginTop:"30px",backgroundColor:"lightGrey",borderRadius:"10PX 10PX 10PX 10PX",height:"570px"}}>

        <Row className="mb-3"  style={{marginTop:"30px",marginRight:"10px",marginLeft:"10PX"}}>
        <Form.Group as={Col} controlId="formGridFirstName">
          <Form.Label>StartUp Name</Form.Label>
          <Form.Control style={{opacity:0.8}} type="text" placeholder="Enter StartUp Name" value={formData.startUpName} onChange={handleChange} name="startUpName" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridDob">
        <Form.Label>Established on</Form.Label>
        <InputGroup className='mb-3'>

          
          <Form.Control type="date" format="MM/DD/YYYY" placeholder="MM/DD/YYYY" value={formData.year} onChange={handleChange} name="year" style={{width:'100%'}}/>

          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridLastName" title="Select a category to which the your startup belong to.">
          <Form.Label>Category</Form.Label>
                          <Form.Select style={{ opacity: 0.8 }} value={formData.category} onChange={handleChange} name="category" tooltip="Select a category to which the your startup belong to.">
                              <option>select...</option>
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
        <Form.Group as={Col} controlId="formGridLastName" title="Provide a YouTube URL which showcases your startup.">
          <Form.Label>Youtube video link</Form.Label>
        
          <Form.Control  style={{opacity:0.8}} type="text"  placeholder="Enter youtube link" onChange={handleChange} name="video" value={formData.video}/>
          
        </Form.Group>
        <Form.Group as={Col} controlId="formGridLastName">
          <div style={{overflow:'hidden',height:"100%"}}>
        <img src={thumbnailUrl} alt="YouTube Thumbnail" style={{height:"120px",width:"90%",transform:`translateY(5px)`,objectFit:'cover',imageRendering:'optimizeQuality'}}/>
        </div>
        </Form.Group>
       
      </Row>
     
      <Row className='mb-3' style={{marginRight:"10px",marginLeft:"10PX"}} >
      <Form.Group as={Col}  title="The main vision of the startup.">
        <Form.Label>Vision</Form.Label>
        <Form.Control as="textarea" placeholder="Add the Vision" style={{height:"150px",opacity:0.8}} value={formData.vision} onChange={handleChange} name="vision" />
      </Form.Group>
      <Form.Group as={Col} title="provide a short description of the startup.">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" placeholder="Add the Description" style={{height:"150px",opacity:0.8}} value={formData.description} onChange={handleChange} name="description" />
      </Form.Group>
      </Row >
      <Row style={{height:'200px',marginTop:"30px",marginRight:"10px",marginLeft:"10PX"}}>
        <Col md={6}>
        <Form.Group title=" Give a short description on the founders of the start-up">
        <Form.Label>About the Founders</Form.Label>
        <Form.Control as="textarea" placeholder="Add the Founders Information" style={{height:"150px",opacity:0.8}} value={formData.aboutFounders} onChange={handleChange} name="aboutFounders"/>
      </Form.Group>
        </Col>
        <Col md={6}> <Form.Group title="Give the product description of all the products available.">
        <Form.Label>Product Description</Form.Label>
        <Form.Control as="textarea" placeholder="Add the Product Description" style={{height:"150px",opacity:0.8}} value={formData.productDescription} onChange={handleChange} name="productDescription"/>
      </Form.Group></Col>
     
     
      </Row >
      </div>

      <h1  style={{marginTop:"30px"}}>Financial Details</h1>
      <div style={{marginTop:"30px",backgroundColor:"lightGrey",borderRadius:"10PX 10PX 10PX 10PX",height:"210px"}}>

      <Row className="mb-3" style={{marginTop:"30px",marginLeft:"10px"}}>
      <Col md={2}>
      <Row style={{width:'260px'}}>
      <Form.Group title="total revenue generated by your business from all the active subscriptions in a last 3 months"><Form.Label>Monthly Revenue:</Form.Label>
      <Row >
      <Col>
      <InputGroup style={{width:'250px'}}>
      <Form.Select  style={{opacity:0.8}} 
      onChange={handleChange}
      name="m1" placeholder='select..'>
        <option>{formData.m1?formData.m1:"choose.."}</option>
        {mNames.map(e=>(
          <option>{e}</option>
        ))}
    </Form.Select>
      <InputGroup.Text>$</InputGroup.Text>
      <Form.Control type='number' style={{opacity:0.8,width:"70px"}} value={formData.r1} onChange={handleChange} name="r1" placeholder='Revenue'/>
      </InputGroup>
      </Col>
      
      <Col>
      <InputGroup style={{width:'250px',marginTop:'10px'}}>
      <Form.Select  style={{opacity:0.8}} 
      onChange={handleChange}
      name="m2" placeholder='select..'>
        <option>{formData.m2?formData.m2:"choose.."}</option>
        {mNames.map(e=>(
          <option>{e}</option>
        ))}
    </Form.Select>
      <InputGroup.Text>$</InputGroup.Text>
      <Form.Control type='number' style={{opacity:0.8,width:"70px"}} value={formData.r2} onChange={handleChange} name="r2" placeholder='Revenue'/>
      </InputGroup>
      </Col>
      <Col>
      <InputGroup style={{width:'250px',marginTop:'10px'}}>
      <Form.Select  style={{opacity:0.8}} 
      onChange={handleChange}
      name="m3" placeholder='select..'>
        <option>{formData.m3?formData.m3:"choose.."}</option>
        {mNames.map(e=>(
          <option>{e}</option>
        ))}
    </Form.Select>
      <InputGroup.Text>$</InputGroup.Text>
      <Form.Control type='number' style={{opacity:0.8,width:"70px"}} value={formData.r3} onChange={handleChange} name="r3" placeholder='Revenue'/>
      </InputGroup>
      </Col>
      </Row>
      </Form.Group>

    </Row>
      </Col>
      <Col md={2} style={{marginLeft:"5%"}}>
      <FormGroup as={Row} controlId="" title="determine the current worth of your startup">
      <Form.Label>TotalValuation</Form.Label>
      <InputGroup  >
          <InputGroup.Text>$</InputGroup.Text>
          <Form.Control style={{opacity:0.8}} type="number" value={formData.totalValuation} onChange={handleChange} name="totalValuation" placeholder='Enter Total Valuation'/>
        </InputGroup>
        </FormGroup>
        <FormGroup as={Row} controlId="" style={{marginTop:"10px"}} title="gross income of the last year ">
      <Form.Label>Annual Revenue</Form.Label>
      <InputGroup >
          <InputGroup.Text>$</InputGroup.Text>
          <Form.Control  style={{opacity:0.8}} type="number" value={formData.revenue} onChange={handleChange} name="revenue" placeholder='Enter Revenue'/>
        </InputGroup>
        </FormGroup>

</Col>
<Col md={2} style={{marginLeft:"10px"}}>
<FormGroup as={Row} controlId="" title="Current gross profits of your company ">
      <Form.Label>Gross Profits</Form.Label>
      <InputGroup >
          
          <Form.Control style={{opacity:0.8}} type="number" value={formData.grossProfit} onChange={handleChange} name="grossProfit" placeholder='Gross Profits'/>
          <InputGroup.Text>%</InputGroup.Text>
        </InputGroup>
        </FormGroup>
        <FormGroup as={Row} controlId="" style={{marginTop:"10px"}} title="net profit is generated as a percentage of revenue by the startup">
      <Form.Label>Net Profits</Form.Label>
      <InputGroup >
          
          <Form.Control  style={{opacity:0.8}} type="number" value={formData.netProfit} onChange={handleChange} name="netProfit" placeholder='Net Profits'/>
          <InputGroup.Text>%</InputGroup.Text>
        </InputGroup>
        </FormGroup>
</Col>  
<Col md={3} style={{marginLeft:"10px"}}>
<FormGroup as={Col} controlId="" title="If the startup is spending more cash(Includes everything) then profits then how much in %.">
      <Form.Label>Any Cash Burn</Form.Label>
      <InputGroup>
      <InputGroup.Text><Form.Check type="switch" id="yes-no-switch" label={iscb?'Yes':'No'} onChange={handleChange} name="anyCashBurn" checked={iscb}/></InputGroup.Text>
          <Form.Control style={{opacity:0.8}}  type="number" value={formData.cashBurn} onChange={handleChange} name="cashBurn" placeholder='' disabled={!iscb}/>
          <InputGroup.Text>%</InputGroup.Text>
        </InputGroup>
        </FormGroup>
        <FormGroup as={Col} controlId="" style={{marginTop:"10px"}} title="ownership shares in a company issued to the original organizers, or founders">
      <Form.Label>Equity With Founders</Form.Label>
      <InputGroup>
      <Form.Control style={{opacity:0.8}}   type="number" value={formData.equityWithFounders} onChange={handleChange} name="equityWithFounders" placeholder='Equity Percent'/>
      <InputGroup.Text>%</InputGroup.Text>
      </InputGroup>
        </FormGroup>
        </Col>
        <FormGroup as={Col} controlId="" style={{marginRight:"10PX"}} title="give a short description of the prior investors.">
      <Form.Label>Prior Investments</Form.Label>
      <Form.Control style={{opacity:0.8,height:"130px"}}   as="textarea" onChange={handleChange}  value={formData.priorInvestment} name="priorInvestment" placeholder='Prior Investments'/>
        </FormGroup>
        </Row>
        
        </div>
        <h1  style={{marginTop:"30px"}}>Funding Details</h1>
        <div style={{marginTop:"30px",backgroundColor:"lightGrey",borderRadius:"10PX 10PX 10PX 10PX",height:"120px"}}>

      <Row className="mb-3" style={{marginTop:"30px",marginLeft:"10px",marginRight:"10px"}}>
      <FormGroup as={Col} controlId="" title="sale of a security by the start-up">
      <Form.Label>Percentage Offering</Form.Label>
      <InputGroup>
          <Form.Control style={{opacity:0.8}}  type="number" value={formData.percentOffer} onChange={handleChange} name="percentOffer" placeholder='Enter Percentage Offering'/>
          <InputGroup.Text>%</InputGroup.Text>
        </InputGroup>
        </FormGroup>
        <FormGroup as={Col} controlId="" title="The number of bits which the startup offers (This determines the value of each bit)">
      <Form.Label>Total Bits</Form.Label>
      <Form.Control style={{opacity:0.8}}   type="number" value={formData.totalBits} onChange={handleChange} name="totalBits" placeholder='Bits count'/>

        </FormGroup>
        <FormGroup as={Col} controlId="" title="Bit value is the(Total valuation * % of startup offering)/(100 * Number of bits)
">
        <Form.Label>Bit Value</Form.Label>
        <InputGroup>
        <Form.Control  style={{ opacity: 0.8 }}  type="number" value={((formData.totalValuation* formData.percentOffer) / (formData.totalBits*100)).toFixed(2)} name="costPerBit" placeholder='-'/>
        </InputGroup>
        </FormGroup>
        <Form.Group as={Col} controlId="formGridDob" title="The date by which the investment round ends.">
        <Form.Label>Investment End Date</Form.Label>
        <InputGroup className='mb-3'>
          <Form.Control type="date" format="MM/DD/YYYY" isInvalid={!isFuture(new Date(formData.time))} placeholder="MM/DD/YYYY" value={formData.time} onChange={handleChange} name="time" style={{width:'100%'}}/>
          <Form.Control.Feedback type="invalid">Please Select a Future Date</Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        </Row>
        </div>
        <h1 style={{marginTop:"30px"}}>Address & Contact Details</h1>
        <div style={{marginTop:"30px",backgroundColor:"lightGrey",borderRadius:"10PX 10PX 10PX 10PX",height:"350px"}}>
        
        <Row className="mb-3" style={{marginTop:"30px",marginLeft:"10PX",marginRight:"10px"}}>
        <Form.Group as={Col} controlId="formGridPhNumber" title="The phone number through which startup can be contacted ">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control style={{opacity:0.8}}  type="text" value={formData.phNumber} onChange={handleChange} name="phNumber" placeholder='Enter Phone Number'/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail" title="The Email through which startup can be contacted ">
          <Form.Label>Email</Form.Label>
          <Form.Control style={{opacity:0.8}} type="email" placeholder="Enter email" value={formData.email} onChange={handleChange} name="email" />
        </Form.Group>
        <FormGroup as={Col} controlId="" title="Name of the bank to which the funds should be transferred ">
      <Form.Label>Bank Name</Form.Label>
      <Form.Control style={{opacity:0.8}}   type="text" onChange={handleChange}  value={formData.bank} name="bank" placeholder='Bank Name'/>
        </FormGroup>
      
        <FormGroup as={Col} controlId="" title="Account number of the bank to which the funds should be transferred ">
      <Form.Label>Account Number</Form.Label>
      <Form.Control style={{opacity:0.8}} onChange={handleChange}   type="number" value={formData.bankAccount} name="bankAccount" placeholder='Bank Account'/>
        </FormGroup>
        
        
      </Row>
      
<Row className="mb-3" style={{marginTop:"30px",marginLeft:"10PX",marginRight:"10px"}} title="Address of the startup establishment.">
<Form.Group as={Col} controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control style={{opacity:0.8}}   value={formData.address1} onChange={handleChange} name="address1" placeholder="Enter Address Line 1"/>
      </Form.Group>

      <Form.Group as={Col} controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control style={{opacity:0.8}}  placeholder="Enter Address Line 2" value={formData.address2} onChange={handleChange} name="address2" />
      </Form.Group>
    </Row>
      

      <Row className="mb-3" style={{marginTop:"30px",marginLeft:"10PX",marginRight:"10px"}}>
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control  style={{opacity:0.8}} value={formData.city} onChange={handleChange} name="city" placeholder='Enter City'/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Control style={{opacity:0.8}}  value={formData.state} onChange={handleChange} name="state" placeholder='Enter State'/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCountry">
          <Form.Label>Country</Form.Label>
          <Form.Select  style={{opacity:0.8}} 
      onChange={handleChange}
      name="country" placeholder='Enter Country'>
        <option>{formData.country?formData.country:"choose.."}</option>
        {cNames.map(e=>(
          <option>{e.name}</option>
        ))}
    </Form.Select>
        </Form.Group>
      </Row>
      </div>
      <Button  disabled={formData.vision.length>1500 || formData.description.length>1500 ||formData.aboutFounders.length>1500||formData.productDescription.length>1500 || !isFuture(new Date(formData.time))} className="nav-link"  onClick={handleSubmit} style={{WebkitTextFillColor:'white',margin:'10px',width:'100px',height:'35px',backgroundColor:'green',WebkitTextFillColor:'white',border:'white',borderRadius:'5px',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:'bold',float:"right"}}>{status}</Button>
      <p style={{color:"red"}}>{error}</p>
      {formData.vision.length>1500?<p style={{color:"red"}}>"Vision" characters limit Exceeds,make sure the limit is 1500 letters</p>:null}
      {formData.description.length>1500?<p style={{color:"red"}}>"Description" characters limit Exceeds,make sure the limit is 1500 letters</p>:null}
      {formData.aboutFounders.length>1500?<p style={{color:"red"}}>"About Founders" characters limit Exceeds,make sure the limit is 1500 letters</p>:null}
      {formData.productDescription.length>1500?<p style={{color:"red"}}>"Product Description" characters limit Exceeds,make sure the limit is 1500 letters</p>:null}

        
    </Form>
        </div>
        
    </div>
  
  );
}

export default SEdit;
