import React from 'react'
import "../App.css";

const Card = ({data}) => {
    const {name, coord, main, wind} = data;
    return (
        <div className="weatherCard">
            <div className="cloud-icon"><i className="bi bi-cloud"></i></div>
            <div className="name lead">City Name : {name}</div>
            <div className="coords">
                <span className="lead">Longitude : {coord.lon}</span>
                <span className="lead">Latitude : {coord.lat}</span>
            </div>
            <div className="main">
                <span className="lead">Temprature : { main.temp }</span>
                <span className="lead">Minimum Temprature : { main.temp_min }</span>
                <span className="lead">Maximim Temprature : { main.temp_max }</span>
                <span className="lead">Pressure : { main.pressure }</span>
                <span className="lead">Humidity : { main.humidity }</span>
            </div>
            <div className="wind">
                <span className="lead">Wind Direction : {wind.deg}</span>
                <span className="lead">Wind Speed : {wind.speed}</span>
            </div>
        </div>
    )
}

export default Card