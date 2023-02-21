
import Button from 'react-bootstrap/Button';

function extractVideoId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
  
    return match && match[2].length === 11 ? match[2] : null;
  }
  const handleInvest=(e)=>{
   
  }

const Scomponent = (props) => {
    const {item,i}=props;
    console.log(item)
    const a=extractVideoId(item.video)
   
  return (
    <div style={{display:"flex",marginLeft:"50px",height:"200px",width:"100%",marginTop:"20px"}}>
    <div  className=''>
          <h2>{item.startUpName}</h2>
            <img src={"https://img.youtube.com/vi/"+a+"/hqdefault.jpg"} alt="YouTube Thumbnail" style={{ borderRadius:"20px 20px 0px 0px" ,height:"180px",width:"120%",transform:`translateY(7.5px)`,objectFit:'cover',imageRendering:'optimizeQuality'}}/>
            <Button variant="success" onClick={()=>handleInvest(item)} style={{width:"120%",height:"60px",fontSize:"20px"}}>Invest</Button>
         </div>
         
         
    </div>
  );
};
 export default Scomponent;