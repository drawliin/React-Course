import "./weatherapp.css";
import React, {useState} from 'react';
export default function WeatherApp(){

    const [city, setCity] = useState("");
    const [temp, setTemp] = useState("");
    const [humidity, setHumidity] = useState("");
    const [desc, setDesc] = useState("");
    const [message, setMessage] = useState('');
    const apiKey = '6affb41c9f8c4d092f5f95da7be6227c'

    function onHandleSubmit(e){
        e.preventDefault();
        setMessage('');
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then(response=>response.json())
        .then(data => {
            setTemp((data.main.temp - 273.15).toFixed(2));
            setHumidity(data.main.humidity);
            setDesc(data.weather[0].description);
        })
        .catch(()=>{setMessage('Please Enter a valid City')});
    }
    return(
        
        <div className="weatherAppContainer">
            <form className='weatherForm' onSubmit={onHandleSubmit}>
                <input type="text" placeholder="Enter a city: " className="cityInput" onChange={(e) => setCity(e.target.value)} />
                <button>GetWeather</button>

            </form>

            <div className='card'>
                <h1>{city}</h1>
                <p className="tempDisplay">Temperature: {temp}%</p>
                <p className="humDisplay">Humidity: {humidity}%</p>
                <p className="descDisplay">{desc}</p>
                <p className="errorDisplay">{message}</p>
            </div>
        </div>
        
        
        
    )
}