import React, { useState } from "react";
import "../CSS_folder/Book.css";
import DatePicker from "react-datepicker/dist/react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DriveEtaIcon from "@mui/icons-material/DriveEta";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PlaceIcon from "@mui/icons-material/Place";
import HandshakeIcon from "@mui/icons-material/Handshake";
import carModels from "./Cars";
import locationList from "./Location";


function Book() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [selectedCar, setSelectedCar] = useState("");

  const handleOptionChange = (event) => {
    setSelectedCar(event.target.value);
  };

  return (
    <div className="bookContainer">
      <div className="bookSubContainer">
        <div className="book">Search for a car</div>
        <div className="items">
          <div className="itemHeader">
            <div className="itemSubContainer">
              <DriveEtaIcon style={{ color: "#ffd83a" }} />
              &nbsp; Car Models
            </div>
            <div className="itemResponse">
              <select value={selectedCar} onChange={handleOptionChange}>
                <option value="">Select a car model</option>
                {carModels.map((car, index) => (
                  <option key={index} value={car.model}>
                    {car.model}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="itemHeader">
            <div className="itemSubContainer">
              <CalendarMonthIcon style={{ color: "#ffd83a" }} />
              &nbsp; Start Date
            </div>
            <div className="itemResponse">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                showTimeSelect
                dateFormat="Pp"
              />
            </div>
          </div>
          <div className="itemHeader">
            <div className="itemSubContainer">
              <CalendarTodayIcon style={{ color: "#ffd83a" }} />
              &nbsp; End Date
            </div>
            <div className="itemResponse">
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                showTimeSelect
                dateFormat="Pp"
              />
            </div>
          </div>
        </div>
        <div className="items">
          <div className="itemHeader">
            <div className="itemSubContainer">
              <PlaceIcon style={{ color: "#ffd83a" }} />
              &nbsp; Pick-up
            </div>
            <div className="itemResponse">
              <select value={selectedCar} onChange={handleOptionChange}>
                <option value="">Select a location</option>
                {locationList.map((location, index) => (
                  <option key={index} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="itemHeader">
            <div className="itemSubContainer">
              <HandshakeIcon style={{ color: "#ffd83a" }} />
              &nbsp; Return
            </div>
            <div className="itemResponse">
              <select value={selectedCar} onChange={handleOptionChange}>
                <option value="">Select a location</option>
                {locationList.map((location, index) => (
                  <option key={index} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="itemHeader">
            <div className="itemSubContainer">
              <div className="searchCarButton">Search</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Book;
