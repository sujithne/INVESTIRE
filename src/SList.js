import React,{useState,useRef,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Modal from 'react-bootstrap/Modal';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
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

import Col from 'react-bootstrap/Col';
import {  Image, Card, Table } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import ReactPlayer from 'react-player';

function SList(props) {
const {page,changePage,sName,changeSName}=props
  const handleInvest=(e)=>{
    changeSName(e);
    navigate('/sDetails')
  }

  function extractVideoId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
  
    return match && match[2].length === 11 ? match[2] : null;
  }
  

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
  const [searchTerm,setSearchTerm]=useState("");
  const handleSearch=(e)=>{
    setSearchTerm(e.target.value);
  }

  
    const [isVisible, setIsVisible] = useState(false);
    const toast = useRef(null);
    const navigate=useNavigate();
    const handleClick = () => {
      changePage("home");
      navigate('/home');
    };
    
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
              anyCashBurn:"No",
                        cashBurn:"0",
                        grossProfit:48,
                        netProfit:22,
                        equityWithFounders:100,
                        bank:'Bank Of America',
                        bankAccount:'12345678901',
                  last3MonthsRevenue: [
                      { month: 'Dec', revenue: 7800 },
                      { month: 'Jan', revenue: 8700 },
                      { month: 'Feb', revenue: 10300 }
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
        email: 'smartsoda@gmail.com',
            password: 'Smart@soda',
                startUpName: 'Smart Soda',
                    year: '2017',
                        vision: ' To provide vitamin infused flavared sparkling waters & craft sodas.',
                            description: 'SMART SODA IS A UNIVERSE OF FUNCTIONAL BEVERAGES, SERVING UP AN ODYSSEY OF FLAVOR AND REFRESHMENT FOR FOOD SERVICE, THE WORKPLACE, AND ON-THE-GO.',
                                city: 'Cleveland',
                                    state: 'Ohio',
                                        address1: '6095 Parkland Blvd Suite 300',
                                            address2: ' Cleveland, OH 44124',
                                                phNumber: '8889989668',
                                                    country: 'USA',
                                                        category: 'Food',
                                                            productDescription: " We are much more than a simple brand or beverage company. We are a story of commitment and passion to each member of our team and to the health and happiness of every person on this planet. From our integrity in business, to the tasty, refreshing, and energizing drinks we offer, we bring life and vitality to the scene. It is within our very nature to live up to and deliver everyday effervescence.Effervescence-the bubbles that dance in liquid-increase the brain’s sense of flavor, aroma, and pleasure. It revolutionizes our senses, our thinking, and our parameters of pleasure. Smart Soda is here to embody and dispense.",
                                                                aboutFounders: 'lior shafir',
                                                                    revenue: "500000",
                                                                        monthlySales: { "jan": "321", "feb": "432" },
        yealyBreakUp: { "2017": "14000", "2018": "29000","2019": "36000" ,"2020": "68000","2021": "92000", "2022": "200000" },
        percentOffer: "5.50%",
            totalValuation: "$1 million",
                costPerBit: "55",
                    time: "90 days",
        priorInvestment: "Bootstrap",
            video: "https://www.youtube.com/watch?v=u3jhmaeEJbI",
                totalBits: 1000,
                    last3MonthsRevenue: [
                        { month: 'Dec', revenue: "17500" },
                        { month: 'Jan', revenue: "19000" },
                        { month: 'Feb', revenue: "20000" }
                    ],anyCashBurn:"Yes",
                    cashBurn:"5",
                    grossProfit:30,
                    netProfit:5,
                    equityWithFounders:100,
                    bank:'Chase Bank',
                    bankAccount:'9876544321001',
                        investors: [
                            {
                                investor: 'Kajal',
                                investment: '$2200',
                                date: '12/25/2023'
                            },
                            {
                                investor: 'emilia',
                                investment: '$3960',
                                date: '01/21/2023'
                            },
                            {
                                investor: 'Katrina',
                                investment: '$3025',
                                date: '02/17/2023'
                            },
          {
                                investor: 'Samantha',
                                investment: '$2200',
                                date: '02/17/2023'
                            },
          {
                                investor: 'Jasmine',
                                investment: '$550',
                                date: '02/17/2023'
                            },
          {
                                investor: 'Harley Shea',
                                investment: '$2750',
                                date: '02/17/2023'
                            },
          {
                                investor: 'Caroline Deleon',
                                investment: '$1650',
                                date: '02/17/2023'
                            },
          {
                                investor: 'Hailey Potts',
                                investment: '$5500',
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
                                date: '02/17/2023',
                            }]},{
                              email: 'comfy@gmail.com',
                              password: 'Comfy@best',
                              startUpName:'The Comfy',
                              year:'01/01/2017',
                              vision:' We aim to maximize our positive impact on everyone we touch. We create lasting value in a complex and uncertain world',
                              description:'Wrap yourself in a warm,wearable hug! Turn the heat down and bring on the cold with The Comfy!',
                              city:'Cave Creek',
                              state:'Arizona',
                              address1:'4634 E Peak View Rd, Cave Creek',
                              address2:'  Arizona, 85331, United States',
                              phNumber:'606924134',
                              country:'USA',
                              category:'Clothing',
                              productDescription:"",
                              aboutFounders:'Brian Speciale, Michael Speciale',
                              revenue:"25000",
                              monthlySales:{"jan":"$35k","feb":"$30k"},
                              yealyBreakUp:{"2020":"225k","2022":"250k"},
                              percentOffer:"20",
                              totalValuation:"10710000",
                              costPerBit:"35",
                              time:'45 days',
                              priorInvestment:"Bootstraped",
                              video:"https://youtu.be/t4YHl2LQxGk",
                              totalBits:1500,
                              last3MonthsRevenue:[
                                { month: 'Jan', revenue: '11200' },
                                { month: 'Feb', revenue: '9000' },
                                {month: 'Mar',revenue:'25000'}
                              ],
                              investors:[
                                {
                                  investor: 'Lexie Kelly',
                                  investment: '$2500',
                                  date: '12/25/2023'
                                },
                                {
                                  investor: 'Karen Goodwin',
                                  investment: '$4000',
                                  date: '02/17/2023'
                                },
                                {
                                  investor: 'Ahmad Harrell',
                                  investment: '$3000',
                                  date: '02/17/2023'
                                },
                                {
                                  investor: 'Jamie Rubio',
                                  investment: '$2125',
                                  date: '02/17/2023'
                                },
                                {
                                  investor: 'Curtis Delacruz',
                                  investment: '$415',
                                  date: '02/17/2023'
                                },
                                {
                                  investor: 'Elliot Hull',
                                  investment: '$1775',
                                  date: '02/17/2023'
                                },
                                {
                                  investor: 'Aaden',
                                  investment: '$1600',
                                  date: '02/17/2023'
                                },
                                {
                                  investor: 'Hailey',
                                  investment: '$5600',
                                  date: '02/17/2023'
                                },
                                {
                                  investor: 'Craig',
                                  investment: '$9000',
                                  date: '02/17/2023'
                                },
                                {
                                  investor: 'Danny',
                                  investment: '$2600',
                                  date: '02/17/2023'
                                }]},{
    email: 'larq@gmail.com',
        password: 'larq@123',
            startUpName: 'LARQ',
                year: '01/012018',
                    vision: ' Making clean drinking water accessible',
                        description: 'Larq is a self-cleaning and self-water purification system',
                            city: 'san mateo',
                                state: 'CA',
                                    address1: '1900 South Norfolk Street',
                                        address2: ' Suite 350',
                                            phNumber: '8443572722',
                                                country: 'USA',
                                                    category: 'Household',
                                                        productDescription: " You are what you drink. So drink brilliantly LARQ’s approach to product innovation is driven by a single purpose - we make it easy to opt for the healthier and more sustainable hydration choice, anytime and anywhere. Our award winning lineup of hydration products improves water quality, taste and overall convenience so reaching for that single-use bottle is never a better option. Drink with a purpose - Committed to sustainability, a portion of every LARQ purchase gives back, funding environmental nonprofits around the world as well as bringing safe drinking water to billions of people worldwide—because access to clean drinkable water is not a privilege, it's a right.",
                                                            aboutFounders: 'Justin Wang',
                                                                revenue: "14000000",
                                                                    monthlySales: { "jan": "1100000", "feb": "1000000" },
    yealyBreakUp: { "2015": "25000", "2016": "30000", "2017": "44000", "2018": "60000", "2019": "63000", "2020": "90000", "2021": "93000", "2022": "120000" },
    percentOffer: "1",
        totalValuation: "50000000",
            costPerBit: "50",
                time: '120 days',
    priorInvestment: "Bootstrap",
        video: "https://www.youtube.com/watch?v=85Dy9RIAvmo",
            totalBits: 10000,
                last3MonthsRevenue: [
                    { month: 'Dec', revenue: 1100000 },
                    { month: 'Jan', revenue: 1000000 },
                    { month: 'Feb', revenue: 990000 }
                ],
                    investors: [
                        {
                            investor: 'Samantha',
                            investment: '$5000',
                            date: '12/25/2023'
                        },
                        {
                            investor: 'peter',
                            investment: '$9000',
                            date: '01/21/2023'
                        },
      {
                            investor: 'andrew',
                            investment: '$12000',
                            date: '02/01/2023'
                        },
      {
                            investor: 'Robert',
                            investment: '$18000',
                            date: '01/17/2023'
                        },
      {
                            investor: 'Steve',
                            investment: '$50000',
                            date: '01/13/2023'
                        },
      {
                            investor: 'ross',
                            investment: '$30000',
                            date: '01/19/2023'
                        },
      {
                            investor: 'Banner',
                            investment: '$5500',
                            date: '12/25/2022'
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
                        }],
                        anyCashBurn:"No",
                        cashBurn:"0",
                        grossProfit:32,
                        netProfit:22,
                        equityWithFounders:78,
                        bank:'Bank Of America',
                        bankAccount:'123456781111'
},{
  email: 'vengo@gmail.com',
  password: 'Vengo@labs',
  startUpName:'Vengo Labs',
  year:'01/012012',
  vision:' To provide a comapack vending machine  ',
  description:'Vengo delivers content and advertising to your target audience when and where they go. Vengo helps screen owners optimize ad revenue through programmatic Digital Out Of Home (DOOH) advertising',
  city:'Bethpage',
  state:'Arizona',
  address1:'999 S Oyster Bay Rd Building 407',
  address2:'Bethpage, NY 11714',
  phNumber:'8665267054',
  country:'USA',
  category:'Machines',
  productDescription:"Place-Based Retail - Consumers purchase products when and where they need them Example: A gym member forgot her lock and can easily purchase one in the locker room.             Digital Out-of-Home (DOOH) Media Network - Brands can deliver their messages to people on the go, in contextually relevant locations.Example: An airline promotes a new loyalty offer to hotel guests.                                 Vengo Media Network Platform - Our software platform turns any screen into a DOOH screen and enables content and paid advertising without having to do any work through a simple no-code integration.",
  aboutFounders:'Brian Shimmerlik, steven bofill',
  revenue:"1000000",
  monthlySales:{"jan":"$35k","feb":"$30k"},
  yealyBreakUp:{"2020":"225k","2022":"250k"},
  percentOffer:"12.5",
  totalValuation:"16000000",
  costPerBit:"110",
  time:"85 days",
  priorInvestment:"Bootstraped",
  video:"https://youtu.be/S9ffi91UiEQ",
  totalBits:2500,anyCashBurn:"No",
  cashBurn:"0",
  grossProfit:23,
  netProfit:10,
  equityWithFounders:100,
  bank:'Bank Of America',
  bankAccount:'111845678901',
  last3MonthsRevenue:[
    { month: 'Jan', revenue: '75000'},
    { month: 'Feb', revenue: '80000' },
    {month: 'Mar',revenue:'97000'}
  ],
  investors:[
    {
      investor: 'Wayne',
      investment: '$2500',
      date: '12/17/2022'
    },
    {
      investor: 'Eliezer',
      investment: '$4300',
      date: '02/15/2023'
    },
    {
      investor: 'Matthias',
      investment: '$3000',
      date: '11/30/2023'
    },
    {
      investor: 'Champ',
      investment: '$125',
      date: '01/17/2023'
    },
    {
      investor: 'Axar',
      investment: '$4000',
      date: '02/12/2023'
    },
    {
      investor: 'Andrew',
      investment: '$175',
      date: '02/06/2023'
    },
    {
      investor: 'Harris',
      investment: '$15000',
      date: '01/30/2023'
    },
    {
      investor: 'Sammy',
      investment: '$5600',
      date: '12/23/2023'
    },
    {
      investor: 'Stephen Jr',
      investment: '$2367',
      date: '02/19/2023'
    },
    {
      investor: 'Maverick',
      investment: '$5432',
      date: '03/1/2023'
    }]},{
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
                                                                revenue: " 1.9 million",
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
                        netProfit:'0',
                        equityWithFounders:70,
                        bank:'SEFCU Bank',
                        bankAccount:'546378972145'
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
                  { month: 'Dec', revenue: 891000},
                  { month: 'Jan', revenue: 937000 },
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
}]
   const filteredItems=sList.filter((item)=>item.startUpName.toLowerCase().includes(searchTerm.toLowerCase()));
   
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
          {console.log(page)}
         {page==="shome"? <Nav.Link href="/shome" style={{WebkitTextFillColor:'white',fontWeight:"bold"}}>Home</Nav.Link>:null}
         {page==="ihome"? <Nav.Link href="/ihome" style={{WebkitTextFillColor:'white',fontWeight:"bold"}}>Home</Nav.Link>:null }
            <Nav.Link href="#link" style={{WebkitTextFillColor:'white',fontWeight:"bold"}}>FAQ's</Nav.Link>
           
          </Nav>
          <div style={{width:"200px"}}>
          <InputGroup  >
        <Form.Control type="text" value={searchTerm} onChange={handleSearch} />
        <InputGroup.Text id="basic-addon2"><i className="pi pi-search" style={{ fontSize: '1rem',color:'black' }} onClick={handleShow}></i></InputGroup.Text>
      </InputGroup>
      </div>
          <>
          
      </>
          <Button onClick={handleClick} className="nav-link" style={{WebkitTextFillColor:'white',margin:'10px',width:'70px',height:'35px',backgroundColor:'white',WebkitTextFillColor:'black',border:'white',borderRadius:'5px',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:"bold"}}>Log out</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
  <div style={{marginTop:"130px"}}>
  <h1 style={{marginTop:"20px",marginLeft:"20px"}}>StartUps</h1>
  <div style={{display:"flex",flexWrap:"wrap",marginLeft:"40px"}}>
    
    {filteredItems.map((item,a=extractVideoId(item.video))=>(
        
        <div  className='auth-inner1' style={{marginBottom:"20px",width:"22%",height:'275px'}}>
          <div  style={{display:"none"}}> {a=extractVideoId(item.video)}</div>
          <h3 style={{marginTop:'2px'}}>{item.startUpName}</h3>
            <img src={"https://img.youtube.com/vi/"+a+"/hqdefault.jpg"} alt="YouTube Thumbnail" style={{height:"150px",width:"100%",transform:`translateY(7px)`,objectFit:'cover',imageRendering:'optimizeQuality',borderRadius:"15px 15px 15px 15px"}}/>
            <Button variant="success" onClick={()=>handleInvest(item)} style={{width:"40%",height:"40px",float:'right',marginTop:'20px'}}>Invest</Button>

         <p style={{fontWeight:'bold',marginTop:'10px'}}>BitValue: ${item.costPerBit}</p>
         </div>
    ))}
    </div>
    </div>
  </div>
  );
}

export default SList;
