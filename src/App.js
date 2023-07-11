import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Header from "./component/Header";
import Cover from "./component/Cover";
import Home from "./component/Home";
import Flash from "./component/Flashing";
import About from "./component/About";
import Footer from "./component/Footer";
import Book from "./component/Book"
import Partner from "./component/Partner"
import QandA from "./component/QandA"
import Feedback from "./component/CarModel"
import Tire from "./media_folder/tire.jpg";
import { motion } from "framer-motion";
import { Twitter } from "@mui/icons-material";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";



function App() {
   const logoAni = {
     initial: {
       opacity: 0,
       x: -20,
     },
     animate: {
       opacity: 1,
       x: 0,
       transition: {
         duration: 0.8,
         delay: 0.5,
       },
     },
   };
  return (
    <div className="App">
      <Header />
      <Flash/>
      <Cover />

      <Home />
      <Book />

      <About />
      <Feedback/>
      <QandA/>

  <Partner/>
      <Footer />
      
      <div>
        <ArrowCircleUpIcon
          fontSize="large"
          className="arrowButton"
          style={{ color: "#ffd83a" }}
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        />
      </div>
    </div>
  );
}

export default App;
