
import Button from 'react-bootstrap/Button';

function extractVideoId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
  
    return match && match[2].length === 11 ? match[2] : null;
  }
  const handleInvest=(e)=>{
   
  }

const Ssuccess = (props) => {
    const {item,i}=props;
    console.log(item)
    const a=extractVideoId(item.video)
   
  return (
    <div style={{display:"flex",marginLeft:"3.5%",marginRight:'1.5%',height:"200px",width:"100%",marginTop:"20px"}}>
    <div  className=''>
          <h2>{item.startUpName}</h2>
            <img src={"https://img.youtube.com/vi/"+a+"/hqdefault.jpg"} alt="YouTube Thumbnail" style={{ borderRadius:"20px 20px 20px 20px" ,height:"180px",width:"93%",transform:`translateY(8.3px)`,objectFit:'cover',imageRendering:'optimizeQuality'}}/>
            <h3  style={{marginTop:"10px",width:"93%",textAlign:"center"}}>We got Funded with ${item.fund} in {item.time} days</h3>
         </div>
         
         
    </div>
  );
};
 export default Ssuccess;