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
import PaymentPage from './PaymentPage'
import MyInvestmentsPage from './MyInvestmentsPage'
import Footer from './Footer'
function App() {
  const [page,changePage]=useState("home");
  const [startUp,changeStartUp]=useState("");
  const [investor,changeInvestor]=useState("");
  const [investments,setInvestments]=useState([]);
  const [Cinvestments,setCinvestments]=useState([]);
  const [sData,changeSName]=useState({vision:"",description:"",aboutFounders:"",productDescription:""});
 // const successList=[{startUpName:"Scrub Daddy",video:"https://youtu.be/fyg-yYiDJ2M",fund:60000,time:"300 days"},{startUpName:"cupbod",video:"https://youtu.be/mKlZ7rtiPbY",fund:50000,time:"250 days"},{startUpName:"Bombas",video:"https://youtu.be/qT66d_PRR6U",fund:64000,time:"350 days"},{startUpName:"Pizza Cup Cake",video:"https://youtu.be/7-1EEwPQ_38",fund:40000,time:"300 days"},{startUpName:"Smart Soda",video:"https://www.youtube.com/watch?v=u3jhmaeEJbI",fund:30000,time:"150 days"}];
  const [successList,setSuccessList]=useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch('http://52.207.171.26:8081/getSuccessList',{
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
        setSuccessList(json);
         console.log(sData);
          

          
        } else {
          const text = await response.text();
          
          
        }
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    
    fetchData();
  }, []);
  
  return (
  <div >
    <Router>
    <Routes>
    <Route path='/' element={< Header page={page} changePage={changePage} sData={sData} changeSName={changeSName} successList={successList}/>}/>
    <Route path='/home' element={ < Header page={page} changePage={changePage} sData={sData} changeSName={changeSName} successList={successList}/>}/>
    <Route path='/ihome' element={<Ihome page={page} changePage={changePage} sData={sData} changeSName={changeSName} investor={investor} changeInvestor={changeInvestor} investments={investments} setInvestments={setInvestments} successList={successList} Cinvestments={Cinvestments} setCinvestments={setCinvestments}/>}/>
    <Route path='/shome' element={<Shome  page={page} changePage={changePage} sData={sData} changeSName={changeSName} startUp={startUp} changeStartUp={changeStartUp}/> }/>
    <Route path='/sDetails' element={<SDetails  page={page} changePage={changePage} sData={sData} changeSName={changeSName} startUp={startUp}/> }/>
    <Route path="/sign-in" element={<Login page={page} changePage={changePage} startUp={startUp} changeStartUp={changeStartUp} investor={investor} changeInvestor={changeInvestor}/>} />
    <Route path="/sign-up" element={<SignUp page={page} changePage={changePage}/>} />
    <Route path="/profile" element={<SEdit page={page} changePage={changePage} sData={sData} changeSName={changeSName}/>} />
    <Route path="/startups" element={<SList page={page}  changePage={changePage} sData={sData} changeSName={changeSName}/>} />
    <Route path="/payment" element={<PaymentPage page={page}  changePage={changePage} sData={sData} changeSName={changeSName} investor={investor} />} />
    <Route path="/history" element={<MyInvestmentsPage page={page}  changePage={changePage} sData={sData} changeSName={changeSName} investor={investor} changeInvestor={changeInvestor} investments={investments} Cinvestments={Cinvestments} setCinvestments={setCinvestments}/>} />

    </Routes>
    </Router>
    <footer style={{marginTop:"150px"}}>
      <Footer/>
    </footer>
  </div>);
}
export default App