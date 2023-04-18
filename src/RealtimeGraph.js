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
  
const RealtimeGraph = () => {
  const [data, setData] = useState([{time: getCurrentTime(), TotalFund: 20}]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setData(prevData => {
        const newData = Math.random()*100; 
        return [...prevData, { time: getCurrentTime(), TotalFund: newData }];
      });
    }, 10000);
    return () => clearInterval(intervalId);
  }, []);
console.log(data);
  return (
    
    <LineChart width={500} height={320} data={data}>
            

      <Legend verticalAlign="top" align="right" />
      <Line type="monotone" dataKey="TotalFund" stroke="#8884d8" strokeWidth={2} />
      <XAxis dataKey="time" domain={['auto', 'auto']}  tickCount={10} label={{value:'Time',position :'insideBottom',dy:10}} />
      <YAxis label={{ value: '', angle: -90, position: 'insideLeft' }} />

      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      
    </LineChart>
   
  );
};

export default RealtimeGraph;
