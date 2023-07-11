import React from "react";
import "../CSS_folder/QandA.css";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function QandA() {
  const qAndAList = [
    {
      q: "Q: What documents do I need to rent a car?",
      a: " A: To rent a car, you will typically need a valid driver license, a credit card in your name for the deposit and payment, and a form of identification such as a passport or ID card.",
    },
    {
      q: " Q: Is there an age requirement to rent a car?",
      a: " A: Yes, most car rental companies require drivers to be at least 21 years old, and some may have a minimum age requirement of 25.However, drivers under the age of 25 may be subject to additional fees or restrictions.",
    },
    {
      q: "Q: What is the fuel policy for the rental cars?",
      a:"A: Our rental cars are usually provided with a full tank of fuel, and we expect them to be returned with a full tank. If the car is not returned with a full tank, you may be charged for refueling at the prevailing rate, in addition to any service fees."
    },
    {q:"Q: Can I rent a car if I have a debit card instead of a credit card?",a:" A: Yes, some car rental companies accept debit cards as a formof payment. However, please note that additional requirements,such as a credit check or proof of insurance, may apply whenusing a debit card. It is recommended to check with the specificcar rental company for their policies regarding debit card usage."}
  ];

  return (
    <div className="QandAContainer">
      <div className="aQandAHeaderContainer">
        <div className="aQandAHeader">Frequently Asked Questions</div>
      </div>

      <div className="subQandAContainer">
        <div className="q_a">
          {qAndAList.map((qa) => {
            return (
              <div>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{
                      color: "white",
                      backgroundColor: "rgb(46, 47, 61)",
                      borderBottom: "1px solid #ccc",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: "'Ubuntu', sans-serif",
                        "& .MuiAccordionSummary-content": {
                          fontWeight: "bold",
                          fontSize: "1.2rem",
                        },
                      }}
                    >
                      {qa.q}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      sx={{
                        fontSize: "1rem",
                        fontStyle: "italic",
                        color: "#555",
                        fontFamily: "'Ubuntu', sans-serif",
                      }}
                    >
                      {qa.a}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default QandA;
