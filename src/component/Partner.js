import React from 'react'
import logo1 from "../media_folder/Partner/logo1.png"
import logo2 from "../media_folder/Partner/logo2.png";
import logo3 from "../media_folder/Partner/logo3.png";
import logo4 from "../media_folder/Partner/logo4.png";
import logo5 from "../media_folder/Partner/logo5.png";
import logo6 from "../media_folder/Partner/logo6.png";
import logo7 from "../media_folder/Partner/logo7.png";
import logo8 from "../media_folder/Partner/logo8.png";
import logo9 from "../media_folder/Partner/logo9.png";
import logo10 from "../media_folder/Partner/logo10.png";
import logo11 from "../media_folder/Partner/logo11.png";
import logo12 from "../media_folder/Partner/logo12.png";
import logo13 from "../media_folder/Partner/logo13.png";
import logo14 from "../media_folder/Partner/logo14.png";
import logo15 from "../media_folder/Partner/logo15.png";
import "../CSS_folder/Partner.css"

function Partner() {
  return (
    <div className="PartnerContainer">
      <div className="partnerHeader">
        Official&nbsp; <b>PARTNER</b>
      </div>
      <div className="subPartnerContainer">
        <div className="subPartner">
          <div className="column">
            <img className="partner_logo" src={logo1} />
            <img className="partner_logo" src={logo2} />
            <img className="partner_logo" src={logo3} />
            <img className="partner_logo" src={logo4} />
            <img className="partner_logo" src={logo5} />
          </div>
          <div className="column">
            <img className="partner_logo" src={logo6} />
            <img className="partner_logo" src={logo7} />
            <img className="partner_logo" src={logo8} />
            <img className="partner_logo" src={logo9} />
            <img className="partner_logo" src={logo10} />
          </div>
          <div className="column">
            <img className="partner_logo" src={logo11} />
            <img className="partner_logo" src={logo12} />
            <img className="partner_logo" src={logo13} />
            <img className="partner_logo" src={logo14} />
            <img className="partner_logo" src={logo15} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partner