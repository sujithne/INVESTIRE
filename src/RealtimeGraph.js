import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend ,Text} from 'recharts';
function getCurrentTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const amOrPm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");
    const currentTimeString = `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${amOrPm}`;
    return currentTimeString;
  }
  
const RealtimeGraph = (props) => {
  const {startUp}=props;
  const [data, setData] = useState([{time: getCurrentTime(), TotalFund:null}]);
  const [newData,setNewData]=useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://52.207.171.26:8081/api/totalFund/'+startUp);
        const data = await response.text();
        setData(prevData => [...prevData, { time: getCurrentTime(), TotalFund: data }]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://52.207.171.26:8081/api/totalFund/'+startUp);
        const data = await response.text();
        setData(prevData => [...prevData, { time: getCurrentTime(), TotalFund: data }]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    const intervalId = setInterval(fetchData, 10000);
    return () => clearInterval(intervalId);
  }, []);
console.log(data);
  return (
    <div>
    <LineChart width={500} height={320} data={data}>
            

      <Legend verticalAlign="top" align="right" />
      <Line type="monotone" dataKey="TotalFund" stroke="#8884d8" strokeWidth={2} />
      <XAxis dataKey="time" domain={['auto', 'auto']}  tickCount={10} label={{value:'Time',position :'insideBottom',dy:10}} />
      <YAxis label={{ value: '', angle: -90, position: 'insideLeft' }} />

      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      
    </LineChart>
    <div style={{marginTop:"20px",flexDirection:"row"}}><h3 style={{}}>Total Fund: <b style={{color:"green"}}>${data[data.length-1].TotalFund}</b></h3></div>
    </div>
  );
};

export default RealtimeGraph;
