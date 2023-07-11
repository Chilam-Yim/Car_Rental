import React from "react";
import Cover_C from "../media_folder/cover_c.png";
import { motion } from "framer-motion";
import "../CSS_folder/Cover.css";

function Cover() {
  const slogan1 = {
    initial: {
      opacity: 0,
      y: -20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.5,
      },
    },
  };
  const slogan2 = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.6,
      },
    },
  };
  return (
    <div class="container">
      <img class="cover" src={Cover_C} />
      <div class="slogan-container">
        <motion.div
          className="slogan1"
          initial="initial"
          animate="animate"
          variants={slogan1}
        >
          <div>
            Connect you and<br></br> your dream.{" "}
          </div>
        </motion.div>
        <motion.div
          className="slogan2"
          initial="initial"
          animate="animate"
          variants={slogan2}
        >
          <div>GoCar </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Cover;
