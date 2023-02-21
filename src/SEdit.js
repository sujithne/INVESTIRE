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
//import CountrySelect from 'react-bootstrap-country-select';
import Col from 'react-bootstrap/Col';

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
function SEdit(props) {
  const [thumbnailUrl, setThumbnailUrl] = useState('');
  const [formData,setFormData]=useState({
    email: 'sample@gmail.com',
    password: '',
    startUpName:'abc',
    year:'',
    vision:'',
    description:'',
    city:'',
    state:'',
    address1:'',
    address2:'',
    phNumber:'',
    country:'',
    category:'Finance',
    productDescription:"We are the platform for investors and startups. ",
    aboutFounders:'ABC , XYZ',
    revenue:"$100,000",
    monthlySales:{"jan":"321","feb":"432"},
    yealyBreakUp:{"2020":"6789","2022":"6789"},
    percentOffer:"",
    totalValuation:"$1,000,000",
    costPerBit:"",
    time:"",
    priorInvestment:"",
    logo:"https://youtu.be/Nl-HyC9C7P0",
    totalBits:"2000 Bits"
  });
  const footerScroll=()=>{
    window.scrollTo({
      top:document.body.scrollHeight,
      behavior:"smooth"
    });
  }
  const fetchData = async (a) => {
    console.log(a);
    const videoId = extractVideoId(a);
    console.log(formData.logo)
    console.log(videoId)
    const response =fetch(
      `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}`
    ).then(response=>response.json()).then(data=>setThumbnailUrl(data.thumbnail_url));
  };
useEffect(() => {
  fetchData(formData.logo);
}, []);
    const {page,changePage}=props;
    const [isVisible, setIsVisible] = useState(false);
    const toast = useRef(null);
    const navigate=useNavigate();
    const handleClick = () => {
      changePage("home");
      navigate('/home');
    };
   
      const handleChange = event => {
        if(event.target.name=="logo"){
          fetchData(event.target.value);
            setFormData({
                ...formData,
                [event.target.name]: URL.createObjectURL(event.target.value)
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
            <Nav.Link href="/shome" style={{WebkitTextFillColor:'white',fontWeight:'bold'}}>Home</Nav.Link>
            <Nav.Link href="#link" style={{WebkitTextFillColor:'white',fontWeight:'bold'}}>StartUps</Nav.Link>
            <Nav.Link style={{WebkitTextFillColor:'white',fontWeight:'bold'}} onClick={footerScroll}>FAQ's</Nav.Link>
           
          </Nav>
          <Button onClick={handleClick} className="nav-link" style={{WebkitTextFillColor:'white',margin:'10px',width:'70px',height:'35px',backgroundColor:'white',WebkitTextFillColor:'black',border:'white',borderRadius:'5px',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:'bold'}}>Log out</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</header>
    <div style={{marginTop:"130px"}} >
        <Form style={{margin:'20px 20px'}} onSubmit={handleClick}>
        <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridFirstName">
          <Form.Label>StartUp Name</Form.Label>
          <Form.Control style={{opacity:0.8}} type="text" placeholder="Enter StartUp Name" value={formData.startUpName} onChange={handleChange} name="startUpName" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridLastName">
          <Form.Label>Date of Establishment</Form.Label>
          <Form.Control style={{opacity:0.8}} type="date" placeholder="" value={formData.year} onChange={handleChange} name="year" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridLastName">
          <Form.Label>Category</Form.Label>
          <Form.Select style={{opacity:0.8}} defaultValue="Choose..." value={formData.category} onChange={handleChange} name="category">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridLastName">
          <Form.Label>Youtube Profile video link</Form.Label>
          
          <Form.Control style={{opacity:0.8}} type="text"  placeholder="Enter youtube link" onChange={handleChange} name="logo" />
          
        </Form.Group>
        <Form.Group as={Col} controlId="formGridLastName">
          <div style={{overflow:'hidden',height:"100%"}}>
        <img src={thumbnailUrl} alt="YouTube Thumbnail" style={{height:"120px",width:"90%",transform:`translateY(5px)`,objectFit:'cover',imageRendering:'optimizeQuality'}}/>
        </div>
        </Form.Group>
       
      </Row>
      <Row className='mb-3' >
      <Form.Group as={Col} >
        <Form.Label>Vision</Form.Label>
        <Form.Control as="textarea" placeholder="Add the Vision" style={{height:"150px",opacity:0.8}} value={formData.vision} onChange={handleChange} name="vision" />
      </Form.Group>
      <Form.Group as={Col} >
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" placeholder="Add the Description" style={{height:"150px",opacity:0.8}} value={formData.description} onChange={handleChange} name="description" />
      </Form.Group>
      </Row >
      <Row className='mb-3' >
      <Form.Group as={Col} >
        <Form.Label>About the Founders</Form.Label>
        <Form.Control as="textarea" placeholder="Add the Founders Information" style={{height:"150px",opacity:0.8}} value={formData.aboutFounders} onChange={handleChange} name="aboutFounders"/>
      </Form.Group>
      <Form.Group as={Col} >
        <Form.Label>Product Description</Form.Label>
        <Form.Control as="textarea" placeholder="Add the Product Description" style={{height:"150px",opacity:0.8}} value={formData.productDescription} onChange={handleChange} name="productDescription"/>
      </Form.Group>
      </Row >
   
      <Row className="mb-3">
      <FormGroup as={Col} controlId="">
      <Form.Label>TotalValuation</Form.Label>
      <InputGroup >
          <InputGroup.Text>$</InputGroup.Text>
          <Form.Control style={{opacity:0.8}} type="number" value={formData.totalValuation} onChange={handleChange} name="totalValuation" placeholder='Enter Total Valuation'/>
        </InputGroup>
        </FormGroup>
        <FormGroup as={Col} controlId="">
      <Form.Label>Revenue</Form.Label>
      <InputGroup >
          <InputGroup.Text>$</InputGroup.Text>
          <Form.Control  style={{opacity:0.8}} type="number" value={formData.revenue} onChange={handleChange} name="revenue" placeholder='Enter Revenue'/>
        </InputGroup>
        </FormGroup>
        <FormGroup as={Col} controlId="" >
      <Form.Label>% Offering</Form.Label>
      <InputGroup>
          <Form.Control style={{opacity:0.8}}  type="number" value={formData.percentOffer} onChange={handleChange} name="percentOffer" placeholder=''/>
          <InputGroup.Text>%</InputGroup.Text>
        </InputGroup>
        </FormGroup>
        <FormGroup as={Col} controlId="" >
      <Form.Label>Total Bits</Form.Label>
      <Form.Control style={{opacity:0.8}}   type="number" value={formData.totalBits} onChange={handleChange} name="totalBits" placeholder='Bits count'/>

        </FormGroup>
        <FormGroup as={Col} controlId="" >
      <Form.Label>Bit Value</Form.Label>
      <Form.Control style={{opacity:0.8}}  readOnly="readonly" type="number" value={(formData.totalValuation*formData.percentOffer)/formData.totalBits} name="bitValue" placeholder='-'/>
        </FormGroup>
        
        <Form.Group as={Col} controlId="formGridPhNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control style={{opacity:0.8}}  type="text" value={formData.phNumber} onChange={handleChange} name="phNumber" placeholder='Enter Phone Number'/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control style={{opacity:0.8}} type="email" placeholder="Enter email" value={formData.email} onChange={handleChange} name="email" />
        </Form.Group>
        
      </Row>
<Row className="mb-3">
<Form.Group as={Col} controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control style={{opacity:0.8}}   value={formData.address1} onChange={handleChange} name="address1" placeholder="Enter Address Line 1"/>
      </Form.Group>

      <Form.Group as={Col} controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control style={{opacity:0.8}}  placeholder="Enter Address Line 2" value={formData.address2} onChange={handleChange} name="address2" />
      </Form.Group>
    </Row>
      

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control  style={{opacity:0.8}} value={formData.city} onChange={handleChange} name="city" placeholder='Enter City'/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Control style={{opacity:0.8}}  value={formData.state} onChange={handleChange} name="city" placeholder='Enter State'/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCountry">
          <Form.Label>Country</Form.Label>
          <Form.Select  style={{opacity:0.8}} 
      onChange={handleChange}
      name="country" placeholder='Enter Country'>
        <option>choose..</option>
        {cNames.map(e=>(
          <option>{e.name}</option>
        ))}
    </Form.Select>
        </Form.Group>
      </Row>


      <Button variant="secondary" type="submit" style={{right:0}}>
        Submit
      </Button>
    </Form>
        </div>
        
    </div>
  
  );
}

export default SEdit;
