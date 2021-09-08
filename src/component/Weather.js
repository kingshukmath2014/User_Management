import React, { useState } from "react";
import axios from "axios";

const Weather = () => {
  const [temp, setTemp] = useState(0);
  const [location, setLocation] = useState();
  const [humidity, sethumidity] = useState(0);
  const [pressure, setpressure] = useState(0);

  const getWeather = (e) => {
    setLocation(e.target.value);
    axios({
      method: "GET",
      url: "https://community-open-weather-map.p.rapidapi.com/weather",
      params: {
        q: e.target.value,
        lat: "0",
        lon: "0",
        id: "2172797",
        lang: "null",
        units: "imperial",
      },
      headers: {
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        "x-rapidapi-key": "a50a371133msh016270554c0dbbbp1389ccjsn98eb6200b4ec",
      },
    }).then(function (response) {
      setTemp(Math.ceil((response.data.main.temp - 32) * (5 / 9)));
      sethumidity(response.data.main.humidity);
      setpressure(response.data.main.pressure);
    });
  };

  return (
    <div>
      <div className="comp-heading">Weather</div>
      <div className="content-wrap weather-container">
        <div className="weather-heading">Select State</div>
        <div className="formField">
          <div>
            <select
              name="state"
              className="inputField"
              style={{ width: "30vw" }}
              value={location}
              onChange={(e) => getWeather(e)}
            >
              <option value="">Select State</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Andaman and Nicobar Islands">
                Andaman and Nicobar Islands
              </option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chandigarh">Chandigarh</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Dadar and Nagar Haveli">
                Dadar and Nagar Haveli
              </option>
              <option value="Daman and Diu">Daman and Diu</option>
              <option value="Delhi">Delhi</option>
              <option value="Lakshadweep">Lakshadweep</option>
              <option value="Puducherry">Puducherry</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jammu and Kashmir">Jammu and Kashmir</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Odisha">Odisha</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Telangana">Telangana</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="West Bengal">West Bengal</option>
            </select>
          </div>
        </div>
        <div className="details-container">
          <div className="details-list">
            <div className="det-heading">Temperature</div>
            <div className="det-details">
              <span style={{ fontSize: "100px" }}>{temp}</span>
              <sup>o</sup>
              <span>c</span>
            </div>
          </div>
          <div className="details-list">
            <div className="det-heading">Humidity</div>
            <div className="det-details">
              <span style={{ position: "relative", top: "10px" }}>
                {humidity}
              </span>
            </div>
          </div>
          <div className="details-list">
            <div className="det-heading">Pressure</div>
            <div className="det-details" style={{ borderRight: "none" }}>
              <span style={{ position: "relative", top: "10px" }}>
                {pressure}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
