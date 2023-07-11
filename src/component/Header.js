import React from 'react'
import '../CSS_folder/Header.css';
import GoCarLogo from "../media_folder/Header/GoCar_logo.png";

function Header() {
  return (
    <div className="HeaderContainer">
      <div className="appLogoContainer">
        <img src={GoCarLogo} className="appLogo" onClick={()=>{window.location.reload();}} />
      </div>
      <div className="tapContainer">
        <div className="tapList">
          <div className="tapItem">Home</div>
          <div className="tapItem">About us</div>
          <div className="tapItem">Car models</div>
          <div className="tapItem">Book now</div>
          <div className="tapItem">Our team</div>
          <div className="tapItem">Contact us</div>
        </div>
      </div>
      <div className="SignInContainer">
        <div className="button">Login</div>
        <div className="button_Register">Register</div>
      </div>
      
    </div>
  );
}

export default Header