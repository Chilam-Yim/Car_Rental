import React from "react";
import "../CSS_folder/Footer.css";
import go_car_white from "../media_folder/go_car_white.png";
import apple from "../media_folder/Footer/apple.png";
import google from "../media_folder/Footer/google.png";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import Youtube from "../media_folder/Footer/youtube.png"
import Linkedln from "../media_folder/Footer/LI.png"
import Facebook from "../media_folder/Footer/facebook.png"
import Instagram from "../media_folder/Footer/ig.png"
import Twitter from "../media_folder/Footer/twi.png"
import { Email } from "@mui/icons-material";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

function Footer() {
  return (
    <div className="FooterContainer">
      <div className="subContainer">
        <div className="subItem">History of GoCar</div>
        <div className="subItem">Vision & Mission </div>
        <div className="subItem">Membership</div>
        <div className="subItem">Special Offer</div>
        <div className="subItem">Voluntary Work</div>
        <div className="subItem">GoCar Charity Foundation</div>
        <div className="subItem">Career - Join Us</div>
      </div>

      <div>
        <div className="textBoxContainter">
          <div className="left">
            <div>
              <div className="subscribe">
                Subscribe GoCar to receive the latest news and special offers
              </div>
              <div>
                <input
                  className="inputText"
                  type="text"
                  placeholder="Enter your email here"
                />
              </div>
              <div className="subButton">Subscribe</div>
            </div>
          </div>
          <div className="right">
            <div className="dw">
              <img src={apple} />
            </div>
            <div className="dw">
              <img src={google} />
            </div>
          </div>
        </div>
      </div>

      <div className="contactContainer">
        <div className="tel">
          <div className="telSub" style={{ alignItems: "center" }}>
            <PhoneIcon />
            <span>&nbsp;Tel: &nbsp;&nbsp;+1 (123) 456 789 </span>
          </div>
          <div className="telSub" style={{ alignItems: "center" }}>
            <Email />

            <span>
              &nbsp;Email:&nbsp;&nbsp;{" "}
              <span className="emailUnderline">customer_support@gocar.com</span>
            </span>
          </div>
          <div className="telSub" style={{ alignItems: "center" }}>
            <LibraryBooksIcon />
            <span>
              &nbsp;Media Enquiry:&nbsp;&nbsp;{" "}
              <span className="emailUnderline">media_enquiry@gocar.com </span>
            </span>
          </div>
        </div>
        <div className="workingHours">
          <div className="telSub" style={{ alignItems: "center" }}>
            <LocationOnIcon />
            <span>
              &nbsp;Phyiscal store location: 123, 123 GoCar Avenue, Toronto, ON,
              G1O2C3
            </span>
          </div>
          <div className="telSub" style={{ alignItems: "center" }}>
            <WatchLaterIcon />

            <span>
              &nbsp;Mon - Fri: 08:00 am - 10:00 pm (closed on Sun and public
              holiday)
            </span>
          </div>
          <div className="telSub" style={{ alignItems: "center" }}>
            <SupportAgentIcon />

            <span>&nbsp;24/7 Online Support</span>
          </div>
        </div>
        <div className="mediaBar">
          <div>
            <img className="logo" src={Youtube} />
          </div>
          <div>
            <img className="logo" src={Twitter} />
          </div>
          <div>
            <img className="logo" src={Linkedln} />
          </div>
          <div>
            <img className="logo" src={Instagram} />
          </div>
          <div>
            <img className="logo" src={Facebook} />
          </div>
        </div>
        <div className="socialMedia"></div>
      </div>

      <div className="imgContainer">
        <img
          className="go_car_white"
          src={go_car_white}
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        />
      </div>

      <div className="lastLineContainer">
        <div className="lastItem">Privacy Policy</div>
        <div className="lastItem">|</div>
        <div className="lastItem">Terms and Conidtions</div>
        <div className="lastItem">|</div>
        <div className="lastItem">Accessibiilty</div>
      </div>

      <div className="copyright">
        ©2023 GoCar Company Ltd. All rights reserved
      </div>
    </div>
  );
}

export default Footer;
