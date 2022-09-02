import './App.css';
import {useState, useEffect} from 'react';

function App() {
  const [ip, setIp] = useState('');
  const [loc, setLocation] = useState([]);
  const myApiKey = 'at_UIAaG3MYFlg3BuDy98PiYsckqywSk'; //process.env.REACT_APP_IPIFY_API_KEY;
  const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${myApiKey}`;

  useEffect(()=>{
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setIp(data.ip);
        setLocation(data.location);
      })
      .catch(err => console.error(err)); 
  }, []);

  //console.log("Loc: " + loc);
 
  return (
    <div className="App">
      <h1>Hello, what is your IP?</h1>
      <ul className="output">
      <li><h2>Your IP is: {ip}</h2></li>
      <li>Country: {loc.country}</li>
      <li>City: {loc.city}</li>
      <li>Region: {loc.region}</li>
      <li>Longitude: {loc.lng}</li>
      <li>Latitude: {loc.lat}</li>
      </ul>
    </div>
  );    
}

export default App;
