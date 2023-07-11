import React, { useEffect, useState, useRef } from "react";
import "../CSS_folder/About.css";
import hand_png from "../media_folder/About/hand.png";
import support_png from "../media_folder/About/technical-support.png";
import choice_png from "../media_folder/About/choice.png";
import refund_png from "../media_folder/About/refund.png";
import Cars from "../media_folder/Booking/car_group.png";
import Tire from "../media_folder/tire.jpg";
import Track from "../media_folder/About/tire track.png";
import { motion } from "framer-motion";

function About() {


  const [number, setNumber] = useState(0);
  const numberRef = useRef(null);

  useEffect(() => {
    const targetNumber = 753210;
    const duration = 3;
    const interval = Math.ceil(duration / targetNumber);

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const handleIntersection = (entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        const timer = setInterval(() => {
          setNumber((prevNumber) => {
            const newNumber = prevNumber + 1727;
            if (newNumber >= targetNumber) {
              clearInterval(timer);
            }
            return newNumber;
          });
        }, interval);

        observer.unobserve(entry.target);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(numberRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const slogan1 = {
    initial: {
      opacity: 0,
      x: -20,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.8,
        delay: 0.5,
      },
    },
  };
  return (
    <div className="aboutContainer">
      {/* <div>
        <img className="tire" src={Tire}></img>
      </div> */}
      <div className="carGroupsContainer">
        {" "}
        <img className="carGroups" src={Cars} />
      </div>

      <div className="Why_Container">
        <div className="Why">Why GoCar ?</div>
      </div>
      {/* <div>
        <img className="track" src={Track} />
      </div> */}

      <div className="subAboutContainer">
        <div className="subAbout">
          <div className="left">
            <div className="leftContent">
              <div>
                <div className="save">
                  Save <span className="big">BIG</span> with GoCar
                </div>
                <div className="for">
                  For over 35 years, GoCar has been proudly serving the
                  community, providing reliable transportation solutions to
                  countless customers. With our extensive experience, you can
                  trust in our commitment to quality service and customer
                  satisfaction. We offer unbeatable prices and promotions,
                  ensuring that you get the best value for your money. Our
                  convenient booking process allows you to easily reserve a
                  vehicle, and our flexible options allow you to effortlessly
                  modify your trip as needed. Whether you're embarking on a
                  business trip or planning a family vacation, GoCar is here to
                  make your car rental experience seamless and hassle-free.
                </div>
                <div className="numberRefCon">
                  <div style={{ textAlign: "left" }} ref={numberRef}>
                    {number}
                  </div>
                  <div style={{ textAlign: "right" }} className="textRef">
                    <motion.div
                      className="slogan1"
                      initial="initial"
                      animate="animate"
                      variants={slogan1}
                    >
                      <div>customers have chosen our service</div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="iconPackContainer">
              <div className="iconContainer">
                <img className="icon" src={hand_png} />
                <div>
                  <div className="iconText feature">
                    Easy Payment and NO Hidden Fee
                  </div>
                  <div className="iconText desc">
                    We ensure a seamless checkout and transparent fee policy for
                    our valued customers via our user-friendly payment system.
                  </div>
                </div>
              </div>
              <div className="iconContainer">
                <img className="icon" src={support_png} />
                <div>
                  <div className="iconText feature">24/7 Online Support</div>
                  <div className="iconText desc">
                    We offer round-the-clock online support to address any
                    inquiries, concerns, or issues you may encounter, providing
                    you with peace of mind throughout your car rental journey.
                  </div>
                </div>
              </div>
              <div className="iconContainer">
                <img className="icon" src={choice_png} />
                <div>
                  <div className="iconText feature">
                    Wide Range of Car Choices
                  </div>
                  <div className="iconText desc">
                    Whether you're seeking economy, luxury, or versatility, we
                    have a variety of options available to ensure that you can
                    find the perfect vehicle that suits your requirements.
                  </div>
                </div>
              </div>
              <div className="iconContainer">
                <img className="icon" src={refund_png} />
                <div>
                  {" "}
                  <div className="iconText feature">Full Refund Policy</div>
                  <div className="iconText desc">
                    We offer a full refund for cancellations made at least 24
                    hours prior to the booking. Our customer-friendly policy
                    ensures that you have the flexibility to modify or cancel
                    your reservation without incurring any financial loss.{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
