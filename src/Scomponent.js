
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';

function extractVideoId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
  
    return match && match[2].length === 11 ? match[2] : null;
  }
  

const Scomponent = (props) => {
    const {item,i,sData, changeSName,page,changePage,access}=props;
    console.log(item)
    const a=extractVideoId(item.video)
    const navigate=useNavigate();
    const handleInvest = (e) => {
      console.log(e);
      try {
          if (access == true) {
              alert("Profile Incomplete");
          }
          else {
              changePage('ihome')
              changeSName(e);
              navigate('/sDetails')
          }
      }
      catch(e){
        navigate('/sign-in')
      }
    }
  return (
    <div style={{display:"flex",marginLeft:"3.5%",marginRight:'4.5%',height:"200px",width:"85%",marginTop:"20px"}}>
    <div  className=''>
          <h2>{item.startUpName}</h2>
            <img src={"https://img.youtube.com/vi/"+a+"/hqdefault.jpg"} alt="YouTube Thumbnail" style={{ borderRadius:"20px 20px 0px 0px" ,height:"180px",width:"105%",transform:`translateY(7px)`,objectFit:'cover',imageRendering:'optimizeQuality'}}/>
            <Button variant="success" onClick={()=>handleInvest(item)} style={{width:"105%",height:"60px",fontSize:"20px"}}>Invest</Button>
         </div>
         
         
    </div>
  );
};
 export default Scomponent;