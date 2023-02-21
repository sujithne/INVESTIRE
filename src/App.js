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
function App() {
  const [page,changePage]=useState("home");
  const [sData,changeSName]=useState({
    email: 'sample@gmail.com',
    password: '',
    startUpName:'Investire',
    year:'',
    vision:'To provide Right oppourtunity for the right potential',
    description:'We provide a platform for startups to get funding from the investors right from the bootstrap stage.',
    city:'',
    state:'',
    address1:'',
    address2:'',
    phNumber:'',
    country:'',
    category:'',
    productDescription:"",
    aboutFounders:'',
    revenue:"1000000",
    monthlySales:{"jan":"321","feb":"432"},
    yealyBreakUp:{"2020":"6789","2022":"6789"},
    percentOffer:"",
    totalValuation:"",
    costPerBit:"",
    time:"",
    priorInvestment:"",
    video:"https://youtu.be/Nl-HyC9C7P0",
    totalBits:2000,
    last3MonthsRevenue:[
      { month: 'Jan', revenue: 100 },
      { month: 'Feb', revenue: 200 },
      {month: 'Mar',revenue:300}
    ],
    investors:[
      {
        investor: 'investor1',
        investment: '$10,000',
        date: '25/04/2022'
      },
      {
        investor: 'investor2',
        investment: '$5,000',
        date: '02/02/2023'
      }
    ]
  });
  return (
  <div >
    <Router>
    <Routes>
    <Route path='/' element={ < Header page={page} changePage={changePage} sData={sData} changeSName={changeSName} />}/>
    <Route path='/home' element={ < Header page={page} changePage={changePage} sData={sData} changeSName={changeSName}/>}/>
    <Route path='/ihome' element={<Ihome page={page} changePage={changePage} sData={sData} changeSName={changeSName}/>}/>
    <Route path='/shome' element={<Shome  page={page} changePage={changePage} sData={sData} changeSName={changeSName}/> }/>
    <Route path="/sign-in" element={<Login page={page} changePage={changePage}/>} />
    <Route path="/sign-up" element={<SignUp page={page} changePage={changePage}/>} />
    <Route path="/profile" element={<SEdit page={page} changePage={changePage}/>} />
    <Route path="/startups" element={<SList page={page}  changePage={changePage} sData={sData} changeSName={changeSName}/>} />
    </Routes>
    </Router>
  </div>);
}
export default App