import React from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <motion.div
        className="poop"
        animate={{
          scale: [6, 7, 6, 7, 6],
          y: [30, 60, 90, 300, 400]
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          loop: Infinity,
          repeatDelay: 1
        }}
        whileHover={{ scale: 35 }}
        whileTap={{ rotate: [0, 5, -5, 5, 0] }}
      >
        <span role="img" aria-label="poop">
          💩
        </span>
      </motion.div>
      <motion.div
        className="laugh"
        animate={{
          scale: [6, 7, 6, 7, 6],
          x: 300,
          y: -300
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.25, 0.5, 0.75, 1],
          loop: Infinity,
          repeatDelay: 1
        }}
      >
        <span role="img" aria-label="laugh">
          😂
        </span>
      </motion.div>
      <motion.div
        className="laugh2"
        animate={{
          scale: [6, 7, 6, 7, 6],
          x: -300,
          y: -300
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.25, 0.5, 0.75, 1],
          loop: Infinity,
          repeatDelay: 1
        }}
      >
        <span role="img" aria-label="laugh2">
          😂
        </span>
      </motion.div>
      <motion.div
        className="laugh3"
        animate={{
          scale: [6, 7, 6, 7, 6],
          y: -300
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.25, 0.5, 0.75, 1],
          loop: Infinity,
          repeatDelay: 1
        }}
      >
        <span role="img" aria-label="laugh2">
          😂
        </span>
      </motion.div>
      <motion.div
        className="ROFL"
        aria-label="ROFL"
        role="img"
        style={{
          scale: 30
        }}
        animate={{
          rotate: [
            315,
            270,
            225,
            180,
            135,
            90,
            45,
            0,
            45,
            90,
            135,
            180,
            225,
            270,
            315
          ]
        }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          loop: Infinity,
          repeatDelay: 0
        }}
      >
        <span role="img" aria-label="ROFL">
          🤣
        </span>
      </motion.div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
