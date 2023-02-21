import React,{useState} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Header from './Header.js'
import { DropdownButton } from 'react-bootstrap'
import { Dropdown } from 'bootstrap'
function Home() {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div  >
        <div className='auth-component' style={{width:'1000px',height:'400px'}}>
        <div id="carouselExample" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className={`carousel-item ${index === 0 ? "active" : ""}`}>
            <div className="d-block w-100" style={{ backgroundColor: "lightblue"}}>
              Div 1
            </div>
          </div>
          <div className={`carousel-item ${index === 1 ? "active" : ""}`}>
            <div className="d-block w-100" style={{ backgroundColor: "lightgreen"}}>
            image1
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev" onClick={() => handleSelect(0)}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExample" role="button" data-slide="next" onClick={() => handleSelect(1)}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
        </div>
    </div>
  );
}
export default Home