import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import './Weather.css';
import { GoHomeFill } from 'react-icons/go';

export default function Weather(){
    const [city, setCity] =useState('');
    const [weather, setWeather]=useState();
    const [error, setError]=useState('');


    const getData=(e)=>{
        e.preventDefault();
        const API_KEY="1f59f164b9fe41d8be7153204252510";
        fetch(`http://api.weatherapi.com/v1/current.json?q=${city}&key=${API_KEY}`)
        .then(res=>res.json())
        .then(data=>setWeather(data));
        console.log(weather);
    }

    const Enter =(e)=>{
        if(e.key==='Enter'){
            getData(e);
        }
    }


    return (
        <div className='weather-app'>
            
            <h2> <Link to='/'> <GoHomeFill /> </Link>  WEATHER APP</h2>
            <div className='weather-container'>
                <div id='input' >
                    <form onSubmit={getData} className='form'>
                        <input type='text' value={city} placeholder='Enter your city here...' onChange={(e)=>{setCity(e.target.value)}}  onKeyDown={(e)=>{Enter(e)}} />
                        <button type='submit'>Search</button>
                    </form>
                </div>
               <div className='main'>
                    {weather ?
                    <div id='current-data'>
                        <div id='location' >
                            <h4> {weather.location.name}, {weather.location.country}</h4>
                        </div>
                        <div id='dt'>
                            <div id='date-time'>
                            <h4>⌚{weather.location.localtime.slice(11)}</h4>
                            <h4>{weather.location.localtime.slice(0,11)}</h4>
                        </div>
                        </div>
                        <div id='image'>
                            <img src={weather.current.condition.icon} alt='weather-icon' height={"100px"} width={"100px"}/>
                            <h4>{weather.current.condition.text}</h4>
                        </div>
                        <div id='weather-data'>
                            <div>Temp <p> {weather.current.temp_c}</p> </div>
                            <div>Humidity <p> {weather.current.humidity}</p></div>
                            <div>Wind   <p> Dir: {weather.current.wind_dir}</p> Speed: {weather.current.wind_mph}</div>
                            

                        </div>
                    </div> : <h4>{error}</h4>

                    }
               </div>
            </div>
        </div>
    )
}