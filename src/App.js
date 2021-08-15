import React, { useState } from 'react'
import Card from './components/Card';
import axios from 'axios';
import "./App.css";

const App = () => {
  const [cityName, setCityName] = useState("");
  const [response, setResponse] = useState({});
  const { data } = response;

  const handleChange = (e) => {
    setCityName(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  }

  const fetchData = async () => {
    const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_APIKey}`);
    setResponse(response);
  }

  return (
    <React.Fragment>
      <div className="Container">
      <div className="form">
                <div className="inputField">
                    <input type="text" name="city" value={cityName} onChange={(e) => handleChange(e)} placeholder="Enter City Name" />
                </div>
                <div className="submitButton">
                    <button type="submit" onClick={(e) => handleSubmit(e)}>Check Weather Information</button>
                </div>
      </div>
      {
        response.status === 200 ? <Card data={data}/> : null
      }
      </div>
    </React.Fragment>
  )
}

export default App
