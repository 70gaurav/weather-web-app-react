import React, { useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Switch from "./switch";
import 'animate.css';
import "./weather.css";

function App() {
  const [value, setValue] = useState("");
  const [location, setLocation] = useState("");
  const [map, setMap] = useState([]);
  const key = "c2c0d5e43df0a1b8b199ff7f22d2c2cd";

  async function getMap() {
    const data = await axios.get(
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyBNLrJhOMz6idD05pzfn5lhA-TAw-mAZCU"
    );
    setMap(data.data);
  }
  getMap();

  console.log(value);

  function WeatherHandler(e) {
    e.preventDefault();

    async function getdata() {
      const data = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}`
      );
      setValue(data.data);
      setLocation("");
    }
    getdata();
  }
  return (
    <div className="wrapper">
      <div className="weather">
        <form onSubmit={WeatherHandler}>
          <TextField
            id="outlined-basic"
            label="Enter City"
            value={location}
            variant="outlined"
            onChange={(e) => setLocation(e.target.value)}
          />
          <Button type="submit" variant="contained">
            Check
          </Button>
        </form>
        {value ? (
          <div className="weatherReport">
            <div className="animate__animated animate__bounceInLeft box-left">
              <div className="box">
                <h3>
                  Temperature: {`${Math.round(value.main.temp - 273.15)}°C`}{" "}
                </h3>
              </div>
              <div className="box">
                <h3>Description: {value.weather[0].description} </h3>
              </div>
            </div>
            <div >
                <Switch description={value.weather[0].description}/>
            </div>
            <div className="animate__animated animate__bounceInRight box-right">
              <div className="box">
                <h3>
                Humidity: {`${value.main.humidity}%`}
                </h3>
              </div>
              <div className="box">
                <h3>Wind: {`${value.wind.speed}km/hr`} </h3>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
