import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link ,useNavigate} from 'react-router-dom';
import Login from './Login'
import SignUp from './signUp'
import Home from './Home'
import Ihome from './Ihome';
import {Carousel } from 'react-bootstrap';  

import img from "../src/aboutus.jpg"
import Scomponent from './Scomponent';
import Ssuccess from './Ssuccess';
import 'primeicons/primeicons.css';

function Header(props) {
  const {page,changePage,sData,changeSName}=props;
  const sList=[{
    email: 'scrubdaddy@gmail.com',
        password: 'scrubdaddy@123',
            startUpName: 'Scrub Daddy',
                year: '01/01/2012',
                    vision: ' To provide and uplift the average Filipino with fun and innovative cleaning solutions through Scrub Daddys unique products',
                        description: 'Scrub Daddy makes high-performance cleaning products by combining exclusive materials with fun, functional designs.',
                            city: 'Pennsauken',
                                state: 'New Jersey',
                                    address1: 'Scrub Daddy Inc. 1700 Suckle Hwy',
                                        address2: ' Pennsauken, New Jersey 08110.',
                                            phNumber: '8443572782',
                                                country: 'USA',
                                                    category: 'Household',
                                                        productDescription: " Our broad range of products combine ergonomic design with innovative technologies to deliver superior cleaning power. Our texture changing non-toxic and scratch-free smiling scrubbers are the smart solution for kitchen and bathroom cleaning. Odor resistant and dual-use sponges and scouring pads are perfect for delicate applications as well as heavy-duty jobs. Eraser Daddy brightens the surfaces around your home in seconds while far outlasting competeing eraser pads. The Scrub Daddy family can handle any cleaning job around your home with a smile",
                                                            aboutFounders: 'Aaron Krause',
                                                                revenue: "120000",
                                                                    monthlySales: { "jan": "10200", "feb": "11300" },
    yealyBreakUp: { "2015": "25000","2016": "30000","2017": "44000", "2018": "60000","2019": "63000", "2020": "90000","2021": "93000", "2022": "120000" },
    percentOffer: "10",
        totalValuation: "1000000",
            costPerBit: "50",
                time: "60 days",
    priorInvestment: "Bootstrap",
        video: "https://youtu.be/fyg-yYiDJ2M",
            totalBits: 2000,
                last3MonthsRevenue: [
                    { month: 'Dec', revenue: 10200 },
                    { month: 'Jan', revenue: 8700 },
                    { month: 'Feb', revenue: 7300 }
                ],
                    investors: [
                        {
                            investor: 'Sam',
                            investment: '$500',
                            date: '12/25/2023'
                        },
                        {
                            investor: 'Jhon',
                            investment: '$4000',
                            date: '01/21/2023'
                        },
      {
                            investor: 'Katy',
                            investment: '$3000',
                            date: '02/17/2023'
                        },
      {
                            investor: 'Frank Jr',
                            investment: '$2200',
                            date: '02/17/2023'
                        },
      {
                            investor: 'chadler',
                            investment: '$7500',
                            date: '02/17/2023'
                        },
      {
                            investor: 'Rachel',
                            investment: '$2750',
                            date: '02/17/2023'
                        },
      {
                            investor: 'monica',
                            investment: '$5500',
                            date: '02/17/2023'
                        },
      {
                            investor: 'Joey',
                            investment: '$6650',
                            date: '02/17/2023'
                        },
      {
                            investor: 'Journey Ayers',
                            investment: '$11000',
                            date: '02/17/2023'
                        },
      {
                            investor: 'Damion Livingston',
                            investment: '$1650',
                            date: '02/17/2023'
                        }]},{
                          email: 'doorbot@gmail.com',
                              password: 'Doorbot@890',
                                  startUpName:'Doorbot',
                                      year: '01/01/2020',
                                          vision: 'To make door security accessable for every household',
                                              description: 'Doorbot is a video intercom for your smartphones and tablets. See and talk with visitors using your smartphones and tablets.',
                                                  city: 'Santa Monica',
                                                      state:'California',
                                                          address1: 'Santa Monica,California',
                                                              address2: '',
                                                                  phNumber: '98327842948',
                                                                      country: 'USA',
                                                                          category: 'Security',
                                                                              productDescription: "DoorBot is simple, yet powerful.wireless doorbell that streams livevideo and audio of your front doordirectly to your smartphone or tablet.Simply install DoorBot, download thefree app and you're ready to go.",
                                                                                  aboutFounders: 'Jamie Siminoff',
                                                                                      revenue: "$ 1.9 million",
                                                                                          monthlySales: {'dec':'75.2k', "jan": "78.8k", "feb": "81k" },
                          yealyBreakUp: {"2020": "350k","2021": "550k", "2022": "$ 1 million" },
                          percentOffer: "10",
                              totalValuation: "7000000",
                                  costPerBit: "140",
                                      time:"65 days",
                          priorInvestment: "Qualcomm ventures",
                              video: "https://youtu.be/ouOrfvqUGbI",
                                  TotalBitsOffered: 5000,
                                      last3MonthsRevenue: [
                                          { month: 'Dec', revenue: 75200 },
                                          { month: 'Jan', revenue: 78800 },
                                          { month: 'Feb', revenue: 81000 }
                                      ],
                                          investors: [
                                              {
                                                  investor:'Qualcomm',
                                                  investment: '$400k ',
                                                  date: '01/03/2023'
                                              },
                                              {
                                                  investor:'DFJ Growth',
                                                  investment: '$300k',
                                                  date: '01/18/2023'
                                              }],
                            
                                              anyCashBurn:"Yes",
                                              cashBurn:"20",
                                              grossProfit:30,
                                              netProfit:'-',
                                              equityWithFounders:70,
                                              bank:'SEFCU Bank',
                                              bankAccount:'546378972145'
                      },{
                        email: 'pizzacupcake@gmail.com',
                            password: 'PizzaCupcake#NY',
                                startUpName:'Pizza Cup Cake',
                                    year: '01/01/2018',
                                        vision: 'To provide new pizza experience that\'s a conveniently cupcake-shaped snack ',
                                            description: 'a new pizza experience that\'s a conveniently cupcake-shaped snack, perfect for when you want pizza on the go',
                                                city: 'Brooklyn',
                                                    state:'NewYork',
                                                        address1: '130 Water St 3C',
                                                            address2: '',
                                                                phNumber: '5638881234',
                                                                    country: 'USA',
                                                                        category: 'Food',
                                                                            productDescription: "The Pizza Cupcake, made with love in Brooklyn, NY, It is filled with real mozzarella cheese, and imported.Italian tomatoes, along with atrade-secret dough(Not traditional pizza dough)that is flaky and savory.",
                                                                                aboutFounders: 'Michelle Jimenez-Meggiato,Andrea Meggiato',
                                                                                    revenue: "770000",
                                                                                        monthlySales: {'dec':'21k', "jan": "24k", "feb": "26k" },
                        yealyBreakUp: {"2018": "47k","2019": "80k", "2020": "131k","2021": "178k", "2022": "$ 344k" },
                        percentOffer: "5",
                            totalValuation: "25000000",
                                costPerBit: "125",
                                    time:'60 days',
                        priorInvestment: "BootStrap",
                            video: "https://youtu.be/7-1EEwPQ_38",
                                TotalBitsOffered: 10000,
                                    last3MonthsRevenue: [
                                        { month: 'Dec', revenue: '21000' },
                                        { month: 'Jan', revenue: '24000' },
                                        { month: 'Feb', revenue: '26000' }
                                    ],
                                        investors: [
                                            {
                                                investor:'lary',
                                                investment: '$725k ',
                                                date: '2/23//2023'
                                            },
                                            {
                                                investor: 'blackstone',
                                                investment: '$500k',
                                                date: '01/21/2023'
                                            }],
                                            anyCashBurn:"No",
                                            cashBurn:"-",
                                            grossProfit:55,
                                            netProfit:'25',
                                            equityWithFounders:100,
                                            bank:'Bank of america',
                                            bankAccount:'785462895468'
                    },{
  email: 'cupbop@gmail.com',
      password: 'cupbop@890',
          startUpName:'cupbop',
              year: '01/01/2019',
                  vision: "CUPBOP MEANS A STEAMING CUP OF WOW! We're here to end your boredom with the same old food choices",
                   description: "The Cupbop menu is our own delicioustake on Korean cuisine",
                          city: 'Glendale',
                              state:'Arizona',
                                  address1: '9410 W Hanna Ln Ste 101, Glendale, Arizona, 85305, United States',
                                      address2: '',
                                          phNumber: '98327842966',
                                              country: 'USA',
                                                  category: 'food',
                                                      productDescription: "“Bop” is Korean for “steamed rice.”Cupbop is steamed rice servedin a cup, along with cabbage, sweet potato noodles, a protein ofchoice and one of their specialty sauces that range fromsweet (#1) to fiery (10). The menu is based on the Korean BBQ the trio ate while growing up in South Korea.",
                                                          aboutFounders: 'Park, JK Kim and Jung Song',
                                                              revenue: "$ 60 million",
                                                                  monthlySales: {"jan": "93.7k", "feb": "$1 million " },
  yealyBreakUp: {'2019':'9.3 million',"2020": "14 million","2021": "18 million", "2022": "$ 18.7 million" },
  percentOffer: "3",
      totalValuation: "33000000",
          costPerBit: "110 ",
              time:"27 days",
  priorInvestment: "Bootstraped",
      video: "https://youtu.be/mKlZ7rtiPbY",
          TotalBitsOffered: 9000,
              last3MonthsRevenue: [
                  { month: 'Dec', revenue: 89100},
                  { month: 'Jan', revenue: 9370000 },
                  { month: 'Feb', revenue: 1000000 }
              ],
                  investors: [
                      {
                          investor:'xavier',
                          investment: '$500k ',
                          date: '01/08/2023'
                      },
                      {
                          investor:'john',
                          investment: '$300k',
                          date: '02/18/2023'
                      },
{
                          investor:'smitha',
                          investment: '$200k',
                          date: '02/28/2023'
                      }],

    
                      anyCashBurn:"No",
                      cashBurn:"-",
                      grossProfit:45,
                      netProfit:20,
                      equityWithFounders:100,
                      bank:'SEFCU Bank',
                      bankAccount:'54637894321'
},{
  email: 'bombas@gmail.com',
      password: 'bombas#NY',
          startUpName:'Bombas',
              year: '01/01/2017',
                  vision: 'One Purchased = One Donated ',
                      description: 'Bombas is an apparel brand. which sells socks and T-shirts',
                          city: 'newyork',
                              state:'NewYork',
                                  address1: '881 Broadway Second FloorNew York, NY 10003USA',
                                      address2: '',
                                          phNumber: '5638881267',
                                              country: 'USA',
                                                  category: 'clothing',
                                                      productDescription: "Bombas Socks are purpose built forathletic performance, engineered forcomfort, and designed to stand out. Rumor has it a baby kitten is savedfrom a very tall tree every time you slip on a pair.",
                                                          aboutFounders: 'Randy Goldberg ,David Heath',
                                                              revenue: "1900000",
                                                                  monthlySales: { "jan": "80.1k", "feb": "82.5k" },
  yealyBreakUp: {"2018": "97k","2019": "173k", "2020": "226k","2021": "352k", "2022": "1 million" },
  percentOffer: "5",
      totalValuation: "4000000",
          costPerBit: "80",
              time:"90 days",
  priorInvestment: "Daymond Garfield John",
      video: "https://youtu.be/qT66d_PRR6U",
          TotalBitsOffered: 2500,
              last3MonthsRevenue: [
                  { month: 'Dec', revenue: 78000 },
                  { month: 'Jan', revenue: 80100 },
                  { month: 'Feb', revenue: 82500 }
              ],
                  investors: [
                      {
                          investor:'Daymond Garfield John',
                          investment: '$200k ',
                          date: '1/17//2023'
                      }],
                      anyCashBurn:'N0',
                      cashBurn:"-",
                      grossProfit:60,
                      netProfit:35,
                      equityWithFounders:100,
                      bank:'Bank of america',
                      bankAccount:'785462893457'
}];
const successList=[{startUpName:"Company1",video:"https://youtu.be/jDLuJLoaA_g"},{startUpName:"Company2",video:"https://youtu.be/jDLuJLoaA_g"},{startUpName:"Company3",video:"https://youtu.be/jDLuJLoaA_g"},{startUpName:"Company4",video:"https://youtu.be/jDLuJLoaA_g"},{startUpName:"Company5",video:"https://youtu.be/jDLuJLoaA_g"}];

  const [index2, setIndex2] = useState(0);

  const handlePrev2 = () => {
    if(index2!=0){
    setIndex2((index2 - 1 +successList.length ) % successList.length);
    }
  };

  const handleNext2 = () => {
    console.log(successList.length);
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
  
    const [headerHeight, setHeaderHeight] = useState(0);
    useEffect(()=>{
      const header=document.querySelector("header");
      setHeaderHeight(header.offsetHeight);
    },[])
    const img1="https://www.clipartmax.com/png/small/209-2091423_security-camera-cctv-camera-clipart-clipartfest-cctv-black-full.png"
  return (
    <div >
    <header style={{backgroundColor:"grey",borderRadius:"0px 0px 0px 50px",position:'fixed',width:"100%", top:0,overflow:"hidden",zIndex:1}} >
    <Navbar expand="lg" bg="dark" style={{borderRadius:"0px 0px 0px 200px",height:"100px"}}>
      <Container style={{marginLeft:"40px"}}>
        <h2 style={{WebkitTextFillColor:'white',fontWeight:'bold',marginTop:"11px",fontFamily:"calibri",fontSize:"40px"}}>INVESTIRE</h2>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{marginLeft:"50px"}}>
            <Link to='/home'  className="nav-link" style={{WebkitTextFillColor:'white',fontWeight:'bold'}}>Home</Link>
            {/* <Nav.Link href="#link" style={{WebkitTextFillColor:'white',fontWeight:'bold'}}>SeekInvestment</Nav.Link> */}
            <Nav.Link href="#link" style={{WebkitTextFillColor:'white',fontWeight:'bold'}}>FAQ's</Nav.Link>
           
          </Nav>
          <Link to='/sign-in'  className="nav-link" style={{WebkitTextFillColor:'white',margin:'10px',width:'70px',height:'35px',backgroundColor:'white',WebkitTextFillColor:'black',border:'white',borderRadius:'5px',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:'bold'}}>Login</Link>
            <Link to='/sign-up' className='nav-link' style={{WebkitTextFillColor:'white',width:'80px',height:'35px',backgroundColor:'white',WebkitTextFillColor:'black',border:'white',borderRadius:'5px',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:'bold'}}>  Register
              </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
  <h1 style={{marginTop:"130px",marginLeft:"35px"}}>About Us</h1>

  <img src={img} style={{height:"450px",width:"95%",marginLeft:"3%",marginTop:"20px",opacity:0.9,borderRadius:"30px 30px 30px 30px" }}/>
  <>
  <h1 style={{marginTop:"30px",marginLeft:"35px"}}>Top 5 Funding Companies</h1>
  <div style={{display:"flex",marginLeft:"40px",marginTop:"40px",backgroundColor:"white",height:"350px",borderRadius:"30px 30px 30px 30px" ,width:"95%"}} >
     
      {sList.slice(index, index + 3).map((component, i) => (
        <Scomponent i={i} item={component} style={{display:"flex"}} />
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

export default Header;
