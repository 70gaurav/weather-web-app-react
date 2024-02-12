import React from "react";
import brokenclouds from "../assets/images/brokenclouds.png";
import clearsky from "../assets/images/clearsky.png";
import dust from "../assets/images/dust.png";
import fewclouds from "../assets/images/fewclouds.png";
import haze from "../assets/images/haze.png";
import heavyrain from "../assets/images/heavy-rain.png";
import hotweather from "../assets/images/hot-weather.png";
import lightrain from "../assets/images/light-rain.png";
import mist from "../assets/images/mist.png";
import moderaterain from "../assets/images/moderaterain.png";
import overcast from "../assets/images/overcast.png";
import rainyday from "../assets/images/rainy-day.png";
import scattered from "../assets/images/scattered.png";
import smoke from "../assets/images/smoke.png";
import snow from "../assets/images/snow.png";
import thunderstorm from "../assets/images/thunderstorm.png";
import tornado from "../assets/images/tornado.png";
import 'animate.css';

function Switch({ description }) {
  let url ;
  switch (description) {
    case "clear sky":
        url = clearsky;
      break;

    case "few clouds":
      url = fewclouds;
      break;

    case "scattered clouds":
      url = scattered;
      break;

    case "broken clouds":
      url = brokenclouds;
      break;

    case "overcast clouds":
      url = overcast;
      break;

    case "light rain":
      url = lightrain;
      break;

    case "moderate rain":
      url = moderaterain;
      break;
    case "heavy rain":
      url = heavyrain;
      break;

    case "thunderstorm":
      url = thunderstorm;
      break;

    case "snow":
      url = snow;
      break;

    case "mist":
    case "fog":
      url = mist;
      break;

    case "smoke":
      url = smoke;
      break;

    case "haze":
      url = haze;
      break;

    case "sand":
    case "dust":
    case "ash":
    case "squalls":
      url = dust;
      break;

    case "tornado":
      url = tornado;
      break;

    default:
      url = rainyday;
      break;
  }
  return <img className="animate__animated animate__swing" src={url} alt="Weather" style={{height:"100px", width: "100px"}} />;
}

export default Switch;
