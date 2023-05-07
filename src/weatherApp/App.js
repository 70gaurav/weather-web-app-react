import React, {  useState } from 'react'
import axios from 'axios'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

import "./weather.css"


function App() {
    const [value, setValue] = useState("")
    const [location, setLocation] = useState("")
    const key = "9b0931d9808c87226df2970dd5402599"

    function WeatherHandler(e) {
        e.preventDefault()
    
            async function getdata() {
                const data = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}`)
                setValue(data.data)
                setLocation("")
                
            }
            getdata()

        
    }
    return (
        <div className='wrapper'>
        <div className='weather'>
        <form onSubmit={WeatherHandler}>
                <TextField id="outlined-basic" label="Enter City" value={location} variant="outlined" onChange={(e) =>setLocation(e.target.value) } />
                <Button type='submit' variant="contained">Check</Button>
            </form>
                {
                    value ? (<div className='weatherReport'>
                        <h1>{value.name}</h1>
                        <img src={`https://flagcdn.com/60x45/${value.sys.country.toLowerCase()}.png`}></img>
                        
                        <h2> Temp: {`${Math.round(value.main.temp - 273.15)}°C`}</h2>
                        <h4>Description: {value.weather[0].description}</h4>
                        <h4>Humidity: {`${value.main.humidity}%`}</h4>
                        <h4>Wind: {`${value.wind.speed}km/hr`}</h4>
                    </div>)
                        : ("")
                }
        </div>
        </div>
    )
}

export default App