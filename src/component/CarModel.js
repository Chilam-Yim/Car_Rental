import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "../CSS_folder/CarModel.css";
import Cars from './Cars'

const TabPanel = ({ children, value, index }) => {
  return (
    value === index && (
      <Box sx={{ p: 3 }}>
        <Typography>{children}</Typography>
      </Box>
    )
  );
};

export default function CarModel() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

 

  return (
    <div className="carModel">
      <div className="carModelHeaderContainer">
        <div className="carModelHeader">Popular Car Model</div>
      </div>
      <div className="carModelContainer">
        <div className="subCarModelContainer">
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              height: 504,
            }}
          >
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              sx={{
                borderRight: 1,
                borderColor: "divider",
                "& .MuiTabs-indicator": {
                  backgroundColor: "#ffd83a",
                },
                "& .Mui-selected": {
                  color: "#ffd83a",
                },
                color: "#ffd83a",
                fontFamily: "'Ubuntu', sans-serif",
              }}
            >
              {Cars.map((car) => (
                <Tab label={car.model} key={car.model} />
              ))}
            </Tabs>

            {Cars.map((car, index) => (
              <TabPanel value={value} index={index} key={index}>
                <div className="carModelMapContainer">
                  <div className="subCarModelContainer">
                    <div className="carModelMapContainerItem">
                      <img className="carSize" src={car.image} />
                    </div>
                    <div className="carModelMapContainerItem">
                      <div>
                        {" "}
                        <table className="table-bordered">
                          <thead></thead>
                          <tbody>
                            <tr>
                              <td colSpan="2" style={{ textAlign: "center" }}>
                                {car.model}
                              </td>
                            </tr>
                            <tr>
                              <td>genre</td>
                              <td>{car.genre}</td>
                            </tr>
                            <tr>
                              <td>price</td>
                              <td>{car.price}</td>
                            </tr>
                            <tr>
                              <td>year</td>
                              <td>{car.year}</td>
                            </tr>
                            <tr>
                              <td>transmission</td>
                              <td>{car.transmission}</td>
                            </tr>
                          </tbody>
                        </table>
                        <div className="carModelButton cMBOne">
                          More details
                        </div>
                        <div className="carModelButton cMBTwo">Book Now</div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
            ))}
          </Box>
        </div>
      </div>
    </div>
  );
}
