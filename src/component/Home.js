import React, {useEffect, useState} from "react";
import "../CSS_folder/Home.css";
import Benz from "../media_folder/benz_c.png";



function Home() {

    
  return (
    <div className="homeContainer">
      <div className="subHomeContainer">
        <div className="contentContainer">
          <div className="contents">
            {" "}
            <div className="Unlock">Explore the world with us: </div>
            <div className="Choose">
              Choose
              <span style={{ color: "#ffd83a" }}> GoCar </span> for Seamless
              <div> Rental Car Experiences!</div>
            </div>
            <div className="Unbeatable">
              Unbeatable price. Easy booking. 24/7 online support.
            </div>
            <div className="Book">Book now</div>
            <div className="More">Why GoCar</div>
          </div>
        </div>
        <div className="benzContainer">
          {/* <img className="city" src={City} /> */}
          <img className="benz" src={Benz} />
        </div>
      </div>
    </div>
  );
}

export default Home;
