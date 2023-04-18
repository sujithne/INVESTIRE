import React,{useState,useEffect} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Header from './Header.js'
import { DropdownButton } from 'react-bootstrap'
import { Dropdown } from 'bootstrap'
import Ihome from './Ihome'
import Login from './Login'
import SignUp from './signUp'
import Shome from './Shome'
import SEdit from './SEdit';
import SList from './SList'
import SDetails from './SDetails'
function App() {
  const [page,changePage]=useState("home");
  const [sData,changeSName]=useState({
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
                        }]});
  return (
  <div >
    <Router>
    <Routes>
    <Route path='/' element={ < Header page={page} changePage={changePage} sData={sData} changeSName={changeSName} />}/>
    <Route path='/home' element={ < Header page={page} changePage={changePage} sData={sData} changeSName={changeSName}/>}/>
    <Route path='/ihome' element={<Ihome page={page} changePage={changePage} sData={sData} changeSName={changeSName}/>}/>
    <Route path='/shome' element={<Shome  page={page} changePage={changePage} sData={sData} changeSName={changeSName}/> }/>
    <Route path='/sDetails' element={<SDetails  page={page} changePage={changePage} sData={sData} changeSName={changeSName}/> }/>
    <Route path="/sign-in" element={<Login page={page} changePage={changePage}/>} />
    <Route path="/sign-up" element={<SignUp page={page} changePage={changePage}/>} />
    <Route path="/profile" element={<SEdit page={page} changePage={changePage} sData={sData} changeSName={changeSName}/>} />
    <Route path="/startups" element={<SList page={page}  changePage={changePage} sData={sData} changeSName={changeSName}/>} />
    </Routes>
    </Router>
  </div>);
}
export default App